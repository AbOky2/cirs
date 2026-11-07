'use client';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {usePathname} from 'next/navigation';
import {AnimatePresence,motion,useScroll,useTransform} from 'framer-motion';
import {ArrowUpRight,Mail,Phone,MessageCircle,MapPin,Check,Globe} from 'lucide-react';
import {contact} from '@/lib/content';
import {langs,langNames,switchPath,stripLang} from '@/lib/i18n';
import {Title,ease} from '@/components/motion';
import {useLang} from '@/components/i18n';

/* ——— Marque ——— */
// Monogramme inspiré du logo : hémisphère pointillé sous un arc doré, étoile polaire.
export function Mark({className}:{className?:string}){
  const dots=[[10,19.5],[13,19.5],[16,19.5],[19,19.5],[22,19.5],[11.5,16.5],[14.5,16.5],[17.5,16.5],[20.5,16.5],[13,13.5],[16,13.5],[19,13.5]];
  return <svg className={className} viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#081430"/><path d="M6.5 22.5a9.5 9.5 0 0 1 19 0" fill="none" stroke="#d9ad55" strokeWidth="1.4" strokeLinecap="round"/>{dots.map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r="1" fill="#d9ad55" opacity=".9"/>)}<path d="M16 4.6l.75 1.95 1.95.75-1.95.75L16 10l-.75-1.95-1.95-.75 1.95-.75z" fill="#f3d58f"/><path d="M8.5 25.6h15" stroke="#d9ad55" strokeWidth=".9" strokeLinecap="round" opacity=".55"/></svg>;
}
export function Logo({light=false}:{light?:boolean}){const{t,href}=useLang();return <Link href={href('/')} className={light?'logo logo-light':'logo'} aria-label={t.ui.logoLabel} dir="ltr"><Mark className="logo-mark"/><span className="logo-word"><b>CIRS</b>‑Conseil<small>Inc.</small></span></Link>}

/* ——— Boutons et étiquettes ——— */
type BtnProps={children:React.ReactNode;href?:string;variant?:'dark'|'gold'|'light'|'ghost';size?:'sm'|'md';external?:boolean;type?:'button'|'submit';onClick?:()=>void;className?:string};
export function Btn({children,href,variant='dark',size='md',external=false,type='button',onClick,className}:BtnProps){
  const cls=`btn btn-${variant} btn-${size}${className?' '+className:''}`;
  const inner=<><span className="btn-label">{children}</span><span className="btn-ico" aria-hidden="true"><ArrowUpRight size={size==='sm'?15:17} strokeWidth={2.2}/></span></>;
  if(href){
    if(external||href.startsWith('mailto:')||href.startsWith('tel:')||href.startsWith('http'))return <a className={cls} href={href} {...(external?{target:'_blank',rel:'noopener noreferrer'}:{})}>{inner}</a>;
    if(href.startsWith('#'))return <a className={cls} href={href}>{inner}</a>;
    return <Link className={cls} href={href}>{inner}</Link>;
  }
  return <button className={cls} type={type} onClick={onClick}>{inner}</button>;
}
export function Tag({children,dark=false}:{children:React.ReactNode;dark?:boolean}){return <span className={dark?'tag tag-dark':'tag'}><span className="tag-dot" aria-hidden="true"/>{children}</span>}

/** Carte du monde en points (masque CSS sur /world-dots.svg) — couleur pilotée par la classe. */
export function Dots({className}:{className?:string}){return <div className={'dots'+(className?' '+className:'')} aria-hidden="true"/>}

/* ——— En-tête : îlot flottant ——— */
type NavItem={href:string;label:string;id:string};
const sectionIds=['apropos','expertises'];
function useNav():NavItem[]{
  const{t,href}=useLang();const n=t.ui.nav;
  return [{href:href('/#apropos'),label:n.about,id:'apropos'},{href:href('/#expertises'),label:n.expertises,id:'expertises'},{href:href('/equipe/'),label:n.team,id:''},{href:href('/articles/'),label:n.articles,id:''},{href:href('/evenements/'),label:n.events,id:''}];
}

/* ——— Sélecteur de langue (FR · EN · ع) ——— */
export function LangSwitch({dark=false}:{dark?:boolean}){
  const{lang,t}=useLang();const pathname=usePathname()||'/';
  return <nav className={'lsw'+(dark?' lsw-dark':'')} aria-label={t.ui.lang}>
    <Globe className="lsw-ico" size={15} strokeWidth={1.8} aria-hidden="true"/>
    {langs.map(l=>{const on=l===lang;return <a key={l} href={switchPath(pathname,l)} hrefLang={l} lang={l} aria-current={on?'true':undefined} className={on?'is-on':undefined} title={langNames[l].long}>
      {on&&<motion.span layoutId={dark?'lsw-pill-d':'lsw-pill'} className="lsw-pill" transition={{type:'spring',stiffness:420,damping:34}}/>}
      <span className="lsw-l">{langNames[l].short}</span><span className="sr-only">{langNames[l].long}</span>
    </a>})}
  </nav>;
}

