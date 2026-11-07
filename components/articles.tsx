'use client';
import Link from 'next/link';
import {useState} from 'react';
import {AnimatePresence,motion,useScroll,useSpring} from 'framer-motion';
import {ArrowUpRight,CalendarDays,Check,Link2} from 'lucide-react';
import {Dots} from '@/components/site';
import {ease} from '@/components/motion';
import {useLang} from '@/components/i18n';

export type ArticleCardData={slug:string;title:string;category:string;dateIso:string;dateLabel:string;minutes:number;summary:string;cover?:string};

export function ArticleCard({a,wide=false}:{a:ArticleCardData;wide?:boolean}){
  const{t,lang}=useLang();
  // Les articles sont rédigés en français : la carte pointe toujours vers la page française.
  return <Link className="art-card" href={`/articles/${a.slug}/`} data-wide={wide||undefined} hrefLang={lang==='fr'?undefined:'fr'}>
    <span className="art-cover">{a.cover?<img src={a.cover} alt="" loading="lazy"/>:<Dots/>}<span className="art-cover-top"><span className="art-cat">{a.category}</span><span className="art-time">{a.minutes} {t.card.min}</span></span><span className="art-cover-mark" aria-hidden="true" dir="ltr">CIRS<b>·</b>Analyse</span></span>
    <span className="art-body"><time dateTime={a.dateIso}>{a.dateLabel}</time><span className="art-title" lang="fr" dir="ltr">{a.title}</span>{a.summary&&<span className="art-sum" lang="fr" dir="ltr">{a.summary}</span>}<span className="art-more">{t.card.read} <ArrowUpRight size={16}/></span></span>
  </Link>;
}

/** Liste filtrable par rubrique, avec réagencement animé. */
export function ArticlesBrowser({articles}:{articles:ArticleCardData[]}){
  const{t}=useLang();const ALL='*';
  const cats=[ALL,...Array.from(new Set(articles.map(a=>a.category)))];
  const[cat,setCat]=useState(ALL);
  const shown=cat===ALL?articles:articles.filter(a=>a.category===cat);
  return <>
    {cats.length>2&&<div className="filters" role="toolbar" aria-label={t.card.filter}>{cats.map(c=><button key={c} aria-pressed={c===cat} className={c===cat?'is-on':undefined} onClick={()=>setCat(c)}>{c===cat&&<motion.span layoutId="filter-pill" className="filter-pill" transition={{type:'spring',stiffness:400,damping:34}}/>}<span>{c===ALL?t.card.all:c}</span></button>)}</div>}
    <motion.ul layout className="list-grid">
      <AnimatePresence mode="popLayout">{shown.map(a=><motion.li layout key={a.slug} className="art-wrap" initial={{opacity:0,scale:.96,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.96}} transition={{duration:.5,ease}}><ArticleCard a={a}/></motion.li>)}</AnimatePresence>
      {shown.length<3&&<motion.li layout key="evt" className="art-wrap" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5,ease,delay:.1}}><EventCard/></motion.li>}
    </motion.ul>
  </>;
}

/** Carte d’invitation aux événements (complète une grille d’articles). */
export function EventCard(){
  const{t,href}=useLang();const e=t.evtCard;
  return <Link className="evt-card" href={href('/evenements/')}><Dots className="evt-dots"/><span className="evt-ico"><CalendarDays size={22} strokeWidth={1.6}/></span><span><span className="evt-k">{e.k}</span><span className="evt-t">{e.t}</span></span><span className="evt-go">{e.go} <ArrowUpRight size={16}/></span></Link>;
}

/** Barre de progression de lecture (en haut de l’écran). */
export function ReadingProgress(){
  const{scrollYProgress}=useScroll();
  const scaleX=useSpring(scrollYProgress,{stiffness:200,damping:30,restDelta:.001});
  return <motion.div className="progress" style={{scaleX}} aria-hidden="true"/>;
}

/** Copie le lien de l’article. */
export function ShareButton(){
  const{t}=useLang();
  const[done,setDone]=useState(false);
  return <button className="share" onClick={async()=>{try{await navigator.clipboard.writeText(window.location.href);setDone(true);setTimeout(()=>setDone(false),2200)}catch{setDone(false)}}}>
    <AnimatePresence mode="wait" initial={false}><motion.span key={done?'ok':'copy'} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:.2}} style={{display:'inline-flex',alignItems:'center',gap:8}}>{done?<><Check size={16}/>{t.article.copied}</>:<><Link2 size={16}/>{t.article.copy}</>}</motion.span></AnimatePresence>
  </button>;
}
