import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {type Article,formatDate,readingTime} from '@/lib/articles';
export function ArticleList({articles}:{articles:Article[]}){return <ul className="article-list detailed">{articles.map(a=><li key={a.slug}><Link href={`/articles/${a.slug}/`}><time dateTime={a.date}>{formatDate(a.date)}</time><span className="article-list-main"><span className="article-list-title">{a.title}</span>{a.summary&&<span className="article-list-summary">{a.summary}</span>}</span><span className="article-list-cat">{a.category}<br/>{readingTime(a.body)} min</span><ArrowUpRight className="article-list-arrow" size={20} strokeWidth={1.5}/></Link></li>)}</ul>}
