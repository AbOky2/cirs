'use client';
import {useCallback,useEffect,useLayoutEffect,useMemo,useRef,useState} from 'react';
import {AnimatePresence,motion,useMotionValue,useSpring,useTransform} from 'framer-motion';
import {Radar} from 'lucide-react';
import {regions} from '@/lib/content';
import {WORLD_W,WORLD_H,WORLD_HUBS,WORLD_TWINKLES} from '@/lib/world';
import {Dots} from '@/components/site';
import {ease,seeded,useReducedMotionSafe} from '@/components/motion';

/* ——— Devise avec cadre de mise au point ———
   Un cadre de sélection à poignées se déplace d’un verbe à l’autre ;
   la légende dessous explique le verbe actif. */
const verbs=[
  {w:'Anticiper.',k:'Veille',c:'Repérer les signaux avant qu’ils ne s’imposent.'},
  {w:'Comprendre.',k:'Analyse',c:'Relier les faits, les acteurs et les dynamiques.'},
  {w:'Décider.',k:'Orientation',c:'Traduire l’analyse en choix clairs.'}];
export function FocusMotto(){
  const reduce=useReducedMotionSafe();
  const[i,setI]=useState(0);const[paused,setPaused]=useState(false);
  useEffect(()=>{if(reduce||paused)return;const t=setInterval(()=>setI(v=>(v+1)%verbs.length),2800);return()=>clearInterval(t)},[reduce,paused]);
  const cur=verbs[i]!;
  // Le cadre est mesuré sur le mot actif : il anime sa vraie position et sa vraie taille (aucune déformation).
  const h1=useRef<HTMLHeadingElement>(null);const lines=useRef<(HTMLSpanElement|null)[]>([]);
  const[box,setBox]=useState<{x:number;y:number;w:number;h:number}|null>(null);
  const[shown,setShown]=useState(false);
  const measure=useCallback(()=>{const l=lines.current[i];const h=h1.current;if(!l||!h)return;const em=parseFloat(getComputedStyle(h).fontSize)||100;
    setBox({x:l.offsetLeft-em*.13,y:l.offsetTop+em*.03,w:l.offsetWidth+em*.26,h:l.offsetHeight-em*.05})},[i]);
  useLayoutEffect(()=>{measure()},[measure]);
  useEffect(()=>{const h=h1.current;if(!h)return;const ro=new ResizeObserver(()=>measure());ro.observe(h);document.fonts?.ready.then(()=>measure());const t=setTimeout(()=>setShown(true),1000);return()=>{ro.disconnect();clearTimeout(t)}},[measure]);
  return <>
    <h1 ref={h1} className="motto" aria-label="Anticiper. Comprendre. Décider." onMouseLeave={()=>setPaused(false)}>
      {verbs.map((v,k)=><span key={v.w} ref={el=>{lines.current[k]=el}} aria-hidden="true" className={'motto-line'+(i===k?' is-on':'')} onMouseEnter={()=>{setPaused(true);setI(k)}}>
        <span className="motto-clip"><motion.span className="motto-word" initial={{y:'110%'}} animate={{y:'0%'}} transition={{duration:1.1,ease,delay:.2+k*.12}}>{v.w}</motion.span></span>
      </span>)}
      {box&&<motion.span className="focus" aria-hidden="true" initial={{opacity:0,x:box.x,y:box.y,width:box.w,height:box.h}} animate={{opacity:shown?1:0,x:box.x,y:box.y,width:box.w,height:box.h}} transition={{type:'spring',stiffness:230,damping:28,opacity:{duration:.6}}}>
        <i className="focus-h h-tl"/><i className="focus-h h-tr"/><i className="focus-h h-bl"/><i className="focus-h h-br"/>
      </motion.span>}
    </h1>
    <motion.p className="motto-cap" aria-live="polite" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}>
      <AnimatePresence mode="wait"><motion.span key={i} className="motto-cap-in" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.35}}><b>{String(i+1).padStart(2,'0')} · {cur.k}</b>{cur.c}</motion.span></AnimatePresence>
    </motion.p>
  </>;
}

/* ——— Carte des horizons ——— */
const keys=['ameriques','europe','afrique','asie'] as const;
const pct=(x:number,y:number)=>({left:`${x/WORLD_W*100}%`,top:`${y/WORLD_H*100}%`});
function arc(a:readonly number[],b:readonly number[]){
  const[x1,y1]=a as [number,number];const[x2,y2]=b as [number,number];
  const mx=(x1+x2)/2,my=(y1+y2)/2,dx=x2-x1,dy=y2-y1,len=Math.hypot(dx,dy);
  let nx=-dy/len,ny=dx/len;if(ny>0){nx=-nx;ny=-ny}
  const k=len*.32;return `M${x1} ${y1} Q${(mx+nx*k).toFixed(1)} ${(my+ny*k).toFixed(1)} ${x2} ${y2}`;
}
const twinkles=WORLD_TWINKLES.split(' ').map(p=>p.split(',').map(Number) as [number,number]);

