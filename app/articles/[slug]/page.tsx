import {notFound} from 'next/navigation';
import {UserRound,CalendarDays,Clock} from 'lucide-react';
import {Header,Footer,PageHero,Btn} from '@/components/site';
import {ReadingProgress,ShareButton} from '@/components/articles';
import {getArticles,getArticle,renderMarkdown,formatDate,readingTime} from '@/lib/articles';
export const dynamicParams=false;
// L’export statique exige au moins une route : sans article publié, une page « a-venir » renvoie vers la liste.
export function generateStaticParams(){const slugs=getArticles().map(a=>({slug:a.slug}));return slugs.length?slugs:[{slug:'a-venir'}]}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const a=getArticle((await params).slug);return a?{title:a.title+' — CIRS-Conseil Inc.',description:a.summary}:{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const a=getArticle((await params).slug);if(!a)notFound();return <div id="top"><ReadingProgress/><Header/><main id="main"><article>
<PageHero size="md" tag={a.category} title={a.title} crumb={{href:'/articles/',label:'Tous les articles'}} lead={<>{a.summary&&<p>{a.summary}</p>}<div className="article-meta"><span><UserRound size={14}/>{a.author}</span><span><CalendarDays size={14}/><time dateTime={a.date}>{formatDate(a.date)}</time></span><span><Clock size={14}/>{readingTime(a.body)} min de lecture</span></div></>}/>
{a.cover&&<div className="article-cover"><img src={a.cover} alt=""/></div>}
<div className="article-body" dangerouslySetInnerHTML={{__html:renderMarkdown(a.body)}}/>
<div className="article-foot"><Btn href="/articles/" variant="light">Tous les articles</Btn><ShareButton/></div>
</article></main><Footer/></div>}
