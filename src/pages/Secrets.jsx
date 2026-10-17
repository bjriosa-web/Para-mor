import {useState} from 'react';import {motion,AnimatePresence} from 'framer-motion';import {CFG} from '../data/config';import {load} from '../data/store';
// ✏️ MODIFICAR: las pistas de los secretos (los textos dentro de <li>…</li>)
export function Secretos(){const s=load(),g=Object.keys(s.games).length;
 return <section><h2>Secretos</h2><p>Secretos encontrados: <b className="gold">{s.eggs.length}/7</b> · Juegos completados: <b className="gold">{g}/4</b></p>
 <ul className="hints"><li>Toca cinco veces una estrella brillante.</li><li>Escribe M-O-R en cualquier parte.</li><li>Atrapa a alguien muy veloz.</li><li>Un curioso se esconde entre tus dibujos favoritos.</li><li>Un diario pide una pista.</li><li>Abre todas las cajas sorpresa.</li><li>Escribe el apellido del 10 (5 letras).</li></ul></section>}
// ✏️ MODIFICAR: el texto de la carta está en src/data/config.js → letter
export function Carta(){const [o,setO]=useState(false);
 return <section className="letter-sec"><AnimatePresence mode="wait">{!o?<motion.button key="e" className="env" exit={{scale:.8,opacity:0}} onClick={()=>setO(true)}><span>✉️</span><h2>Mor, tienes una carta.</h2><small>Toca para abrir</small></motion.button>
 :<motion.article key="l" className="letter" initial={{opacity:0,y:60,rotateX:40}} animate={{opacity:1,y:0,rotateX:0}} transition={{duration:1.2}}>{CFG.letter.map((p,i)=><p key={i}>{p}</p>)}<h3 className="gold">{CFG.letterSign}</h3><p>{CFG.letterDate}</p></motion.article>}</AnimatePresence></section>}
