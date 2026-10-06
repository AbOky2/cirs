import Link from 'next/link';
import {notFound} from 'next/navigation';
import {Header,Footer,ArrowRight} from '@/components/site';
import {getArticles,getArticle,renderMarkdown,formatDate,readingTime} from '@/lib/articles';
export const dynamicParams=false;
// L’export statique exige au moins une route : sans article publié, une page « a-venir » renvoie vers la liste.
export function generateStaticParams(){const slugs=getArticles().map(a=>({slug:a.slug}));return slugs.length?slugs:[{slug:'a-venir'}]}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const a=getArticle((await params).slug);return a?{title:a.title+' — CIRS-Conseil Inc.',description:a.summary}:{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const a=getArticle((await params).slug);if(!a)notFound();return <div id="top"><Header/><main id="main"><article>
<header className="article-head wrap"><Link className="crumb" href="/articles/">← Tous les articles</Link><span className="label">{a.category}</span><h1>{a.title}</h1>{a.summary&&<p className="article-standfirst">{a.summary}</p>}<p className="article-meta"><span>{a.author}</span><time dateTime={a.date}>{formatDate(a.date)}</time><span>{readingTime(a.body)} min de lecture</span></p></header>
{a.cover&&<div className="wrap article-cover"><img src={a.cover} alt=""/></div>}
<div className="wrap"><div className="article-body" dangerouslySetInnerHTML={{__html:renderMarkdown(a.body)}}/><div className="article-foot"><Link className="link" href="/articles/">Tous les articles <ArrowRight size={17} strokeWidth={1.5}/></Link></div></div>
</article></main><Footer/></div>}
