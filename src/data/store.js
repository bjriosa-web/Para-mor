const K = 'mor-progress';
const def = { games: {}, eggs: [] };
export const load = () => { try { return { ...def, ...JSON.parse(localStorage.getItem(K)) }; } catch { return { ...def }; } };
export const save = s => { try { localStorage.setItem(K, JSON.stringify(s)); } catch {} };
export const toast = m => window.dispatchEvent(new CustomEvent('mor-toast', { detail: m }));
export const egg = id => { const s = load(); if (!s.eggs.includes(id)) { s.eggs.push(id); save(s); toast(`Encontraste uno de nuestros secretos. ❤️ (${s.eggs.length}/7)`); } };
export const confetti=()=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const w=document.createElement('div');w.className='confetti';const C=['#c9a86a','#e6cf9d','#9fb7d1','#a50044','#004d98'];for(let i=0;i<50;i++){const e=document.createElement('i');e.style.cssText=`left:${Math.random()*100}%;background:${C[i%5]};animation-delay:${Math.random()*.6}s;--dx:${Math.random()*160-80}px`;w.appendChild(e)}document.body.appendChild(w);setTimeout(()=>w.remove(),3500)};
export const win = g => { confetti(); const s = load(); s.games[g] = 1; save(s); if (g === 'boxes') egg('cajas'); };
export const asset = p => `${import.meta.env.BASE_URL}${p}`;

