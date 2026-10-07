'use client';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {usePathname} from 'next/navigation';
import {AnimatePresence,motion,useScroll,useTransform} from 'framer-motion';
import {ArrowUpRight,Mail,Phone,MessageCircle,MapPin,Check} from 'lucide-react';
import {contact,motto,privacy,services} from '@/lib/content';
import {Title,ease} from '@/components/motion';

/* ——— Marque ——— */
// Monogramme inspiré du logo : hémisphère pointillé sous un arc doré, étoile polaire.
export function Mark({className}:{className?:string}){
  const dots=[[10,19.5],[13,19.5],[16,19.5],[19,19.5],[22,19.5],[11.5,16.5],[14.5,16.5],[17.5,16.5],[20.5,16.5],[13,13.5],[16,13.5],[19,13.5]];
  return <svg className={className} viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#081430"/><path d="M6.5 22.5a9.5 9.5 0 0 1 19 0" fill="none" stroke="#d9ad55" strokeWidth="1.4" strokeLinecap="round"/>{dots.map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r="1" fill="#d9ad55" opacity=".9"/>)}<path d="M16 4.6l.75 1.95 1.95.75-1.95.75L16 10l-.75-1.95-1.95-.75 1.95-.75z" fill="#f3d58f"/><path d="M8.5 25.6h15" stroke="#d9ad55" strokeWidth=".9" strokeLinecap="round" opacity=".55"/></svg>;
}
export function Logo({light=false}:{light?:boolean}){return <Link href="/" className={light?'logo logo-light':'logo'} aria-label="CIRS-Conseil Inc., accueil"><Mark className="logo-mark"/><span className="logo-word"><b>CIRS</b>‑Conseil<small>Inc.</small></span></Link>}

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
const nav=[{href:'/#apropos',label:'À propos',id:'apropos'},{href:'/#expertises',label:'Expertises',id:'expertises'},{href:'/#services',label:'Services',id:'services'},{href:'/equipe/',label:'Équipe',id:''},{href:'/articles/',label:'Articles',id:''},{href:'/evenements/',label:'Événements',id:''}];

export function Header(){
  const pathname=usePathname();
  const[open,setOpen]=useState(false);const[hidden,setHidden]=useState(false);const[scrolled,setScrolled]=useState(false);
  const[hover,setHover]=useState<string|null>(null);const[section,setSection]=useState('');
  useEffect(()=>{let last=window.scrollY;const on=()=>{const y=window.scrollY;setScrolled(y>24);setHidden(y>last&&y>420);if(y<window.innerHeight*.5)setSection('');last=y};on();window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on)},[]);
  useEffect(()=>{if(pathname!=='/')return;const els=nav.flatMap(n=>{const el=n.id?document.getElementById(n.id):null;return el?[el]:[]});const io=new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting)setSection(e.target.id)},{rootMargin:'-40% 0px -55% 0px'});els.forEach(el=>io.observe(el));return()=>io.disconnect()},[pathname]);
  useEffect(()=>{document.documentElement.classList.toggle('menu-lock',open);return()=>document.documentElement.classList.remove('menu-lock')},[open]);
  useEffect(()=>{setOpen(false)},[pathname]);
  const isActive=(n:typeof nav[number])=>n.id?pathname==='/'&&section===n.id:pathname.startsWith(n.href);
  const pill=hover??nav.find(isActive)?.href??null;
  return <header className={'hdr'+(hidden&&!open?' is-hidden':'')+(scrolled?' is-scrolled':'')+(open?' is-open':'')}>
    <div className="island">
      <Logo/>
      <nav className="island-nav" aria-label="Navigation principale" onMouseLeave={()=>setHover(null)}>
        {nav.map(n=><Link key={n.href} href={n.href} onMouseEnter={()=>setHover(n.href)} onFocus={()=>setHover(n.href)} onBlur={()=>setHover(null)} aria-current={isActive(n)?'page':undefined} className={isActive(n)?'is-active':undefined}>
          {pill===n.href&&<motion.span layoutId="nav-pill" className="nav-pill" transition={{type:'spring',stiffness:420,damping:34}}/>}
          <span className="nav-label">{n.label}</span>
        </Link>)}
      </nav>
      <Btn href="/contact/" size="sm" className="island-cta">Nous contacter</Btn>
      <button className="island-toggle" aria-label={open?'Fermer le menu':'Ouvrir le menu'} aria-expanded={open} aria-controls="menu-mobile" onClick={()=>setOpen(!open)}><span/><span/></button>
    </div>
    <AnimatePresence>{open&&<motion.div id="menu-mobile" className="mnav" initial={{clipPath:'inset(0 0 100% 0 round 0 0 28px 28px)'}} animate={{clipPath:'inset(0 0 0% 0 round 0 0 0px 0px)'}} exit={{clipPath:'inset(0 0 100% 0 round 0 0 28px 28px)'}} transition={{duration:.6,ease}}>
      <Dots className="mnav-dots"/>
      <nav className="mnav-links" aria-label="Navigation mobile">
        {[...nav,{href:'/contact/',label:'Contact',id:''}].map((n,i)=><motion.div key={n.href} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.6,ease,delay:.15+i*.05}}><Link href={n.href} onClick={()=>setOpen(false)}><span className="mnav-i">{String(i+1).padStart(2,'0')}</span>{n.label}</Link></motion.div>)}
      </nav>
      <motion.div className="mnav-foot" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}><a href={'mailto:'+contact.email}>{contact.email}</a><a href={contact.phoneHref}>{contact.phone}</a></motion.div>
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
          {crumb&&<Link className="crumb" href={crumb.href}>← {crumb.label}</Link>}
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
  return <footer className="ftr" ref={ref}>
    <div className="container ftr-top">
      <div className="ftr-brand"><Logo light/><p className="ftr-motto">{motto}</p><p>Cabinet de conseil canado-québécois en stratégie et affaires publiques.</p></div>
      <div className="ftr-col"><span className="ftr-title">Coordonnées</span><a href={'mailto:'+contact.email}>{contact.email}</a><a href={contact.phoneHref}>{contact.phone}</a><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp {contact.whatsapp}</a><span>{contact.locations.join(' · ')} · {contact.remote.toLowerCase()}</span></div>
      <div className="ftr-col"><span className="ftr-title">Explorer</span><Link href="/#apropos">À propos</Link><Link href="/#expertises">Expertises</Link><Link href="/#services">Services</Link><Link href="/equipe/">Équipe</Link><Link href="/articles/">Articles</Link><Link href="/evenements/">Événements</Link><Link href="/contact/">Contact</Link></div>
      <div className="ftr-col ftr-privacy" id="confidentialite"><span className="ftr-title">Confidentialité</span><p>{privacy}</p></div>
    </div>
    <div className="container ftr-bottom"><span suppressHydrationWarning>© {new Date().getFullYear()} CIRS-Conseil Inc.</span><a href="#top">Haut de page ↑</a></div>
    <div className="ftr-word" aria-hidden="true"><motion.span style={{y}}>CIRS</motion.span></div>
  </footer>;
}

