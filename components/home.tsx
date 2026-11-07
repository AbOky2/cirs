'use client';
import {useEffect,useRef,useState} from 'react';
import {AnimatePresence,motion,useInView,useScroll,useTransform} from 'framer-motion';
import {ArrowRight,Award,Building2,Check,Cpu,Factory,Gem,GraduationCap,Plus,Zap} from 'lucide-react';
import {expertiseIllustrations} from '@/components/illustrations';
import {Btn,Dots,Tag} from '@/components/site';
import {Float,Title,ease,seeded,useReducedMotionSafe} from '@/components/motion';
import {useLang} from '@/components/i18n';
import {FocusMotto,HorizonsCard,PixelDissolve} from '@/components/hero';

const pad=(n:number)=>String(n).padStart(2,'0');

/* ——— Hero ——— */
export function Hero(){
  const{t,href}=useLang();const h=t.hero;
  const fade=(d:number)=>({initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.9,ease,delay:d}});
  return <section className="hero">
    <div className="hero-bg" aria-hidden="true"/>
    <div className="container hero-grid">
      <div className="hero-copy">
        <motion.div {...fade(.05)}><Tag dark>{h.tag}</Tag></motion.div>
        <FocusMotto/>
        <motion.p className="hero-lead" {...fade(.7)}>{h.lead}</motion.p>
        <motion.div className="hero-ctas" {...fade(.82)}><Btn href={href('/contact/')} variant="gold">{h.cta}</Btn><Btn href="#expertises" variant="ghost">{h.cta2}</Btn></motion.div>
        <motion.ul className="hero-proof" {...fade(.95)}>{h.proof.map(t=><li key={t}><Check size={14} strokeWidth={2.6}/>{t}</li>)}</motion.ul>
      </div>
      <HorizonsCard/>
    </div>
    <PixelDissolve/>
  </section>;
}

/* ——— Bandeau des horizons ——— */
export function Marquee(){
  const{t}=useLang();const items=t.regions.flatMap(r=>r.countries.split(' · '));
  const row=[...items,...items];
  return <div className="mq"><p className="mq-lead">{t.marquee}</p><div className="mq-viewport" dir="ltr"><div className="mq-track">{row.map((t,n)=><span key={n} className="mq-item" aria-hidden={n>=items.length?true:undefined}><i className="mq-px"/>{t}</span>)}</div></div></div>;
}

/* ——— Domaines d’expertise : onglets + illustrations ——— */
export function ExpertiseTabs(){
  const{t,href,lang}=useLang();const expertises=t.expertises;
  const[i,setI]=useState(0);
  const Ill=expertiseIllustrations[i]!;const x=expertises[i]!;
  const rtl=lang==='ar';
  const move=(d:number)=>{const n=(i+d+expertises.length)%expertises.length;setI(n);document.getElementById('xp-tab-'+n)?.focus()};
  return <div className="xp">
    <div className="xp-list" role="tablist" aria-orientation="vertical" aria-label={t.xpHead.tabs}>
      {expertises.map((e,n)=><button key={e.title} id={'xp-tab-'+n} role="tab" aria-selected={n===i} aria-controls="xp-panel" tabIndex={n===i?0:-1} className={n===i?'is-on':undefined} onClick={()=>setI(n)} onPointerMove={ev=>{if(ev.pointerType==='mouse'&&n!==i)setI(n)}} onKeyDown={ev=>{const fwd=rtl?'ArrowLeft':'ArrowRight',back=rtl?'ArrowRight':'ArrowLeft';if(ev.key==='ArrowDown'||ev.key===fwd){ev.preventDefault();move(1)}if(ev.key==='ArrowUp'||ev.key===back){ev.preventDefault();move(-1)}}}>
        {n===i&&<motion.span layoutId="xp-pill" className="xp-pill" transition={{type:'spring',stiffness:380,damping:34}}/>}
        <span className="xp-n">{pad(n+1)}</span><span className="xp-t">{e.title}</span><ArrowRight className="xp-a" size={18}/>
      </button>)}
    </div>
    <div className="xp-panel" id="xp-panel" role="tabpanel" aria-labelledby={'xp-tab-'+i}>
      <AnimatePresence mode="wait"><motion.div key={i} className="xp-in" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.45,ease}}>
        <div className="xp-ill"><Ill/></div>
        <div className="xp-body"><span className="xp-big">{pad(i+1)}<small>/05</small></span><h3>{x.title}</h3><p>{x.text}</p>
          <div className="xp-cta"><Btn href={href('/contact/')} variant="light" size="sm">{t.xpHead.cta}</Btn></div></div>
      </motion.div></AnimatePresence>
    </div>
  </div>;
}

