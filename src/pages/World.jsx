import {useEffect,useState} from 'react';import {motion,AnimatePresence} from 'framer-motion';import {CFG} from '../data/config';import {Photo} from '../components/Common';import {egg,load,save,confetti} from '../data/store';
const rnd=()=>[8+Math.random()*78,10+Math.random()*66];
function Jerry(){const [n,setN]=useState(0),[p,setP]=useState([45,40]),[t0,setT0]=useState(0),[res,setRes]=useState(null);
 const best=()=>{try{return +localStorage.getItem('mor-jerry')||0}catch{return 0}};
 useEffect(()=>{if(res!==null)return;const id=setInterval(()=>setP(rnd()),n>2?650:950);return()=>clearInterval(id)},[n,res]);
 // onPointerDown (no onClick): el ratón se mueve entre pulsar y soltar, y el click se perdía
 const hit=e=>{e.preventDefault();const s=t0||Date.now();setT0(s);const k=n+1;setN(k);setP(rnd());
  if(k>=5){const t=(Date.now()-s)/1000;setRes(t.toFixed(1));egg('jerry');confetti();try{if(!best()||t<best())localStorage.setItem('mor-jerry',t.toFixed(1))}catch{}}};
 const again=()=>{setN(0);setT0(0);setRes(null);setP(rnd())};
 return <div><p className="lead">Atrapa a Jerry antes de que se esconda. ¡Necesitas 5 quesos!</p><div className="cheese">{[0,1,2,3,4].map(i=><span key={i} className={i<n?'on':''}>🧀</span>)}</div>
 <div className="arena">{[[12,78],[48,86],[86,74]].map(([x,y],i)=><i key={i} className="hole" style={{left:x+'%',top:y+'%'}}/>)}
 {res===null?<motion.button className="jerry" aria-label="Jerry" onPointerDown={hit} animate={{left:p[0]+'%',top:p[1]+'%'}} transition={{type:'spring',stiffness:140,damping:14}}>🐭</motion.button>
 :<motion.div className="done" initial={{scale:.6,opacity:0}} animate={{scale:1,opacity:1}}><h3>¡Lo atrapaste! 🧀</h3><p>Tiempo: <b className="gold">{res}s</b> · Récord: <b className="gold">{best()}s</b></p><button className="gold-btn" onClick={again}>Jugar otra vez</button></motion.div>}</div></div>}
const norm=s=>s.trim().toLowerCase();
function Diary(){const D=CFG.diary,[ok,setOk]=useState(!!load().diary),[v,setV]=useState(''),[bad,setBad]=useState(0),[pg,setPg]=useState(0);
 const open=e=>{e.preventDefault();if(D.answers.includes(norm(v))){const s=load();s.diary=true;save(s);setOk(true);egg('diario')}else setBad(b=>b+1)};
 if(!ok)return <motion.form key={bad} className="journal locked" onSubmit={open} animate={bad?{x:[0,-10,10,-6,6,0]}:{}}><div className="lock">🔒</div><h3>Diario misterioso</h3><p>{D.clue}</p>
  <input value={v} onChange={e=>setV(e.target.value)} placeholder="Escribe tu respuesta" autoComplete="off"/><button className="gold-btn" type="submit">Abrir diario</button>
  {bad>0&&<p className="err">Todavía no… {bad>=2&&D.hint}</p>}</motion.form>;
 return <div className="journal"><AnimatePresence mode="wait"><motion.div key={pg} className="page" initial={{opacity:0,x:40,rotateY:-20}} animate={{opacity:1,x:0,rotateY:0}} exit={{opacity:0,x:-40}} transition={{duration:.35}}>
  <small>Página {pg+1} de {D.pages.length}</small><h3>{D.pages[pg].t}</h3><p>{D.pages[pg].x}</p></motion.div></AnimatePresence>
  <div className="row"><button disabled={!pg} onClick={()=>setPg(pg-1)}>← Anterior</button><button disabled={pg>=D.pages.length-1} onClick={()=>setPg(pg+1)}>Siguiente →</button></div></div>}
