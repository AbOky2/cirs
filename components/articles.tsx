import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {type Article,formatDate,readingTime} from '@/lib/articles';
export function ArticleCard({a}:{a:Article}){return <Link className="article-card" href={`/articles/${a.slug}/`}>{a.cover&&<img src={a.cover} alt="" loading="lazy"/>}<div><span className="category">{a.category}</span><h2>{a.title}</h2>{a.summary&&<p>{a.summary}</p>}<span className="article-card-meta">{formatDate(a.date)} · {readingTime(a.body)} min de lecture <ArrowUpRight size={17}/></span></div></Link>}