export function Header(){
  const pathname=usePathname()||'/';const{t,href}=useLang();const nav=useNav();
  const home=stripLang(pathname)==='/';
  const[open,setOpen]=useState(false);const[hidden,setHidden]=useState(false);const[scrolled,setScrolled]=useState(false);
  const[hover,setHover]=useState<string|null>(null);const[section,setSection]=useState('');
  useEffect(()=>{let last=window.scrollY;const on=()=>{const y=window.scrollY;setScrolled(y>24);setHidden(y>last&&y>420);if(y<window.innerHeight*.5)setSection('');last=y};on();window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on)},[]);
  useEffect(()=>{if(!home)return;const els=sectionIds.flatMap(id=>{const el=document.getElementById(id);return el?[el]:[]});const io=new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting)setSection(e.target.id)},{rootMargin:'-40% 0px -55% 0px'});els.forEach(el=>io.observe(el));return()=>io.disconnect()},[home]);
  useEffect(()=>{document.documentElement.classList.toggle('menu-lock',open);return()=>document.documentElement.classList.remove('menu-lock')},[open]);
  useEffect(()=>{setOpen(false)},[pathname]);
  const isActive=(n:NavItem)=>n.id?home&&section===n.id:pathname.startsWith(n.href);
  const pill=hover??nav.find(isActive)?.href??null;
  return <header className={'hdr'+(hidden&&!open?' is-hidden':'')+(scrolled?' is-scrolled':'')+(open?' is-open':'')}>
    <div className="island">
      <Logo/>
      <nav className="island-nav" aria-label={t.ui.navMain} onMouseLeave={()=>setHover(null)}>
        {nav.map(n=><Link key={n.href} href={n.href} onMouseEnter={()=>setHover(n.href)} onFocus={()=>setHover(n.href)} onBlur={()=>setHover(null)} aria-current={isActive(n)?'page':undefined} className={isActive(n)?'is-active':undefined}>
          {pill===n.href&&<motion.span layoutId="nav-pill" className="nav-pill" transition={{type:'spring',stiffness:420,damping:34}}/>}
          <span className="nav-label">{n.label}</span>
        </Link>)}
      </nav>
      <LangSwitch/>
      <Btn href={href('/contact/')} size="sm" className="island-cta">{t.ui.contactCta}</Btn>
      <button className="island-toggle" aria-label={open?t.ui.menuClose:t.ui.menuOpen} aria-expanded={open} aria-controls="menu-mobile" onClick={()=>setOpen(!open)}><span/><span/></button>
    </div>
    <AnimatePresence>{open&&<motion.div id="menu-mobile" className="mnav" initial={{clipPath:'inset(0 0 100% 0 round 0 0 28px 28px)'}} animate={{clipPath:'inset(0 0 0% 0 round 0 0 0px 0px)'}} exit={{clipPath:'inset(0 0 100% 0 round 0 0 28px 28px)'}} transition={{duration:.6,ease}}>
      <Dots className="mnav-dots"/>
      <nav className="mnav-links" aria-label={t.ui.navMobile}>
        {[...nav,{href:href('/contact/'),label:t.ui.nav.contact,id:''}].map((n,i)=><motion.div key={n.href} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.6,ease,delay:.15+i*.05}}><Link href={n.href} onClick={()=>setOpen(false)}><span className="mnav-i">{String(i+1).padStart(2,'0')}</span>{n.label}</Link></motion.div>)}
      </nav>
      <motion.div className="mnav-foot" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}><LangSwitch dark/><a href={'mailto:'+contact.email}>{contact.email}</a><a href={contact.phoneHref} dir="ltr">{contact.phone}</a></motion.div>
    </motion.div>}</AnimatePresence>
  </header>;
}

/* ——— En-tête de page intérieure ——— */
export function PageHero({tag,title,tone,lead,crumb,children,size='lg'}:{tag:string;title:string;tone?:string;lead?:React.ReactNode;crumb?:{href:string;label:string};children?:React.ReactNode;size?:'lg'|'md'}){
  return <section className="phero">
    <div className="phero-panel">
      <Dots className="phero-dots"/><div className="phero-glow" aria-hidden="true"/>
      <div className="container phero-grid">
        <div className="phero-copy">
          {crumb&&<Link className="crumb" href={crumb.href}><span className="crumb-arrow" aria-hidden="true">←</span> {crumb.label}</Link>}
          <Tag dark>{tag}</Tag>
          <Title as="h1" immediate className={size==='md'?'phero-title phero-title-md':'phero-title'} parts={tone?[{t:title,br:true},{t:tone,tone:true}]:[{t:title}]}/>
          {lead&&<motion.div className="phero-lead" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.9,ease,delay:.35}}>{lead}</motion.div>}
        </div>
        {children&&<motion.div className="phero-aside" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:1,ease,delay:.25}}>{children}</motion.div>}
      </div>
    </div>
  </section>;
}

