import Link from 'next/link';
import {notFound} from 'next/navigation';
import {Header,Footer,ArrowRight} from '@/components/site';
import {getArticles,getArticle,renderMarkdown,formatDate,readingTime} from '@/lib/articles';
export const dynamicParams=false;
// L’export statique exige au moins une route : sans article publié, une page « a-venir » renvoie vers la liste.
export function generateStaticParams(){const slugs=getArticles().map(a=>({slug:a.slug}));return slugs.length?slugs:[{slug:'a-venir'}]}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const a=getArticle((await params).slug);return a?{title:a.title+' — CIRS-Conseil Inc.',description:a.summary}:{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const a=getArticle((await params).slug);if(!a)notFound();return <div id="top"><Header/><main id="main"><article><header className="subhero article-hero"><div className="container narrow"><Link className="breadcrumb" href="/articles/">Accueil / Articles</Link><span className="eyebrow light">{a.category}</span><h1>{a.title}</h1>{a.summary&&<p>{a.summary}</p>}<div className="article-meta"><span>{a.author}</span><span>{formatDate(a.date)}</span><span>{readingTime(a.body)} min de lecture</span></div></div></header>{a.cover&&<div className="container narrow article-cover"><img src={a.cover} alt=""/></div>}<div className="container narrow section article-body" dangerouslySetInnerHTML={{__html:renderMarkdown(a.body)}}/></article><div className="container narrow article-back"><Link className="text-link" href="/articles/">Tous les articles <ArrowRight size={17}/></Link></div></main><Footer/></div>}
