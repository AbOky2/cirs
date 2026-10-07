'use client';
import {motion} from 'framer-motion';
import {WORLD_W,WORLD_H,WORLD_HUBS} from '@/lib/world';
import {ease} from '@/components/motion';

/* Illustrations des cinq domaines d’expertise — même grammaire : traits fins marine, accents or. */
const NAVY='#0d1e45',GOLD='#d9ad55';
const VB='0 0 400 240';

/** 01 — Veille : radar dont le balayage révèle des signaux. */
function Veille(){
  const blips=[[150,82],[262,150],[226,58],[128,166],[244,196],[290,96]];
  return <svg viewBox={VB} className="ill" aria-hidden="true">
    <defs><linearGradient id="sw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={GOLD} stopOpacity="0"/><stop offset="1" stopColor={GOLD} stopOpacity=".5"/></linearGradient></defs>
    {[104,78,52,26].map(r=><motion.circle key={r} cx="200" cy="120" r={r} fill="none" stroke={NAVY} strokeOpacity=".14" initial={{scale:.6,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:.8,ease,delay:(104-r)/200}}/>)}
    <path d="M90 120h220M200 10v220" stroke={NAVY} strokeOpacity=".12" strokeDasharray="2 5"/>
    <g className="ill-spin"><path d="M200 120 L304 120 A104 104 0 0 0 273.5 46.5 Z" fill="url(#sw)"/><path d="M200 120H304" stroke={GOLD} strokeWidth="1.5"/></g>
    {blips.map(([x,y],n)=><g key={n}><circle cx={x} cy={y} r="4" fill={n%2?NAVY:GOLD}/><circle cx={x} cy={y} r="4" fill="none" stroke={n%2?NAVY:GOLD} className="ill-ping" style={{animationDelay:`${n*.55}s`}}/></g>)}
    <circle cx="200" cy="120" r="5" fill={NAVY}/>
  </svg>;
}

/** 02 — Géopolitique, pays et marchés : carte zoomée et loupe d’analyse. */
function Geo(){
  const Z=2.5,W=400*Z,H=W*WORLD_H/WORLD_W,ox=-(W-400)*.5,oy=-(H-240)*.3;
  const P=(k:keyof typeof WORLD_HUBS)=>{const[x,y]=WORLD_HUBS[k];return[ox+x/WORLD_W*W,oy+y/WORLD_H*H] as const};
  const e=P('europe'),a=P('afrique');
  return <svg viewBox={VB} className="ill" aria-hidden="true">
    <image href="/world-dots.svg" x={ox} y={oy} width={W} height={H} opacity=".34"/>
    <path d={`M${e[0]} ${e[1]} Q${(e[0]+a[0])/2+60} ${(e[1]+a[1])/2} ${a[0]} ${a[1]}`} fill="none" stroke={GOLD} strokeWidth="1.6" strokeDasharray="3 4"/>
    {[e,a].map(([x,y],n)=><g key={n}><circle cx={x} cy={y} r="5" fill={GOLD}/><circle cx={x} cy={y} r="5" fill="none" stroke={GOLD} className="ill-ping" style={{animationDelay:`${n*.8}s`}}/></g>)}
    <motion.g animate={{x:[0,70,30,0],y:[0,26,-22,0]}} transition={{duration:9,repeat:Infinity,ease:'easeInOut'}}>
      <circle cx="150" cy="104" r="38" fill="rgba(255,255,255,.55)" stroke={NAVY} strokeWidth="1.5"/>
      <path d="M150 74v10M150 124v10M120 104h10M170 104h10" stroke={NAVY} strokeWidth="1.5"/>
      <path d="M177 131l22 22" stroke={NAVY} strokeWidth="5" strokeLinecap="round"/>
    </motion.g>
  </svg>;
}