/* ——— Pied de page ——— */
export function Footer(){
  const ref=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end end']});
  const y=useTransform(scrollYProgress,[0,1],['40%','0%']);
  const{t,href}=useLang();const nav=useNav();
  return <footer className="ftr" ref={ref}>
    <div className="container ftr-top">
      <div className="ftr-brand"><Logo light/><p className="ftr-motto">{t.motto}</p><p>{t.footer.tagline}</p></div>
      <div className="ftr-col"><span className="ftr-title">{t.footer.contact}</span><a href={'mailto:'+contact.email}>{contact.email}</a><a href={contact.phoneHref} dir="ltr">{contact.phone}</a><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">{t.clist.whatsapp} <span dir="ltr">{contact.whatsapp}</span></a><span>{t.locations} · {t.remote}</span></div>
      <div className="ftr-col"><span className="ftr-title">{t.footer.explore}</span>{nav.map(n=><Link key={n.href} href={n.href}>{n.label}</Link>)}<Link href={href('/contact/')}>{t.ui.nav.contact}</Link></div>
      <div className="ftr-col ftr-privacy" id="confidentialite"><span className="ftr-title">{t.footer.privacy}</span><p>{t.privacy}</p><LangSwitch dark/></div>
    </div>
    <div className="container ftr-bottom"><span suppressHydrationWarning dir="ltr">© {new Date().getFullYear()} CIRS-Conseil Inc.</span><a href="#top">{t.footer.top}</a></div>
    <div className="ftr-word" aria-hidden="true"><motion.span style={{y}}>CIRS</motion.span></div>
  </footer>;
}

/* ——— Formulaire de contact (ouvre la messagerie, aucune donnée stockée) ——— */
export function ContactForm(){
  const[sent,setSent]=useState(false);
  const{t}=useLang();const F=t.form;const B=F.body;const topics=[...t.expertises.map(x=>x.title),...F.extra];
  return <form className="cform" onSubmit={e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=`${F.subject} — ${f.get('topic')}`;const body=`${B.name} : ${f.get('name')}\n${B.email} : ${f.get('email')}\n${B.company} : ${f.get('company')||'—'}\n${B.phone} : ${f.get('phone')||'—'}\n${B.need} : ${f.get('topic')}\n\n${f.get('message')}`;window.location.href=`mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;setSent(true)}}>
    <div className="cform-grid">
      <Field name="name" label={F.name} autoComplete="name" required/>
      <Field name="email" type="email" label={F.email} autoComplete="email" required/>
      <Field name="company" label={F.company} autoComplete="organization"/>
      <Field name="phone" type="tel" label={F.phone} autoComplete="tel"/>
    </div>
    <label className="field field-select"><select name="topic" defaultValue={topics[0]}>{topics.map(s=><option key={s}>{s}</option>)}</select><span className="field-label is-up">{F.need}</span></label>
    <label className="field"><textarea name="message" required minLength={15} maxLength={5000} rows={5} placeholder=" "/><span className="field-label">{F.message}</span></label>
    <div className="cform-foot"><Btn type="submit" variant="dark">{F.submit}</Btn><p>{F.note} {contact.email}. {F.note2} <a href="#confidentialite">{F.privacyLink}</a></p></div>
    <AnimatePresence>{sent&&<motion.p role="status" className="cform-ok" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}}><Check size={18}/> <span>{F.ok} <a href={'mailto:'+contact.email}>{contact.email}</a> {F.okOr} <a href={contact.phoneHref} dir="ltr">{contact.phone}</a>.</span></motion.p>}</AnimatePresence>
  </form>;
}
function Field({name,label,type='text',autoComplete,required=false}:{name:string;label:string;type?:string;autoComplete?:string;required?:boolean}){
  return <label className="field"><input name={name} type={type} autoComplete={autoComplete} required={required} maxLength={180} placeholder=" "/><span className="field-label">{label}</span></label>;
}

/* ——— Liste de coordonnées réutilisable ——— */
export function ContactList({dark=false}:{dark?:boolean}){
  const{t}=useLang();const L=t.clist;
  const items=[{icon:Mail,label:L.email,value:contact.email,href:'mailto:'+contact.email,ltr:true},{icon:Phone,label:L.phone,value:contact.phone,href:contact.phoneHref,ltr:true},{icon:MessageCircle,label:L.whatsapp,value:contact.whatsapp,href:contact.whatsappHref,ext:true,ltr:true},{icon:MapPin,label:L.location,value:`${t.locations} — ${t.remote}`}];
  return <ul className={dark?'clist clist-dark':'clist'}>{items.map(({icon:Icon,label,value,href,ext,ltr})=><li key={label}><span className="clist-ico"><Icon size={18} strokeWidth={1.8}/></span><span><small>{label}</small>{href?<a href={href} dir={ltr?'ltr':undefined} {...(ext?{target:'_blank',rel:'noopener noreferrer'}:{})}>{value}</a>:<span>{value}</span>}</span></li>)}</ul>;
}