function Penales(){const [s,setS]=useState({g:0,k:0,left:5,m:'Elige hacia dónde patear'});
 const shoot=z=>{if(!s.left)return;const goal=Math.floor(Math.random()*3)!==z,n={g:s.g+goal,k:s.k+!goal,left:s.left-1,m:goal?'¡GOOOL! ⚽':'¡Lo atajó!'};setS(n);if(!n.left&&n.g>=3)confetti()};
 return <div className="pen"><div className="goal">{['←','↑','→'].map((a,z)=><button key={z} className="zone" disabled={!s.left} onClick={()=>shoot(z)}>{a}</button>)}</div>
 <motion.p key={s.m+s.left} initial={{scale:.8}} animate={{scale:1}}><b>{s.m}</b></motion.p><p>Goles <b className="gold">{s.g}</b> · Atajados <b className="gold">{s.k}</b> · Tiros {s.left}</p>
 {!s.left&&<button className="gold-btn" onClick={()=>setS({g:0,k:0,left:5,m:'Elige hacia dónde patear'})}>Otra tanda</button>}</div>}
// ✏️ MODIFICAR: pestañas y frases de "El mundo de Mor" (los textos dentro de <p className="lead">…</p>). El diario se edita en config.js → diary
export function Mundo(){const [w,setW]=useState(0);const W=['⚽ Fútbol','🕷 Spider-Man','🐭 Tom y Jerry','🔍 El Curioso','📔 Diario'];
 return <section><h2>El mundo de Mor</h2><div className="tabs">{W.map((x,i)=><button key={i} className={w===i?'on':''} onClick={()=>setW(i)}>{x}</button>)}</div>
 <motion.div key={w} className="world" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
 {w===0&&<><motion.div className="ball" animate={{y:[0,-34,0],rotate:360}} transition={{repeat:Infinity,duration:1.6}}>⚽</motion.div><p className="lead">Messi, el Barça y domingos de partido. Un poco de magia con el 10.</p><Penales/></>}
 {w===1&&<><svg className="sky" viewBox="0 0 300 120" aria-hidden><g fill="#0d1220">{[[0,60,30],[30,35,28],[58,70,24],[82,20,30],[112,55,26],[138,40,34],[172,75,22],[194,30,30],[224,62,28],[252,45,48]].map(([x,y,w],i)=><rect key={i} x={x} y={y} width={w} height={120-y}/>)}</g>
  {[60,150,240].map((x,i)=><motion.path key={i} d={`M${x} 0 Q${x+20} 40 ${x+(i-1)*30} 70`} stroke="#9fb7d1" strokeWidth="1.2" fill="none" initial={{pathLength:0}} animate={{pathLength:[0,1,1,0]}} transition={{repeat:Infinity,duration:4,delay:i*.8}}/>)}</svg>
  <p className="lead">Con un gran poder viene una gran responsabilidad… como quererte bien.</p></>}
 {w===2&&<Jerry/>}
 {w===3&&<><motion.div className="ball" animate={{x:[-30,30,-30]}} transition={{repeat:Infinity,duration:3}}>🔍</motion.div><p className="lead">Curioso como siempre. Hay un monito escondido en esta página…</p><small>Pista: busca en Mor's Cartoons, cerca de una esquina.</small></>}
 {w===4&&<Diary/>}</motion.div></section>}
// ✏️ MODIFICAR: las series y sus fotos están en src/data/config.js → toons
export function Toons(){return <section className="dark"><h2>MOR'S CARTOONS</h2><p className="lead">Los dibujos y series que vieron crecer a Mor.</p><div className="grid">{CFG.toons.map(g=><motion.div key={g.k} className="car" whileHover={{y:-8,rotate:-.6}}><Photo src={g.img}/><h3>{g.k}</h3><p>{g.x}</p></motion.div>)}</div>
 <button className="monkey" aria-label="monito escondido" onClick={()=>egg('curioso')}>🐒</button></section>}