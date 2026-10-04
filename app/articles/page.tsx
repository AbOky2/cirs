import Link from 'next/link';
import {Header,Footer} from '@/components/site';
import {ArticleCard} from '@/components/articles';
import {getArticles} from '@/lib/articles';
export const metadata={title:'Articles & analyses — CIRS-Conseil Inc.',description:'Analyses stratégiques, notes de politiques publiques et veille internationale de CIRS-Conseil Inc.'};
export default function Page(){const articles=getArticles();return <div id="top"><Header/><main id="main"><section className="subhero"><div className="container"><Link className="breadcrumb" href="/">Accueil / Articles</Link><span className="eyebrow light">LE REGARD CIRS-CONSEIL</span><h1>Comprendre aujourd’hui.<br/><em>Éclairer demain.</em></h1><p>Analyses, notes stratégiques et veille sur les dynamiques qui façonnent votre environnement.</p></div></section><section className="container section">{articles.length?<div className="article-grid">{articles.map(a=><ArticleCard key={a.slug} a={a}/>)}</div>:<div className="notice"><h2>Nos premiers articles sont à venir.</h2><p>Retrouvez prochainement les analyses de CIRS-Conseil Inc. dans cet espace.</p></div>}</section></main><Footer/></div>}
