import {useEffect,useState} from 'react';import {AnimatePresence,motion} from 'framer-motion';
import {Stars,Toast,Player,Boundary} from './components/Common';import {CFG} from './data/config';import {egg,load,confetti} from './data/store';
import Login from './pages/Login';import Home from './pages/Home';import {Comienzo,Recuerdos,Peliculas} from './pages/Story';import {Mundo,Toons} from './pages/World';
import Games from './pages/Games';import Gallery from './pages/Gallery';import {Secretos,Carta} from './pages/Secrets';
// ✏️ MODIFICAR: nombres del menú (el primer texto de cada línea). El orden de aquí es el orden del menú.
const P={home:['Inicio',Home],comienzo:['Nuestro comienzo',Comienzo],recuerdos:['Nuestros recuerdos',Recuerdos],peliculas:['Nuestras películas',Peliculas],mundo:['El mundo de Mor',Mundo],toons:["Mor's Cartoons",Toons],juegos:['Juegos',Games],galeria:['Galería',Gallery],secretos:['Secretos',Secretos],carta:['Carta para ti',Carta]};
// sessionStorage puede fallar en navegadores en modo privado: lo envolvemos para que nunca rompa la página
const ss={get:()=>{try{return sessionStorage.getItem('mor-in')==='1'}catch{return false}},set:()=>{try{sessionStorage.setItem('mor-in','1')}catch{}},del:()=>{try{sessionStorage.removeItem('mor-in')}catch{}}};
export default function App(){const [in_,setIn]=useState(ss.get),[pg,setPg]=useState('home'),[m,setM]=useState(false);
 // Secretos de teclado: escribir "mor" o "messi" en cualquier parte (solo cuentan las teclas de letras)
 useEffect(()=>{let b='';const h=e=>{if(!e.key||e.key.length!==1)return;b=(b+e.key).toLowerCase().slice(-5);if(b.endsWith('mor'))egg('mor');if(b==='messi'){egg('messi');confetti()}};addEventListener('keydown',h);return()=>removeEventListener('keydown',h)},[]);
 useEffect(()=>{if(load().games.boxes)egg('cajas')},[]);
 const go=k=>{setPg(k);setM(false);scrollTo(0,0)};const Pg=P[pg][1];
 if(!in_)return <><Stars star/><Toast/><Login onOk={()=>{ss.set();setIn(true)}}/></>;
 return <><Stars star/><Toast/><header className="nav"><b onClick={()=>go('home')}>Para Mor</b><button className="burger" aria-label="Menú" aria-expanded={m} onClick={()=>setM(!m)}>☰</button>
  <nav className={m?'open':''}>{Object.entries(P).slice(1).map(([k,[n]])=><button key={k} className={pg===k?'on':''} onClick={()=>go(k)}>{n}</button>)}<button onClick={()=>{ss.del();location.reload()}}>Salir</button></nav></header>
  <main><AnimatePresence mode="wait"><motion.div key={pg} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.4}}><Boundary key={pg}><Pg go={go}/></Boundary></motion.div></AnimatePresence></main><Player list={CFG.playlist}/></>}
