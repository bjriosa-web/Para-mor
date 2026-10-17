import {Photo} from '../components/Common';
import {useEffect,useMemo,useRef,useState} from 'react';import {CFG} from '../data/config';import {asset,egg,load,win,toast} from '../data/store';
const done=g=>load().games[g]?' ✅':'';

/* ───────── 1 · Rompecabezas ───────── */
// ✏️ MODIFICAR: la foto se cambia en src/data/config.js → puzzleImg
const SOLVED=[...Array(9).keys()];
const shuffle=()=>{let a;do{a=[...SOLVED].sort(()=>Math.random()-.5)}while(a.every((v,k)=>v===k));return a};
function Puzzle(){const [w,setW]=useState(!!load().games.puzzle),[o,setO]=useState(()=>w?SOLVED:shuffle()),[s,setS]=useState(-1);
 const tap=i=>{if(w)return;if(s<0)return setS(i);const n=[...o];[n[i],n[s]]=[n[s],n[i]];setO(n);setS(-1);if(n.every((v,k)=>v===k)){win('puzzle');setW(true);toast('¡Lo lograste! ❤️')}};
 return <div className="game"><h3>1 · Rompecabezas{done('puzzle')}</h3><small>Toca dos piezas para intercambiarlas hasta armar la foto.</small>
  <div className="puz">{o.map((v,i)=><button key={i} className={'pz'+(s===i?' sel':'')} onClick={()=>tap(i)} aria-label={`Pieza ${i+1}`}>
   <img src={asset('photos/'+CFG.puzzleImg)} alt="" draggable={false} style={{left:`-${v%3*100}%`,top:`-${Math.floor(v/3)*100}%`}}/>{!w&&<em>{v+1}</em>}</button>)}</div>
  {w&&<p>¡Lo lograste! ❤️ Mensaje: contigo todo encaja.</p>}
  <button onClick={()=>{setO(shuffle());setS(-1);setW(false)}} style={{marginTop:8}}>Mezclar de nuevo</button></div>}

/* ───────── 2 · Pupiletras ───────── */
// ✏️ MODIFICAR: las palabras escondidas (en MAYÚSCULAS y sin tildes). Máximo 11 letras cada una.
const WORDS=['MARLON','MOR','AMOR','DANZA','GUADALUPE','PELICULAS','MESSI','BARCELONA','FUTBOL','PASEO'];
const N=11,D=[[0,1],[1,0],[1,1]];
function tryBuild(){const g=Array.from({length:N},()=>Array(N).fill('')),placed=[];
 [...WORDS].sort((a,b)=>b.length-a.length).forEach(w=>{for(let t=0;t<800;t++){const [dr,dc]=D[Math.floor(Math.random()*3)],r=Math.floor(Math.random()*N),c=Math.floor(Math.random()*N);
  if(r+dr*(w.length-1)>=N||c+dc*(w.length-1)>=N)continue;let ok=true;for(let k=0;k<w.length;k++){const x=g[r+dr*k][c+dc*k];if(x&&x!==w[k])ok=false}
  if(!ok)continue;for(let k=0;k<w.length;k++)g[r+dr*k][c+dc*k]=w[k];placed.push(w);return}});
 const L='ABCDEFGHIJLMNOPRSTUZ';return{g:g.map(r=>r.map(x=>x||L[Math.floor(Math.random()*L.length)])),words:placed}}
// si alguna palabra no cupo, se reintenta: así el juego siempre se puede completar
const build=()=>{let r;for(let a=0;a<40;a++){r=tryBuild();if(r.words.length===WORDS.length)break}return r};
const line=(a,b)=>{const dr=b[0]-a[0],dc=b[1]-a[1],n=Math.max(Math.abs(dr),Math.abs(dc));if(dr&&dc&&Math.abs(dr)!==Math.abs(dc))return[];
 return Array.from({length:n+1},(_,k)=>[a[0]+Math.sign(dr)*k,a[1]+Math.sign(dc)*k])};
