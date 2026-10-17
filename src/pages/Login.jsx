import {useState} from 'react';import {motion} from 'framer-motion';import {CFG} from '../data/config';
export default function Login({onOk}){const [u,setU]=useState(''),[p,setP]=useState(''),[err,setErr]=useState(false),[ok,setOk]=useState(false);
 const go=e=>{e.preventDefault();const good=['mor','amor','marlon',CFG.login.user].includes(u.trim().toLowerCase())&&p.replace(/\D/g,'')===CFG.login.pass;
  if(good){setOk(true);setTimeout(onOk,2200)}else setErr(true)};
 if(ok)return <motion.div className="center" initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}}><p className="gold">🎬</p><h1>Bienvenido a tu regalo, Mor.</h1></motion.div>;
 return <div className="center"><motion.form className="login" onSubmit={go} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
  <div className="clap">🎬 Escena 20 · Toma 1</div><h1>Esta página es solo para Mor ❤️</h1>
  <input placeholder="USUARIO" value={u} onChange={e=>{setU(e.target.value);setErr(false)}} autoComplete="off"/>
  <input placeholder="CONTRASEÑA" type="password" value={p} onChange={e=>{setP(e.target.value);setErr(false)}}/>
  {err&&<p className="err">Usuario o contraseña incorrectos.</p>}<button className="gold-btn">Entrar</button>
  {/* ✏️ MODIFICAR: esta pista se puede cambiar o borrar por completo */}
  <p className="small">Pista: usuario <b>mor</b> · contraseña: la fecha de tu cumpleaños de este año (ddmmaaaa).</p></motion.form></div>}
