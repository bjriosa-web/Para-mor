import {useCallback,useEffect,useMemo,useRef,useState} from 'react';import {AnimatePresence,motion} from 'framer-motion';import {CFG} from '../data/config';import {asset} from '../data/store';
// ✏️ MODIFICAR: cuántas fotos se muestran de golpe antes del botón "Ver más fotos".
const STEP=12;
// Las fotos y categorías se editan en src/data/config.js → gallery / galleryIcons (no hace falta tocar este archivo).

function Tile({x,onOpen,onBad}){
 return <div className="tile" role="button" tabIndex={0} aria-label={`Abrir foto: ${x.t||x.k}`} onClick={onOpen} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();onOpen()}}}>
  {/* fondo difuminado de la misma foto: así la foto SIEMPRE se ve completa y centrada, sin recortes ni barras negras */}
  <img className="tile-bg" src={asset('photos/'+x.f)} alt="" aria-hidden="true" loading="lazy" decoding="async"/>
  <img className="tile-img" src={asset('photos/'+x.f)} alt={x.t||x.k} loading="lazy" decoding="async" onError={onBad}/>
  <span className="tile-tag">{x.k}</span></div>}

function Lightbox({list,i,setI,onClose}){
 const [z,setZ]=useState(false),[o,setO]=useState('50% 50%'),t0=useRef(null),x=list[i];
 const go=useCallback(d=>{setZ(false);setI(k=>(k+d+list.length)%list.length)},[list.length,setI]);
 useEffect(()=>{const h=e=>{if(e.key==='Escape')onClose();if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1)};addEventListener('keydown',h);
  const prev=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{removeEventListener('keydown',h);document.body.style.overflow=prev}},[go,onClose]);
 if(!x)return null;
 const zoom=e=>{const r=e.currentTarget.getBoundingClientRect();setO(`${((e.clientX-r.left)/r.width)*100}% ${((e.clientY-r.top)/r.height)*100}%`);setZ(!z)};
 return <motion.div className="modal lb" role="dialog" aria-modal="true" aria-label="Foto ampliada" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
  <div className="lb-in" onClick={e=>e.stopPropagation()}>
   <button className="lb-x" onClick={onClose} aria-label="Cerrar">✕</button>
   <div className="lb-stage" onTouchStart={e=>{t0.current=e.touches[0].clientX}} onTouchEnd={e=>{if(t0.current==null||z)return;const dx=e.changedTouches[0].clientX-t0.current;t0.current=null;if(Math.abs(dx)>50)go(dx<0?1:-1)}}>
    {list.length>1&&<button className="lb-nav prev" onClick={()=>go(-1)} aria-label="Foto anterior">‹</button>}
    <img key={x.f} className={z?'z':''} style={{transformOrigin:o}} src={asset('photos/'+x.f)} alt={x.t||x.k} onClick={zoom} draggable={false}/>
    {list.length>1&&<button className="lb-nav next" onClick={()=>go(1)} aria-label="Foto siguiente">›</button>}
   </div>
   <p className="lb-cap"><b className="gold">{x.k}</b> · {i+1} / {list.length}{x.t&&<><br/>{x.t}</>}</p>
   <small>{z?'Toca la foto para alejar':'Toca la foto para acercar'}{list.length>1?' · desliza para cambiar':''}</small>
  </div></motion.div>}

export default function Gallery(){
 const [cat,setCat]=useState('Todo'),[open,setOpen]=useState(null),[shown,setShown]=useState(STEP),[bad,setBad]=useState(()=>new Set());
 // fotos que de verdad existen (si un archivo falta, se oculta solo)
 const all=useMemo(()=>CFG.gallery.map(([k,f,t])=>({k,f,t})).filter(x=>!bad.has(x.f)),[bad]);
 const icons=CFG.galleryIcons||{};
 const cats=useMemo(()=>{const used=[...new Set(all.map(x=>x.k))],first=Object.keys(icons).filter(k=>used.includes(k));return['Todo',...first,...used.filter(k=>!first.includes(k))]},[all]);
 const list=cat==='Todo'?all:all.filter(x=>x.k===cat);
 const pick=k=>{setCat(k);setShown(STEP);setOpen(null)};
 const close=useCallback(()=>setOpen(null),[]);
 return <section><h2>Galería</h2>
  <p className="lead">{all.length} {all.length===1?'recuerdo':'recuerdos'} guardados. Toca una foto para verla grande.</p>
  <div className="tabs">{cats.map(k=><button key={k} className={cat===k?'on':''} onClick={()=>pick(k)}>{k==='Todo'?'✨ Todo':`${icons[k]||'🖼'} ${k}`}</button>)}</div>
  <div className="gal">{list.slice(0,shown).map((x,i)=><Tile key={x.f} x={x} onOpen={()=>setOpen(i)} onBad={()=>setBad(b=>new Set(b).add(x.f))}/>)}</div>
  {list.length>shown&&<div className="row" style={{marginTop:18}}><button className="gold-btn" onClick={()=>setShown(s=>s+STEP)}>Ver más fotos ({list.length-shown})</button></div>}
  <AnimatePresence>{open!==null&&<Lightbox key="lb" list={list} i={Math.min(open,list.length-1)} setI={setOpen} onClose={close}/>}</AnimatePresence>
 </section>}
