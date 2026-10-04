import Link from 'next/link';
import {Header,Footer} from '@/components/site';
export default function NotFound(){return <><Header/><main id="main" className="not-found"><span className="eyebrow">404 — HORS DES SENTIERS</span><h1>Cette page n’existe pas.</h1><p>Retrouvez les expertises et les perspectives de CIRS-Conseil.</p><Link className="button dark" href="/">Revenir à l’accueil</Link></main><Footer/></>}
