import {Component,useEffect,useRef,useState} from 'react';import {motion,AnimatePresence} from 'framer-motion';import {asset,egg} from '../data/store';

// Foto con carga suave. Si el archivo no existe muestra un recuadro con un corazón (sin ningún texto técnico).
// ✏️ MODIFICAR: el símbolo del recuadro vacío está en la línea del <span className="ph-empty">.
export function Photo({src,className='',alt='Foto de nuestros recuerdos'}){const [bad,setBad]=useState(false),[ok,setOk]=useState(false);
 return <div className={'ph '+className}>{bad||!src?<span className="ph-empty" role="img" aria-label="Foto no disponible">❤</span>:<img src={asset('photos/'+src)} alt={alt} loading="lazy" decoding="async" style={{opacity:ok?1:0,transition:'opacity .6s'}} onLoad={()=>setOk(true)} onError={()=>setBad(true)}/>}</div>}

// Ventana emergente: se cierra con el botón, tocando fuera o con la tecla Esc. Bloquea el scroll del fondo mientras está abierta.
export function Modal({open,onClose,children}){
 useEffect(()=>{if(!open)return;const h=e=>{if(e.key==='Escape')onClose()};addEventListener('keydown',h);const prev=document.body.style.overflow;document.body.style.overflow='hidden';
  return()=>{removeEventListener('keydown',h);document.body.style.overflow=prev}},[open,onClose]);
 return <AnimatePresence>{open&&<motion.div className="modal" role="dialog" aria-modal="true" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
 <motion.div className="box" initial={{scale:.9,y:20}} animate={{scale:1,y:0}} exit={{scale:.95}} onClick={e=>e.stopPropagation()}>{children}<button onClick={onClose}>Cerrar</button></motion.div></motion.div>}</AnimatePresence>}

// Red de seguridad: si una página falla, solo esa página muestra un aviso (el resto de la web sigue funcionando).
export class Boundary extends Component{state={e:false};static getDerivedStateFromError(){return{e:true}}
 componentDidCatch(err){console.error(err)}
 render(){return this.state.e?<div className="center" style={{minHeight:'50vh'}}><h2>Algo no cargó bien 😅</h2><p>Vuelve a intentarlo.</p><button className="gold-btn" onClick={()=>location.reload()}>Recargar</button></div>:this.props.children}}

export function Stars({star}){const c=useRef();useEffect(()=>{const cv=c.current,x=cv.getContext('2d');let s=[],id;
 const rs=()=>{cv.width=innerWidth;cv.height=innerHeight;s=Array.from({length:70},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*1.4+.3,p:Math.random()*6}))};rs();addEventListener('resize',rs);
 const f=t=>{x.clearRect(0,0,cv.width,cv.height);s.forEach(a=>{x.globalAlpha=.3+.5*Math.abs(Math.sin(t/1400+a.p));x.fillStyle='#e6cf9d';x.beginPath();x.arc(a.x,a.y,a.r,0,7);x.fill()});id=requestAnimationFrame(f)};
 if(!matchMedia('(prefers-reduced-motion:reduce)').matches)id=requestAnimationFrame(f);return()=>{cancelAnimationFrame(id);removeEventListener('resize',rs)}},[]);
 return <><canvas ref={c} className="stars"/>{star&&<StarEgg/>}</>}
function StarEgg(){const [n,setN]=useState(0);return <button className="egg-star" aria-label="estrella" onClick={()=>{const k=n+1;setN(k);if(k>=5){egg('estrella');setN(0)}}}>✦</button>}
export function Toast(){const [m,setM]=useState('');useEffect(()=>{let t;const h=e=>{setM(e.detail);clearTimeout(t);t=setTimeout(()=>setM(''),2800)};addEventListener('mor-toast',h);return()=>removeEventListener('mor-toast',h)},[]);
 return <AnimatePresence>{m&&<motion.div className="toast" initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} exit={{opacity:0}}>{m}</motion.div>}</AnimatePresence>}

// Reproductor de música. ✏️ MODIFICAR la lista en src/data/config.js → playlist. Si la lista está vacía, el botón NO se muestra.
export function Player({list}){const a=useRef(null);if(!a.current&&typeof Audio!=='undefined')a.current=new Audio();const [i,setI]=useState(0),[on,setOn]=useState(false),[v,setV]=useState(.4),[open,setOpen]=useState(false);
 useEffect(()=>{if(a.current)a.current.volume=v},[v]);
 useEffect(()=>{if(!list.length||!list[i]||!a.current)return;a.current.src=asset('music/'+list[i].src);if(on)a.current.play().catch(()=>setOn(false))},[i]);
 useEffect(()=>{const e=a.current;if(!e)return;e.onended=()=>setI(k=>(k+1)%list.length);return()=>e.pause()},[]);
 const tg=()=>{if(on)a.current.pause();else a.current.play().catch(()=>{});setOn(!on)};
 if(!list.length)return null;
 return <div className="player"><button onClick={()=>setOpen(!open)} aria-label="Música">🎵</button>{open&&<div className="pl">
  <span>{list[i].t}</span><div><button onClick={tg}>{on?'⏸':'▶'}</button>
  <button onClick={()=>setI((i+1)%list.length)} disabled={list.length<2}>⏭</button><input type="range" min="0" max="1" step=".05" value={v} onChange={e=>setV(+e.target.value)} aria-label="Volumen"/></div></div>}</div>}