/* ——— Méthode : du bruit à la décision ——— */
const C=200,GX=[130,240,350,460],AP=[300,200,124,58],END=532;
const XS=[-12,...GX,END],F=[1,.74,.5,.3,.12,0];
const TIMES=XS.map(x=>(x-XS[0]!)/(END-XS[0]!));
const particles=(()=>{const r=seeded(11);return Array.from({length:44},(_,n)=>({y0:24+r()*352,d:n*(6.4/44),s:1.6+r()*1.4}))})();
const noise=(()=>{const r=seeded(5);return Array.from({length:70},()=>({x:4+r()*104,y:16+r()*368,o:.06+r()*.14}))})();
function FlowViz({active}:{active:number}){
  const{t}=useLang();const methodSteps=t.method.steps;
  const reduce=useReducedMotionSafe();
  const ref=useRef<SVGSVGElement>(null);const inView=useInView(ref,{margin:'120px'});
  return <svg ref={ref} className="flow" viewBox="0 0 560 400" aria-hidden="true">
    <defs><radialGradient id="fg"><stop offset="0" stopColor="#d9ad55" stopOpacity=".55"/><stop offset="1" stopColor="#d9ad55" stopOpacity="0"/></radialGradient></defs>
    {noise.map((p,n)=><circle key={n} cx={p.x} cy={p.y} r="1.6" fill="#fff" opacity={p.o}/>)}
    <path d={`M0 22 L${GX.map((x,n)=>`${x} ${C-AP[n]!/2}`).join(' L')} L${END} ${C}`} className="flow-env"/>
    <path d={`M0 378 L${GX.map((x,n)=>`${x} ${C+AP[n]!/2}`).join(' L')} L${END} ${C}`} className="flow-env"/>
    {GX.map((x,n)=>{const h=AP[n]!,on=n===active;return <g key={x} className={'flow-gate'+(on?' is-on':'')}>
      <rect x={x-1.5} y={C-h/2} width="3" height={h} rx="1.5"/>
      <path d={`M${x-7} ${C-h/2}h14M${x-7} ${C+h/2}h14`}/>
      <text x={x} y={C-h/2-16} textAnchor="middle"><tspan>{pad(n+1)}</tspan><tspan className="flow-name"> · {methodSteps[n]!.title}</tspan></text>
    </g>})}
    {!reduce&&inView&&particles.map((p,n)=><motion.circle key={n} r={p.s} cx="0" cy="0" initial={{x:XS[0],y:p.y0,opacity:0}}
      animate={{x:XS,y:F.map(f=>C+(p.y0-C)*f),opacity:[0,1,1,1,1,0],fill:['#8095c8','#a3b4dc','#c8d3ec','#ead3a0','#e2bf72','#d9ad55']}}
      transition={{duration:6.4,times:TIMES,repeat:Infinity,ease:'linear',delay:p.d}}/>)}
    <circle cx={END} cy={C} r="46" fill="url(#fg)"/>
    <circle cx={END} cy={C} r="9" className="flow-end"/><circle cx={END} cy={C} r="9" className="flow-ping"/>
    <text x={END} y={C+34} textAnchor="middle" className="flow-end-t">{t.method.decide}</text>
  </svg>;
}
export function Method(){
  const{t}=useLang();const methodSteps=t.method.steps;
  const reduce=useReducedMotionSafe();
  const[s,setS]=useState(0);const[paused,setPaused]=useState(false);
  useEffect(()=>{if(reduce||paused)return;const t=setInterval(()=>setS(v=>(v+1)%methodSteps.length),3400);return()=>clearInterval(t)},[reduce,paused]);
  return <div className="mth" onMouseLeave={()=>setPaused(false)}>
    <ol className="mth-steps">{methodSteps.map((m,n)=>{const on=n===s;return <li key={m.title} className={on?'is-on':undefined}>
      <button aria-expanded={on} onClick={()=>{setS(n);setPaused(true)}} onPointerMove={ev=>{if(ev.pointerType==='mouse'&&!on){setS(n);setPaused(true)}}}><span className="mth-n">{pad(n+1)}</span><span className="mth-t">{m.title}</span></button>
      <AnimatePresence initial={false}>{on&&<motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.45,ease}}>{m.text}</motion.p>}</AnimatePresence>
      <span className="mth-bar">{on&&<motion.i key={s+(paused?'p':'r')} initial={{scaleX:paused||reduce?1:0}} animate={{scaleX:1}} transition={{duration:paused||reduce?0:3.4,ease:'linear'}}/>}</span>
    </li>})}</ol>
    <FlowViz active={s}/>
  </div>;
}