/** 03 — Risques et environnement stratégique : matrice probabilité × impact. */
function Risques(){
  const pal=['#eef3f9','#e3eaf4','#f5e8c6','#eccf8a','#d9ad55','#c4963e','#a87a28','#8b6420','#6f4f19'];
  const S=30,G=6,x0=136,y0=22;
  return <svg viewBox={VB} className="ill" aria-hidden="true">
    <text x="118" y="120" transform="rotate(-90 118 120)" textAnchor="middle" className="ill-txt">Impact</text>
    <text x={x0+(5*S+4*G)/2} y="230" textAnchor="middle" className="ill-txt">Probabilité</text>
    {Array.from({length:25},(_,n)=>{const i=n%5,j=Math.floor(n/5);const s=i+(4-j);return <motion.rect key={n} x={x0+i*(S+G)} y={y0+j*(S+G)} width={S} height={S} rx="7" fill={pal[s]} initial={{opacity:0,scale:.4}} animate={{opacity:1,scale:1}} transition={{duration:.5,ease,delay:.04*(i+j)}}/>})}
    <path d={`M${x0} ${y0+1*(S+G)+S/2}H${x0+3*(S+G)+S/2}V${y0+5*S+4*G}`} fill="none" stroke={NAVY} strokeOpacity=".5" strokeDasharray="3 4"/>
    <rect x={x0+3*(S+G)-3} y={y0+1*(S+G)-3} width={S+6} height={S+6} rx="9" fill="none" stroke={NAVY} strokeWidth="1.6" className="ill-ping-rect"/>
  </svg>;
}

/** 04 — Communication stratégique et de crise : un message, des publics. */
function Communication(){
  const nodes=Array.from({length:9},(_,n)=>{const t=(n/9)*Math.PI*2-.3;return[200+Math.cos(t)*150,120+Math.sin(t)*86] as const});
  return <svg viewBox={VB} className="ill" aria-hidden="true">
    {[0,1,2].map(n=><circle key={n} cx="200" cy="120" r="20" fill="none" stroke={GOLD} className="ill-wave" style={{animationDelay:`${n*1}s`}}/>)}
    {nodes.map(([x,y],n)=><g key={n}><path d={`M200 120L${x.toFixed(1)} ${y.toFixed(1)}`} stroke={NAVY} strokeOpacity=".16"/><path d={`M200 120L${x.toFixed(1)} ${y.toFixed(1)}`} stroke={GOLD} strokeWidth="1.6" pathLength="100" className="ill-flow" style={{animationDelay:`${n*.3}s`}}/><circle cx={x} cy={y} r={n%3===0?7:5} fill="#fff" stroke={NAVY} strokeWidth="1.5"/></g>)}
    <circle cx="200" cy="120" r="18" fill={NAVY}/>
    <path d="M192 115v10l6 1.5 9 5.5v-24l-9 5.5z" fill={GOLD}/>
  </svg>;
}

/** 05 — Évaluation des politiques publiques : mesurer, comparer à l’objectif. */
function Evaluation(){
  const bars=[46,64,56,84,98,122];const bx=(n:number)=>92+n*40;const base=204;
  const pts=bars.map((h,n)=>[bx(n)+13,base-h-10] as const);
  return <svg viewBox={VB} className="ill" aria-hidden="true">
    <path d={`M78 ${base}H332`} stroke={NAVY} strokeOpacity=".3"/>
    <path d="M78 74H332" stroke={GOLD} strokeDasharray="4 5"/><text x="332" y="66" textAnchor="end" className="ill-txt">Objectif</text>
    {bars.map((h,n)=><motion.rect key={n} x={bx(n)} y={base-h} width="26" height={h} rx="6" fill={n===bars.length-1?GOLD:'#dde6f2'} initial={{scaleY:0}} animate={{scaleY:1}} transition={{duration:.8,ease,delay:.08*n}} style={{originY:1}}/>)}
    <motion.path d={'M'+pts.map(p=>p.join(' ')).join('L')} fill="none" stroke={NAVY} strokeWidth="1.8" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1.1,ease,delay:.5}}/>
    {pts.map(([x,y],n)=><motion.circle key={n} cx={x} cy={y} r="3.5" fill="#fff" stroke={NAVY} strokeWidth="1.5" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.6+n*.12}}/>)}
  </svg>;
}

export const expertiseIllustrations=[Veille,Geo,Risques,Communication,Evaluation];