export function HorizonsCard(){
  const reduce=useReducedMotionSafe();
  const[r,setR]=useState(0);const[paused,setPaused]=useState(false);
  useEffect(()=>{if(reduce||paused)return;const t=setInterval(()=>setR(v=>(v+1)%keys.length),3600);return()=>clearInterval(t)},[reduce,paused]);
  const q=WORLD_HUBS.quebec;
  const paths=useMemo(()=>keys.map(k=>arc(q,WORLD_HUBS[k])),[q]);
  // Légère inclinaison 3D qui suit la souris.
  const mx=useMotionValue(0),my=useMotionValue(0);
  const rotateX=useSpring(useTransform(my,[-.5,.5],[4,-4]),{stiffness:140,damping:18});
  const rotateY=useSpring(useTransform(mx,[-.5,.5],[-5,5]),{stiffness:140,damping:18});
  const key=keys[r]??'ameriques';const hub=WORLD_HUBS[key];const region=regions[r]??regions[0]!;
  return <motion.div className="hz-wrap" initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1.2,ease,delay:.45}} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>{setPaused(false);mx.set(0);my.set(0)}}
    onPointerMove={e=>{if(e.pointerType!=='mouse'||reduce)return;const b=e.currentTarget.getBoundingClientRect();mx.set((e.clientX-b.left)/b.width-.5);my.set((e.clientY-b.top)/b.height-.5)}}>
  <motion.div className="hz" style={{rotateX,rotateY,transformPerspective:1200}}>
    <div className="hz-head"><span className="hz-title"><Radar size={15} strokeWidth={2}/> Nos horizons</span><span className="hz-live"><i/>Siège · Québec, Canada</span></div>
    <div className="hz-map">
      <Dots className="hz-dots"/>
      <svg className="hz-svg" viewBox={`0 0 ${WORLD_W} ${WORLD_H}`} aria-hidden="true">
        <defs><linearGradient id="hz-g" x1="0" x2="1"><stop offset="0" stopColor="#f3d58f"/><stop offset="1" stopColor="#d9ad55"/></linearGradient></defs>
        {twinkles.map(([x,y],n)=><circle key={n} cx={x} cy={y} r="2.6" className="hz-tw" style={{animationDelay:`${(n*0.37)%5}s`,animationDuration:`${3+(n%5)*0.7}s`}}/>)}
        {paths.map((d,n)=><path key={n} d={d} className={'hz-arc-base'+(n===r?' is-on':'')}/>)}
        <motion.path key={'a'+r} d={paths[r]} className="hz-arc" initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}} transition={{duration:1.3,ease}}/>
        {!reduce&&<circle key={'run'+r} r="5.5" className="hz-run"><animateMotion dur="2.4s" begin="1.1s" repeatCount="indefinite" path={paths[r]}/></circle>}
        {keys.map((k,n)=>{const[x,y]=WORLD_HUBS[k];return <circle key={k} cx={x} cy={y} r={n===r?7:4.5} className={'hz-hub'+(n===r?' is-on':'')}/>})}
        <circle key={'ping'+r} cx={hub[0]} cy={hub[1]} r="7" className="hz-ping"/>
        <circle cx={q[0]} cy={q[1]} r="7" className="hz-ping hz-ping-q"/>
        <circle cx={q[0]} cy={q[1]} r="7.5" className="hz-home"/>
      </svg>
      <span className="hz-pin-pos" style={pct(q[0],q[1])}><span className={'hz-pin hz-pin-q'+(q[1]/WORLD_H<.3?' is-below':'')}>Québec</span></span>
      <AnimatePresence mode="popLayout"><motion.span key={key} className="hz-pin-pos" style={pct(hub[0],hub[1])} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.4,delay:.9}}><span className={'hz-pin'+(hub[1]/WORLD_H<.3?' is-below':'')}>{region.name}</span></motion.span></AnimatePresence>
    </div>
    <div className="hz-tabs" role="tablist" aria-label="Régions d’intervention">
      {regions.map((g,n)=><button key={g.name} role="tab" aria-selected={n===r} className={n===r?'is-on':undefined} onClick={()=>{setR(n);setPaused(true)}}>{n===r&&<motion.span layoutId="hz-pill" className="hz-pill" transition={{type:'spring',stiffness:400,damping:34}}/>}<span>{g.name}</span></button>)}
    </div>
    <div className="hz-detail" aria-live="polite"><AnimatePresence mode="wait"><motion.div key={r} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:.35}}><strong>{region.countries}</strong><p>{region.text}</p></motion.div></AnimatePresence></div>
  </motion.div></motion.div>;
}

/* ——— Dissolution en pixels (bas du hero) ———
   Les points du globe du logo deviennent des pixels qui se dispersent dans la page. */
const COLS=72,ROWS=8,CELL=20;
const pRow=[.015,.04,.09,.17,.3,.48,.7,.94];
const cells=(()=>{const rnd=seeded(42);const out:{x:number;y:number;w:number;c:string;d:number}[]=[];
  for(let row=0;row<ROWS;row++){let run:{x:number;y:number;w:number;c:string;d:number}|null=null;
    for(let col=0;col<COLS;col++){const v=rnd();const d=rnd();const white=row===ROWS-1||v<pRow[row]!;
      // Les pixels blancs contigus sont fusionnés en bandes : aucune couture visible à l’agrandissement.
      if(white){if(run)run.w+=CELL;else{run={x:col*CELL,y:row*CELL,w:CELL,c:'w',d};out.push(run)}continue}
      run=null;
      if(row<5&&v>.985)out.push({x:col*CELL,y:row*CELL,w:CELL,c:'g',d});
      else if(row>=1&&row<7&&v>.9)out.push({x:col*CELL,y:row*CELL,w:CELL,c:'b',d});}}
  return out})();
export function PixelDissolve({className}:{className?:string}){
  return <svg className={'pixels'+(className?' '+className:'')} viewBox={`0 0 ${COLS*CELL} ${ROWS*CELL}`} preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    {cells.map((c,n)=><rect key={n} x={c.x-.5} y={c.y-.5} width={c.w+1} height={CELL+1} className={'px px-'+c.c} style={{animationDelay:`${(.5+c.d*1.4).toFixed(2)}s`}}/>)}
  </svg>;
}
