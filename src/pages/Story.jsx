import {useState} from 'react';import {motion} from 'framer-motion';import {CFG} from '../data/config';import {Photo,Modal} from '../components/Common';
const rv={initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.3},transition:{duration:.8}};
// ✏️ MODIFICAR: el contenido está en src/data/config.js → timeline
export function Comienzo(){const [o,setO]=useState(null);return <section><h2>Nuestro comienzo</h2><div className="tl">
 {CFG.timeline.map((e,i)=><motion.div key={i} className="ev" {...rv}><small className="gold">{e.d}</small><h3>{e.t}</h3><p>{e.x}</p><div className="pol" onClick={()=>setO(e)}><Photo src={e.img}/></div></motion.div>)}</div>
 <Modal open={!!o} onClose={()=>setO(null)}>{o&&<><Photo src={o.img}/><h3>{o.t}</h3><p>{o.x}</p></>}</Modal></section>}
// ✏️ MODIFICAR: el contenido está en src/data/config.js → memories y cards
export function Recuerdos(){const [o,setO]=useState(null);return <section><h2>Nuestros recuerdos</h2><div className="grid">
 {[...CFG.memories.map(m=>({...m,t:m.c})),...CFG.cards.map(c=>({...c,d:'',c:'✉'}))].map((m,i)=><motion.div key={i} className="pol" style={{'--r':(i%2?1.5:-1.5)+'deg'}} whileHover={{rotate:0,scale:1.03}} whileTap={{scale:.97}} onClick={()=>setO(m)}><Photo src={m.img}/><p className="cap">{m.t}</p></motion.div>)}</div>
 <Modal open={!!o} onClose={()=>setO(null)}>{o&&<><Photo src={o.img}/><h3>{o.t}</h3>{o.d&&<small className="gold">{o.d}</small>}<p>{o.x}</p></>}</Modal></section>}
// ✏️ MODIFICAR: películas y frase del mapa en src/data/config.js → movies / lotr
export function Peliculas(){return <section><h2>Nuestras películas</h2><div className="reel">{CFG.movies.map((m,i)=><motion.div key={i} className="film" {...rv}><span>🎞</span><h3>{m.n}</h3><p>{m.x}</p></motion.div>)}</div>
 <motion.div className="map" {...rv}><svg viewBox="0 0 400 140" aria-hidden><path d="M0 120 L60 60 L100 100 L150 30 L210 105 L270 55 L330 100 L400 70 V140 H0Z" fill="#1a2540"/><path d="M20 130 C120 90 200 140 380 80" stroke="#b8965a" strokeWidth="2" strokeDasharray="6 6" fill="none"/><circle cx="380" cy="80" r="6" fill="#e6cf9d"/></svg>
 <p className="quote">{CFG.lotr}</p><small>Un mapa original: la aventura eres tú caminando a mi lado.</small></motion.div></section>}
