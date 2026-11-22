'use client';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {usePathname} from 'next/navigation';
import {AnimatePresence,motion,useScroll,useTransform} from 'framer-motion';
import {ArrowUpRight,ChevronDown,Mail,Phone,MessageCircle,MapPin,Check,ChartColumn,Globe2,ShieldCheck,Megaphone,Layers,Landmark,BriefcaseBusiness,MessagesSquare,Leaf,Settings,FileText,ScrollText,Binoculars,BookOpen,Building2,Target,Users,CalendarDays,MessageSquareText,ClipboardList,type LucideIcon} from 'lucide-react';
import {contact,articleCats} from '@/lib/content';
import {useI18n} from '@/components/providers';
import {fill,langs,splitPath,L,dicts} from '@/lib/i18n';
import {Title,ease} from '@/components/motion';

/* ——— Marque ——— */
// Monogramme inspiré du logo : hémisphère pointillé sous un arc doré, étoile polaire.
export function Mark({className}:{className?:string}){
  const dots=[[10,19.5],[13,19.5],[16,19.5],[19,19.5],[22,19.5],[11.5,16.5],[14.5,16.5],[17.5,16.5],[20.5,16.5],[13,13.5],[16,13.5],[19,13.5]];
  return <svg className={className} viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#081430"/><path d="M6.5 22.5a9.5 9.5 0 0 1 19 0" fill="none" stroke="#d9ad55" strokeWidth="1.4" strokeLinecap="round"/>{dots.map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r="1" fill="#d9ad55" opacity=".9"/>)}<path d="M16 4.6l.75 1.95 1.95.75-1.95.75L16 10l-.75-1.95-1.95-.75 1.95-.75z" fill="#f3d58f"/><path d="M8.5 25.6h15" stroke="#d9ad55" strokeWidth=".9" strokeLinecap="round" opacity=".55"/></svg>;
}
export function Logo({light=false}:{light?:boolean}){const{t,l}=useI18n();return <Link href={l('/')} className={light?'logo logo-light':'logo'} aria-label={t.nav.home} dir="ltr"><Mark className="logo-mark"/><span className="logo-word"><b>CIRS</b>‑Conseil<small>Inc.</small></span></Link>}

