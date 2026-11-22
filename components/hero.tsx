'use client';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {ArrowRight,ChartColumn,Globe2,Layers,Target,Waypoints} from 'lucide-react';
import {useI18n} from '@/components/providers';
import {Btn} from '@/components/site';
import {ease,useReducedMotionSafe} from '@/components/motion';

/* ——— Hero (maquette) ———
   Globe doré à droite, réseau de liaisons lumineuses depuis Québec, devise en trois lignes,
   appel à la consultation et cinq raccourcis vers les expertises. */

// Coordonnées dans l’image du globe (1536 × 1024).
const Q:[number,number]=[560,250];
const nodes:[number,number][]=[[1005,228],[905,410],[1010,560],[1180,330],[1325,420],[1095,505],[1455,545],[985,330],[1010,720],[1250,190]];
const links:[number,number][]=[[-1,0],[-1,1],[-1,3],[0,3],[0,7],[7,1],[1,2],[2,5],[5,3],[3,4],[4,6],[3,9],[2,8],[5,4],[0,9]];
const P=(i:number)=>i<0?Q:nodes[i]!;
function curve(a:[number,number],b:[number,number]){const mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,dx=b[0]-a[0],dy=b[1]-a[1],k=.22;return `M${a[0]} ${a[1]} Q${(mx+dy*k).toFixed(0)} ${(my-dx*k).toFixed(0)} ${b[0]} ${b[1]}`}

function HeroVisual(){
  const reduce=useReducedMotionSafe();
  return <svg className="hero-visual" viewBox="0 0 1536 1024" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="hv-glow"><stop offset="0" stopColor="#ffe3a3"/><stop offset=".35" stopColor="#e9b95a" stopOpacity=".55"/><stop offset="1" stopColor="#e9b95a" stopOpacity="0"/></radialGradient>
    </defs>
    <image href="/hero.webp" width="1536" height="1024"/>
    {links.map(([a,b],n)=>{const d=curve(P(a),P(b));return <g key={n}>
      <motion.path d={d} className="hv-line" initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}} transition={{duration:1.6,ease,delay:.6+n*.08}}/>
      {!reduce&&<path d={d} pathLength={100} className="hv-flow" style={{animationDelay:`${(n*.53)%4}s`}}/>}
    </g>})}
    {[Q,...nodes].map(([x,y],n)=><g key={n}>
      <circle cx={x} cy={y} r={n===0?46:30} fill="url(#hv-glow)" className="hv-halo" style={{animationDelay:`${(n*.41)%3}s`}}/>
      <circle cx={x} cy={y} r={n===0?6.5:4.5} className="hv-node"/>
    </g>)}
  </svg>;
}

const cardIcons=[Globe2,ChartColumn,Waypoints,Layers,Target];
const cardLinks=['/#expertise-2','/#expertise-3','/#expertise-1','/#secteurs','/#services'];

export function Hero(){
  const{t,l}=useI18n();const h=t.hero;
  const ping=()=>setTimeout(()=>window.dispatchEvent(new HashChangeEvent('hashchange')),60);
  return <section className="hero">
    <HeroVisual/>
    <div className="hero-shade" aria-hidden="true"/>
    <div className="container hero-inner">
      <div className="hero-copy">
        <h1 className="hero-title" aria-label={h.title.join(' ')}>
          {h.title.map((w,i)=><span key={w} className="hero-line" aria-hidden="true"><motion.span initial={{y:'105%'}} animate={{y:'0%'}} transition={{duration:1,ease,delay:.15+i*.12}}>{w}</motion.span></span>)}
        </h1>
        <motion.span className="hero-bar" aria-hidden="true" initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:.9,ease,delay:.65}}/>
        <motion.p className="hero-lead" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.9,ease,delay:.75}}>{h.lead2}</motion.p>
        <motion.div className="hero-ctas" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.9,ease,delay:.85}}><Btn href="/contact/#consultation" variant="gold">{h.consult}</Btn></motion.div>
      </div>
      <motion.ul className="hero-cards" initial="hidden" animate="show" variants={{hidden:{},show:{transition:{staggerChildren:.07,delayChildren:1}}}}>
        {h.cards.map((c,i)=>{const Icon=cardIcons[i]??Globe2;return <motion.li key={c} variants={{hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.7,ease}}}}>
          <Link href={l(cardLinks[i]??'/')} onClick={ping}><span className="hc-ico"><Icon size={30} strokeWidth={1.5}/></span><span className="hc-label">{c}</span><ArrowRight className="hc-go flip-rtl" size={16}/></Link>
        </motion.li>})}
      </motion.ul>
    </div>
  </section>;
}
