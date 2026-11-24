'use client';
import {Fragment,useEffect,useRef,useState} from 'react';
import {useI18n} from '@/components/providers';
import {motion,useInView,useScroll,useTransform,animate,useReducedMotion,type MotionValue,type Variants} from 'framer-motion';

export const ease=[0.22,1,0.36,1] as const;

/** Préférence « réduire les animations », sûre pour l’hydratation : faux jusqu’au montage,
    pour que le premier rendu client soit identique au HTML exporté. */
export function useReducedMotionSafe(){
  const pref=useReducedMotion();
  const[mounted,setMounted]=useState(false);
  useEffect(()=>{setMounted(true)},[]);
  return mounted&&!!pref;
}

/** Apparition douce à l’entrée dans le viewport. */
export function Reveal({children,className,delay=0,y=28}:{children:React.ReactNode;className?:string;delay?:number;y?:number}){
  return <motion.div className={className} initial={{opacity:0,y}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'0px 0px -10% 0px'}} transition={{duration:.9,ease,delay}}>{children}</motion.div>;
}

/** Conteneur qui déclenche l’apparition décalée de ses enfants `motion` utilisant `item`. */
export const item:Variants={hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.85,ease}}};
export function Stagger({children,className,gap=.08,delay=0,as='div'}:{children:React.ReactNode;className?:string;gap?:number;delay?:number;as?:'div'|'ul'|'ol'|'dl'}){
  const Comp=as==='ul'?motion.ul:as==='ol'?motion.ol:as==='dl'?motion.dl:motion.div;
  return <Comp className={className} initial="hidden" whileInView="show" viewport={{once:true,margin:'0px 0px -10% 0px'}} variants={{hidden:{},show:{transition:{staggerChildren:gap,delayChildren:delay}}}}>{children}</Comp>;
}

type Part={t:string;tone?:boolean;br?:boolean};
/** Titre révélé mot à mot ; les segments `tone` prennent la couleur secondaire (titre bicolore). */
export function Title({parts,as='h2',className,delay=0,immediate=false}:{parts:Part[];as?:'h1'|'h2'|'h3';className?:string;delay?:number;immediate?:boolean}){
  let n=0;const{t}=useI18n();const rtl=t.dir==='rtl';
  // En arabe, les mots latins consécutifs (noms, « CIRS-Conseil Inc. ») restent groupés et orientés de gauche à droite.
  const latin=(w:string)=>!/[\u0600-\u06FF]/.test(w);
  const split=(txt:string)=>{const ws=txt.split(' ').filter(Boolean);if(!rtl)return ws;const out:string[]=[];for(const w of ws){const prev=out[out.length-1];if(prev!==undefined&&latin(prev)&&latin(w))out[out.length-1]=prev+' '+w;else out.push(w)}return out};
  const words=parts.flatMap((p,pi)=>split(p.t).map((w,wi,arr)=>({w,tone:!!p.tone,br:!!p.br&&wi===arr.length-1,last:pi===parts.length-1&&wi===arr.length-1,ltr:rtl&&latin(w)})));
  // Le déclenchement se fait sur le titre entier : un mot masqué (hors de sa fenêtre) ne peut pas rester bloqué.
  const MTag=as==='h1'?motion.h1:as==='h3'?motion.h3:motion.h2;
  const trigger=immediate?{animate:'show'}:{whileInView:'show',viewport:{once:true,margin:'0px 0px -8% 0px'}};
  return <MTag className={className} aria-label={parts.map(p=>p.t).join(' ')} initial="hidden" {...trigger}>
    <span aria-hidden="true">{words.map((x,i)=><Fragment key={i}><span className={x.tone?'sw tone':'sw'} dir={x.ltr?'ltr':undefined}><motion.span className="sw-in" variants={{hidden:{y:'108%'},show:{y:'0%',transition:{duration:1,ease,delay:delay+(n++)*.045}}}}>{x.w}</motion.span></span>{x.br?<br/>:x.last?null:' '}</Fragment>)}</span>
  </MTag>;
}

/** Paragraphe dont les mots passent du gris à l’encre au fil du défilement. */
export function ScrollText({text,className}:{text:string;className?:string}){
  const ref=useRef<HTMLParagraphElement>(null);
  const reduce=useReducedMotionSafe();
  const {scrollYProgress}=useScroll({target:ref,offset:['start 0.88','end 0.5']});
  const words=text.split(' ');
  return <p ref={ref} className={className}>{words.map((w,i)=>reduce?<Fragment key={i}>{w} </Fragment>:<Word key={i} progress={scrollYProgress} range={[i/words.length,(i+1)/words.length]}>{w}</Word>)}</p>;
}
function Word({children,progress,range}:{children:string;progress:MotionValue<number>;range:[number,number]}){
  const opacity=useTransform(progress,range,[.16,1]);
  return <><motion.span style={{opacity}}>{children}</motion.span>{' '}</>;
}

/** Compteur animé lorsqu’il entre dans le viewport. */
export function CountUp({value,pad=false,suffix=''}:{value:number;pad?:boolean;suffix?:string}){
  const ref=useRef<HTMLSpanElement>(null);
  const inView=useInView(ref,{once:true,margin:'0px 0px -10% 0px'});
  const reduce=useReducedMotionSafe();
  const fmt=(v:number)=>(pad?String(Math.round(v)).padStart(2,'0'):String(Math.round(v)))+suffix;
  useEffect(()=>{
    const el=ref.current;if(!el||!inView||reduce)return;
    const c=animate(0,value,{duration:1.8,ease,onUpdate:v=>{el.textContent=fmt(v)}});
    return()=>c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[inView,reduce,value]);
  return <span ref={ref}>{fmt(value)}</span>;
}

/** Léger flottement continu (badges, pastilles). */
export function Float({children,className,delay=0,amp=8,duration=6}:{children:React.ReactNode;className?:string;delay?:number;amp?:number;duration?:number}){
  return <motion.div className={className} animate={{y:[0,-amp,0]}} transition={{duration,repeat:Infinity,ease:'easeInOut',delay}}>{children}</motion.div>;
}

/** Générateur pseudo-aléatoire déterministe (rendu identique serveur / client). */
export function seeded(seed:number){let s=seed%2147483647;if(s<=0)s+=2147483646;return()=>(s=(s*16807)%2147483647)/2147483647}