/* ——— Boutons et étiquettes ——— */
type BtnProps={children:React.ReactNode;href?:string;variant?:'dark'|'gold'|'light'|'ghost';size?:'sm'|'md';external?:boolean;type?:'button'|'submit';onClick?:()=>void;className?:string};
export function Btn({children,href:rawHref,variant='dark',size='md',external=false,type='button',onClick,className}:BtnProps){
  const{l}=useI18n();const href=rawHref&&rawHref.startsWith('/')?l(rawHref):rawHref;
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

/* ——— En-tête : îlot flottant ———
   Ordre stratégique : ce que fait le cabinet (Expertises, Services), la preuve de son expertise
   (Analyses & publications), puis l’institutionnel regroupé dans le sous-menu « Le cabinet ». */

/** Sélecteur de langue : renvoie vers la même page dans l’autre langue (les analyses détaillées n’existent qu’en français). */
export function LangSwitch({className}:{className?:string}){
  const pathname=usePathname();const{lang,t}=useI18n();
  const[,path]=splitPath(pathname);
  const target=(to:typeof lang)=>{const p=to!=='fr'&&/^\/articles\/[^/]+\/?$/.test(path)?'/articles/':path;return L(to,p)};
  return <div className={'lang'+(className?' '+className:'')} role="group" aria-label={t.nav.language}>{langs.map(x=><a key={x} href={target(x)} hrefLang={dicts[x].htmlLang} lang={dicts[x].htmlLang} aria-current={x===lang?'true':undefined} className={x===lang?'is-on':undefined} title={dicts[x].langName}>{x==='ar'?'ع':x.toUpperCase()}</a>)}</div>;
}

type Sub={href:string;label:string;icon:LucideIcon};
type Menu={key:string;href:string;label:string;subs:Sub[];match:(path:string,section:string)=>boolean;cta?:boolean};
const expIcons=[ChartColumn,Globe2,ShieldCheck,Megaphone,Layers];
const svcIcons=[Landmark,BriefcaseBusiness,MessagesSquare,Leaf,Settings];
const catIcons=[FileText,ScrollText,Binoculars,BookOpen];

/** Arborescence du site (maquette « Organisation recommandée ») : menus par ordre de priorité. */
export function useMenus():Menu[]{
  const{t}=useI18n();const n=t.nav;
  return [
    {key:'exp',href:'/#expertises',label:n.expertises,match:(p,s)=>p==='/'&&s==='expertises',subs:t.exp.items.map((x,i)=>({href:`/#expertise-${i+1}`,label:x.title,icon:expIcons[i]??Layers}))},
    {key:'svc',href:'/#services',label:n.services,match:(p,s)=>p==='/'&&s==='services',subs:t.svc.items.map((x,i)=>({href:`/#service-${i+1}`,label:x.title,icon:svcIcons[i]??Settings}))},
    {key:'ana',href:'/articles/',label:n.analyses,match:(p,s)=>p.startsWith('/articles/')||(p==='/'&&s==='articles'),subs:n.cats.map((c,i)=>({href:`/articles/?rubrique=${encodeURIComponent(articleCats[i]??'')}`,label:c,icon:catIcons[i]??FileText}))},
    {key:'about',href:'/#apropos',label:n.about,match:(p,s)=>p.startsWith('/equipe/')||p.startsWith('/evenements/')||(p==='/'&&['methode','secteurs','apropos','equipe','faq'].includes(s)),subs:[
      {href:'/#apropos',label:n.cabinet,icon:Building2},{href:'/#methode',label:n.method,icon:Target},{href:'/equipe/',label:n.team,icon:Users},{href:'/evenements/',label:n.events,icon:CalendarDays}]},
    {key:'contact',href:'/contact/',label:n.contact,cta:true,match:p=>p.startsWith('/contact/'),subs:[
      {href:'/contact/#consultation',label:n.consult,icon:MessageSquareText},{href:'/contact/#formulaire',label:n.form,icon:ClipboardList},{href:'/contact/#coordonnees',label:n.details,icon:MapPin}]},
  ];
}
/** Les liens à ancre ne déclenchent pas « hashchange » avec le routeur : on le signale aux composants qui en dépendent. */
const hashPing=()=>setTimeout(()=>window.dispatchEvent(new HashChangeEvent('hashchange')),60);

export function Header(){
  const pathname=usePathname();const{t,l}=useI18n();
  const[,path]=splitPath(pathname);
  const menus=useMenus();
  const[open,setOpen]=useState(false);const[hidden,setHidden]=useState(false);const[scrolled,setScrolled]=useState(false);
  const[section,setSection]=useState('');const[sub,setSub]=useState<string|null>(null);
  const navRef=useRef<HTMLElement>(null);
  useEffect(()=>{let last=window.scrollY;const on=()=>{const y=window.scrollY;setScrolled(y>24);setHidden(y>last&&y>420);if(y<window.innerHeight*.5)setSection('');last=y};on();window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on)},[]);
  useEffect(()=>{if(path!=='/')return;const els=[...document.querySelectorAll<HTMLElement>('main > section[id]')];const io=new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting)setSection(e.target.id)},{rootMargin:'-40% 0px -55% 0px'});els.forEach(el=>io.observe(el));return()=>io.disconnect()},[path]);
  useEffect(()=>{document.documentElement.classList.toggle('menu-lock',open);return()=>document.documentElement.classList.remove('menu-lock')},[open]);
  useEffect(()=>{setOpen(false);setSub(null)},[pathname]);
  useEffect(()=>{if(hidden)setSub(null)},[hidden]);
  // Fermeture du sous-menu : Échap, clic ou focus en dehors.
  useEffect(()=>{if(!sub)return;const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){const k=sub;setSub(null);navRef.current?.querySelector<HTMLElement>(`[data-menu="${k}"] .nav-chev-btn`)?.focus()}};const out=(e:Event)=>{if(!navRef.current?.querySelector(`[data-menu="${sub}"]`)?.contains(e.target as Node))setSub(null)};document.addEventListener('keydown',key);document.addEventListener('pointerdown',out);document.addEventListener('focusin',out);return()=>{document.removeEventListener('keydown',key);document.removeEventListener('pointerdown',out);document.removeEventListener('focusin',out)}},[sub]);
  const go=(href:string)=>{setSub(null);setOpen(false);if(href.includes('#'))hashPing()};
  return <header className={'hdr'+(hidden&&!open?' is-hidden':'')+(scrolled?' is-scrolled':'')+(open?' is-open':'')}>
    <div className="island">
      <Logo light/>
      <nav ref={navRef} className="island-nav" aria-label={t.nav.main}>
        {menus.map(m=>{const on=m.match(path,section);const isOpen=sub===m.key;return <div key={m.key} data-menu={m.key} className={'nav-item'+(m.cta?' nav-item-cta':'')+(on?' is-active':'')} onMouseEnter={()=>setSub(m.key)} onMouseLeave={()=>setSub(v=>v===m.key?null:v)}>
          <Link href={l(m.href)} className="nav-top" aria-current={on?'page':undefined} onClick={()=>go(m.href)}>{m.cta&&<Mail size={16} strokeWidth={2}/>}<span>{m.label}</span></Link>
          <button type="button" className="nav-chev-btn" aria-expanded={isOpen} aria-controls={'nav-'+m.key} aria-label={`${t.nav.submenu} : ${m.label}`} onClick={()=>setSub(isOpen?null:m.key)}><ChevronDown size={15} strokeWidth={2.4} className="nav-chev"/></button>
          <AnimatePresence>{isOpen&&<motion.div id={'nav-'+m.key} className="nav-drop" initial={{opacity:0,y:8,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:6,scale:.98}} transition={{duration:.2,ease}}>
            {m.subs.map(x=>{const Icon=x.icon;return <Link key={x.href} href={l(x.href)} onClick={()=>go(x.href)}><span className="nav-drop-ico"><Icon size={17} strokeWidth={1.8}/></span><span>{x.label}</span></Link>})}
          </motion.div>}</AnimatePresence>
        </div>})}
      </nav>
      <LangSwitch className="island-lang lang-dark"/>
      <button className="island-toggle" aria-label={open?t.nav.close:t.nav.open} aria-expanded={open} aria-controls="menu-mobile" onClick={()=>setOpen(!open)}><span/><span/></button>
    </div>
    <AnimatePresence>{open&&<motion.div id="menu-mobile" className="mnav" initial={{clipPath:'inset(0 0 100% 0 round 0 0 28px 28px)'}} animate={{clipPath:'inset(0 0 0% 0 round 0 0 0px 0px)'}} exit={{clipPath:'inset(0 0 100% 0 round 0 0 28px 28px)'}} transition={{duration:.6,ease}}>
      <Dots className="mnav-dots"/>
      <nav className="mnav-links" aria-label={t.nav.mobile}>
        {menus.map((m,i)=><motion.div key={m.key} className="mnav-group" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.6,ease,delay:.12+i*.05}}>
          <Link href={l(m.href)} className="mnav-top" onClick={()=>go(m.href)}><span className="mnav-i" dir="ltr">{String(i+1).padStart(2,'0')}</span>{m.label}</Link>
          <div className="mnav-subs">{m.subs.map(x=><Link key={x.href} href={l(x.href)} onClick={()=>go(x.href)}>{x.label}</Link>)}</div>
        </motion.div>)}
      </nav>
      <motion.div className="mnav-foot" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}><LangSwitch className="lang-dark"/><a href={'mailto:'+contact.email}>{contact.email}</a><a href={contact.phoneHref} dir="ltr">{contact.phone}</a></motion.div>
    </motion.div>}</AnimatePresence>
  </header>;
}

