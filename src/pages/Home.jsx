import {useEffect,useState} from 'react';import {motion} from 'framer-motion';import {CFG} from '../data/config';import {confetti} from '../data/store';
// ✏️ MODIFICAR: todos los textos de la portada están en src/data/config.js → home
export default function Home({go}){const [now,setNow]=useState(Date.now());useEffect(()=>{const t=setInterval(()=>setNow(Date.now()),1000);return()=>clearInterval(t)},[]);
 const df=new Date(CFG.birthday)-now,v=[[df/864e5,'días'],[df/36e5%24,'horas'],[df/6e4%60,'min'],[df/1e3%60,'seg']];
 const H=CFG.home,today=df<=0;useEffect(()=>{if(today)confetti()},[today]);
 return <div className="center hero"><motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3,duration:1}}>{today?H.todayTitle:H.beforeTitle}</motion.p>
  <motion.h1 className="big" initial={{opacity:0,letterSpacing:'.6em'}} animate={{opacity:1,letterSpacing:'.18em'}} transition={{delay:.8,duration:1.6}}>{H.name}</motion.h1>
  <motion.h3 className="gold" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.8}}>{H.dateLabel}</motion.h3>
  <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.2}}>{today?H.todayText:H.beforeText}</motion.p>
  {df>0?<div className="count">{v.map(([n,l])=><div key={l}><b>{Math.floor(n)}</b>{l}</div>)}</div>:<h2 className="gold">{H.todayBig}</h2>}
  <div className="row"><button className="gold-btn" onClick={()=>go('comienzo')}>Empezar</button><button onClick={()=>go('juegos')}>Ir a los juegos</button></div></div>}