function Sopa(){const R=useMemo(build,[]),g=R.g,WL=R.words;
 const [found,setF]=useState([]),[cells,setC]=useState(()=>new Set()),[sel,setSel]=useState(()=>new Set());
 const st=useRef({on:false,a:null,b:null}),fr=useRef(found);fr.current=found;
 const at=e=>{const el=document.elementFromPoint(e.clientX,e.clientY);return el&&el.dataset&&el.dataset.r!==undefined?[+el.dataset.r,+el.dataset.c]:null};
 const mark=(a,b)=>setSel(new Set(line(a,b).map(x=>x.join())));
 // soltar el dedo/mouse en CUALQUIER parte de la pantalla termina la selección
 useEffect(()=>{const end=()=>{const s=st.current;if(!s.on)return;st.current={on:false,a:null,b:null};setSel(new Set());if(!s.a||!s.b)return;
   const L=line(s.a,s.b),t=L.map(([r,c])=>g[r][c]).join(''),h=WL.find(w=>w===t||w===[...t].reverse().join(''));
   if(h&&!fr.current.includes(h)){const f=[...fr.current,h];setF(f);setC(c=>new Set([...c,...L.map(x=>x.join())]));if(f.length===WL.length){win('sopa');toast('¡Encontraste todas! ❤️')}}};
  addEventListener('pointerup',end);addEventListener('pointercancel',end);return()=>{removeEventListener('pointerup',end);removeEventListener('pointercancel',end)}},[g,WL]);
 return <div className="game"><h3>2 · Pupiletras{done('sopa')}</h3><small>Arrastra con el dedo o el mouse: horizontal, vertical o diagonal, en cualquier sentido.</small>
  <div className="sopa" onPointerMove={e=>{const s=st.current;if(!s.on)return;const c=at(e);if(c&&line(s.a,c).length){s.b=c;mark(s.a,c)}}}>{g.map((row,r)=>row.map((ch,c)=>{const k=r+','+c;
   return <span key={k} data-r={r} data-c={c} className={cells.has(k)?'ok':sel.has(k)?'sl':''} onPointerDown={e=>{e.currentTarget.releasePointerCapture?.(e.pointerId);st.current={on:true,a:[r,c],b:[r,c]};mark([r,c],[r,c])}}>{ch}</span>}))}</div>
  <p className="words">{WL.map(w=><span key={w} className={found.includes(w)?'done':''}>{w}</span>)}</p></div>}

/* ───────── 3 · ¿Cuánto recuerdas? ───────── */
// ✏️ MODIFICAR: las preguntas están en src/data/config.js → quiz
function Quiz(){const Q=CFG.quiz||[],[i,setI]=useState(0),[sc,setSc]=useState(0);const q=Q[i];
 if(!Q.length)return null;
 if(!q)return <div className="game"><h3>3 · ¿Cuánto recuerdas? ✅</h3><p>{sc}/{Q.length} — sabía que te acordabas. ❤️</p><button onClick={()=>{setI(0);setSc(0)}}>Repetir</button></div>;
 return <div className="game"><h3>3 · ¿Cuánto recuerdas?{done('quiz')}</h3><small>Pregunta {i+1} de {Q.length}</small><p>{q.q}</p>{q.o.map((t,k)=><button key={k} className="opt" onClick={()=>{if(k===q.a)setSc(sc+1);const n=i+1;setI(n);if(n>=Q.length)win('quiz')}}>{t}</button>)}</div>}

/* ───────── 4 · Cajas sorpresa ───────── */
// ✏️ MODIFICAR: el contenido de las cajas está en src/data/config.js → boxes
function Boxes(){const [op,setOp]=useState([]),[sel,setSel]=useState(null);
 return <div className="game"><h3>4 · Cajas sorpresa{done('boxes')}</h3>
  <div className="boxes">{CFG.boxes.map((b,k)=><button key={k} className="gift" aria-label={`Caja ${k+1}`} onClick={()=>{const n=[...new Set([...op,k])];setOp(n);setSel(b);if(n.length===CFG.boxes.length)win('boxes')}}>{op.includes(k)?b.i:'🎁'}</button>)}</div>
  {sel&&<div className="reveal" key={sel.x}>{sel.img&&<Photo src={sel.img}/>}<p>{sel.x}</p></div>}</div>}
export default function Games(){return <section><h2>Juegos</h2><Puzzle/><Sopa/><Quiz/><Boxes/></section>}