/* ——— En-tête de page intérieure ——— */
export function PageHero({tag,title,tone,lead,crumb,children,size='lg'}:{tag:string;title:string;tone?:string;lead?:React.ReactNode;crumb?:{href:string;label:string};children?:React.ReactNode;size?:'lg'|'md'}){
  const{l}=useI18n();
  return <section className="phero">
    <div className="phero-panel">
      <Dots className="phero-dots"/><div className="phero-glow" aria-hidden="true"/>
      <div className="container phero-grid">
        <div className="phero-copy">
          {crumb&&<Link className="crumb" href={l(crumb.href)}><span className="crumb-arrow" aria-hidden="true">←</span> {crumb.label}</Link>}
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
  const{t,l}=useI18n();
  const ref=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end end']});
  const y=useTransform(scrollYProgress,[0,1],['40%','0%']);
  return <footer className="ftr" ref={ref}>
    <div className="container ftr-top">
      <div className="ftr-brand"><Logo light/><p className="ftr-motto">{t.motto}</p><p>{t.tagline}</p></div>
      <div className="ftr-col"><span className="ftr-title">{t.footer.contact}</span><a href={'mailto:'+contact.email}>{contact.email}</a><a href={contact.phoneHref} dir="ltr">{contact.phone}</a><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp <span dir="ltr">{contact.whatsapp}</span></a><span>{t.contact.locShort}</span></div>
      <div className="ftr-col"><span className="ftr-title">{t.footer.explore}</span><Link href={l('/#expertises')}>{t.nav.expertises}</Link><Link href={l('/#services')}>{t.nav.services}</Link><Link href={l('/articles/')}>{t.nav.analyses}</Link><Link href={l('/#apropos')}>{t.nav.about}</Link><Link href={l('/equipe/')}>{t.nav.team}</Link><Link href={l('/evenements/')}>{t.nav.events}</Link><Link href={l('/contact/')}>{t.nav.contact}</Link></div>
      <div className="ftr-col ftr-privacy" id="confidentialite"><span className="ftr-title">{t.footer.privacyTitle}</span><p>{t.footer.privacy}</p><LangSwitch className="lang-dark ftr-lang"/></div>
    </div>
    <div className="container ftr-bottom"><span suppressHydrationWarning dir="ltr">© {new Date().getFullYear()} CIRS-Conseil Inc.</span><a href="#top">{t.footer.top}</a></div>
    <div className="ftr-word" aria-hidden="true"><motion.span style={{y}}>CIRS</motion.span></div>
  </footer>;
}