/* ——— Équipe : portrait et badges flottants ——— */
export function FounderPortrait({compact=false}:{compact?:boolean}){
  const{t}=useLang();const f=t.founder;
  return <div className={'fp'+(compact?' fp-compact':'')}>
    <div className="fp-frame"><Dots className="fp-dots"/><img src="/fondateur.webp" alt={f.alt} width="600" height="793"/></div>
    <Float className="fp-badge fp-b1" amp={7}><span className="fp-bi"><Award size={17} strokeWidth={1.8}/></span><span><small>{f.certIn}</small>{f.certifications[0]}</span></Float>
    <Float className="fp-badge fp-b2" amp={9} delay={1.4} duration={7}><span className="fp-bi"><GraduationCap size={17} strokeWidth={1.8}/></span><span><small>{f.trainedAt}</small><span dir="ltr">{f.schools}</span></span></Float>
    <Float className="fp-badge fp-b3" amp={6} delay={.7} duration={5.5}><span className="fp-live"/>{f.badge}</Float>
  </div>;
}
export function QuoteBlock({dark=false}:{dark?:boolean}){
  const{t}=useLang();const quote=t.quote;
  return <figure className={'qb'+(dark?' qb-dark':'')}><span className="qb-mark" aria-hidden="true">“</span><blockquote>{quote.text}</blockquote><figcaption>— {quote.author}</figcaption></figure>;
}

/* ——— Secteurs : accordéon horizontal ——— */
const secIcons=[Cpu,Factory,Gem,Zap,Building2];
export function Sectors(){
  const{t}=useLang();const sectors=t.sectors;
  const[a,setA]=useState(0);
  return <div className="sx">{sectors.map((s,n)=>{const Icon=secIcons[n]??Cpu;const on=a===n;return <button key={s.title} className={'sx-item'+(on?' is-on':'')} aria-expanded={on} onPointerMove={ev=>{if(ev.pointerType==='mouse'&&!on)setA(n)}} onFocus={()=>setA(n)} onClick={()=>setA(n)}>
    <Dots className="sx-dots"/>
    <span className="sx-top"><span className="sx-n">{pad(n+1)}</span><span className="sx-ico"><Icon size={22} strokeWidth={1.6}/></span></span>
    <span className="sx-v">{s.title}</span>
    <span className="sx-body"><strong>{s.title}</strong><span>{s.text}</span></span>
  </button>})}</div>;
}

/* ——— FAQ ——— */
export function Faq(){
  const{t}=useLang();const faq=t.faq;
  const[o,setO]=useState<number|null>(0);
  return <div className="faq">{faq.map((f,n)=>{const on=o===n;return <div key={f.q} className={'faq-item'+(on?' is-on':'')}>
    <h3><button id={'faq-b-'+n} aria-expanded={on} aria-controls={'faq-'+n} onClick={()=>setO(on?null:n)}><span>{f.q}</span><span className="faq-ico" aria-hidden="true"><Plus size={18} strokeWidth={2}/></span></button></h3>
    <AnimatePresence initial={false}>{on&&<motion.div id={'faq-'+n} role="region" aria-labelledby={'faq-b-'+n} className="faq-a" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.45,ease}}><p>{f.a}</p></motion.div>}</AnimatePresence>
  </div>})}</div>;
}

/* ——— Titre de section bicolore ——— */
export function SectionHead({tag,title,tone,text,dark=false,center=false}:{tag:string;title:string;tone?:string;text?:React.ReactNode;dark?:boolean;center?:boolean}){
  return <div className={'shead'+(center?' shead-center':'')}>
    <div><Tag dark={dark}>{tag}</Tag><Title className={'h2'+(dark?' on-dark':'')} parts={tone?[{t:title},{t:tone,tone:true}]:[{t:title}]}/></div>
    {text&&<motion.div className="shead-text" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.9,ease,delay:.2}}>{text}</motion.div>}
  </div>;
}

/* ——— Parcours : frise dont la ligne se trace au défilement ——— */
export function Timeline({items}:{items:{t:string;d:string}[]}){
  const ref=useRef<HTMLOListElement>(null);
  const{scrollYProgress}=useScroll({target:ref,offset:['start 0.8','end 0.55']});
  const scaleY=useTransform(scrollYProgress,[0,1],[0,1]);
  return <div className="tline"><span className="tline-bar" aria-hidden="true"><motion.i style={{scaleY}}/></span><ol ref={ref}>{items.map((x,n)=><motion.li key={x.t} initial={{opacity:0,x:-14}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'0px 0px -12% 0px'}} transition={{duration:.75,ease,delay:n*.05}}><strong>{x.t}</strong><span>{x.d}</span></motion.li>)}</ol></div>;
}