/* ——— Formulaire de contact (ouvre la messagerie, aucune donnée stockée) ——— */
export function ContactForm(){
  const[sent,setSent]=useState(false);
  return <form className="cform" onSubmit={e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=`Demande CIRS-Conseil — ${f.get('topic')}`;const body=`Nom : ${f.get('name')}\nCourriel : ${f.get('email')}\nOrganisation : ${f.get('company')||'—'}\nTéléphone : ${f.get('phone')||'—'}\nBesoin : ${f.get('topic')}\n\n${f.get('message')}`;window.location.href=`mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;setSent(true)}}>
    <div className="cform-grid">
      <Field name="name" label="Nom complet" autoComplete="name" required/>
      <Field name="email" type="email" label="Courriel professionnel" autoComplete="email" required/>
      <Field name="company" label="Organisation" autoComplete="organization"/>
      <Field name="phone" type="tel" label="Téléphone (facultatif)" autoComplete="tel"/>
    </div>
    <label className="field field-select"><select name="topic" defaultValue={services[0]?.title}>{services.map(s=><option key={s.title}>{s.title}</option>)}<option>Conférence ou intervention</option><option>Autre demande</option></select><span className="field-label is-up">Votre besoin</span></label>
    <label className="field"><textarea name="message" required minLength={15} maxLength={5000} rows={5} placeholder=" "/><span className="field-label">Vos enjeux : contexte, marchés concernés, échéances…</span></label>
    <div className="cform-foot"><Btn type="submit" variant="dark">Envoyer la demande</Btn><p>L’envoi ouvre votre messagerie avec un courriel prérempli adressé à {contact.email}. Aucune donnée n’est stockée sur ce site. <a href="#confidentialite">Confidentialité</a></p></div>
    <AnimatePresence>{sent&&<motion.p role="status" className="cform-ok" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}}><Check size={18}/> Votre messagerie devrait s’ouvrir. Sinon, écrivez-nous à <a href={'mailto:'+contact.email}>{contact.email}</a> ou appelez le <a href={contact.phoneHref}>{contact.phone}</a>.</motion.p>}</AnimatePresence>
  </form>;
}
function Field({name,label,type='text',autoComplete,required=false}:{name:string;label:string;type?:string;autoComplete?:string;required?:boolean}){
  return <label className="field"><input name={name} type={type} autoComplete={autoComplete} required={required} maxLength={180} placeholder=" "/><span className="field-label">{label}</span></label>;
}

/* ——— Liste de coordonnées réutilisable ——— */
export function ContactList({dark=false}:{dark?:boolean}){
  const items=[{icon:Mail,label:'Courriel',value:contact.email,href:'mailto:'+contact.email},{icon:Phone,label:'Téléphone',value:contact.phone,href:contact.phoneHref},{icon:MessageCircle,label:'WhatsApp',value:contact.whatsapp,href:contact.whatsappHref,ext:true},{icon:MapPin,label:'Implantation',value:`${contact.locations.join(' · ')} — ${contact.remote.toLowerCase()}`}];
  return <ul className={dark?'clist clist-dark':'clist'}>{items.map(({icon:Icon,label,value,href,ext})=><li key={label}><span className="clist-ico"><Icon size={18} strokeWidth={1.8}/></span><span><small>{label}</small>{href?<a href={href} {...(ext?{target:'_blank',rel:'noopener noreferrer'}:{})}>{value}</a>:<span>{value}</span>}</span></li>)}</ul>;
}