/* ——— Formulaire de contact (ouvre la messagerie, aucune donnée stockée) ——— */
export function ContactForm(){
  const{t}=useI18n();const f_=t.form;const lb=f_.labels;
  const topics=[...t.exp.items.map(x=>x.title),...f_.extra];
  const[sent,setSent]=useState(false);
  const [okA,okB]=f_.ok.split('{email}') as [string,string];const [okB1,okB2]=(okB??'').split('{phone}') as [string,string];
  return <form className="cform" onSubmit={e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=`${f_.subject} — ${f.get('topic')}`;const body=`${lb.name} : ${f.get('name')}\n${lb.email} : ${f.get('email')}\n${lb.company} : ${f.get('company')||'—'}\n${lb.phone} : ${f.get('phone')||'—'}\n${lb.need} : ${f.get('topic')}\n\n${f.get('message')}`;window.location.href=`mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;setSent(true)}}>
    <div className="cform-grid">
      <Field name="name" label={f_.name} autoComplete="name" required/>
      <Field name="email" type="email" label={f_.email} autoComplete="email" required/>
      <Field name="company" label={f_.company} autoComplete="organization"/>
      <Field name="phone" type="tel" label={f_.phone} autoComplete="tel"/>
    </div>
    <label className="field field-select"><select name="topic" defaultValue={topics[0]}>{topics.map(x=><option key={x}>{x}</option>)}</select><span className="field-label is-up">{f_.need}</span></label>
    <label className="field"><textarea name="message" required minLength={15} maxLength={5000} rows={5} placeholder=" "/><span className="field-label">{f_.message}</span></label>
    <div className="cform-foot"><Btn type="submit" variant="dark">{f_.submit}</Btn><p>{fill(f_.note,{email:contact.email})} <a href="#confidentialite">{f_.privacy}</a></p></div>
    <AnimatePresence>{sent&&<motion.p role="status" className="cform-ok" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}}><Check size={18}/> <span>{okA}<a href={'mailto:'+contact.email}>{contact.email}</a>{okB1}<a href={contact.phoneHref} dir="ltr">{contact.phone}</a>{okB2}</span></motion.p>}</AnimatePresence>
  </form>;
}
function Field({name,label,type='text',autoComplete,required=false}:{name:string;label:string;type?:string;autoComplete?:string;required?:boolean}){
  return <label className="field"><input name={name} type={type} autoComplete={autoComplete} required={required} maxLength={180} placeholder=" "/><span className="field-label">{label}</span></label>;
}

/* ——— Liste de coordonnées réutilisable ——— */
export function ContactList({dark=false}:{dark?:boolean}){
  const{t}=useI18n();const c=t.contact;
  const items=[{icon:Mail,label:c.email,value:contact.email,href:'mailto:'+contact.email},{icon:Phone,label:c.phone,value:contact.phone,href:contact.phoneHref,ltr:true},{icon:MessageCircle,label:c.whatsapp,value:contact.whatsapp,href:contact.whatsappHref,ext:true,ltr:true},{icon:MapPin,label:c.location,value:c.locValue}];
  return <ul className={dark?'clist clist-dark':'clist'}>{items.map(({icon:Icon,label,value,href,ext,ltr})=><li key={label}><span className="clist-ico"><Icon size={18} strokeWidth={1.8}/></span><span><small>{label}</small>{href?<a href={href} dir={ltr?'ltr':undefined} {...(ext?{target:'_blank',rel:'noopener noreferrer'}:{})}>{value}</a>:<span>{value}</span>}</span></li>)}</ul>;
}
