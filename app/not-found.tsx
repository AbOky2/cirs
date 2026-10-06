import Link from 'next/link';
import {Header,Footer,PageIntro,ArrowRight} from '@/components/site';
export default function NotFound(){return <><Header/><main id="main"><PageIntro label="Erreur 404" title={<>Cette page<br/>n’existe pas.</>}><p>Elle a peut-être été déplacée. Retrouvez les expertises et les analyses de CIRS-Conseil depuis l’accueil.</p><Link className="link" href="/">Revenir à l’accueil <ArrowRight size={17} strokeWidth={1.5}/></Link></PageIntro></main><Footer/></>}
