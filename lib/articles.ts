import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import {marked} from 'marked';

export type Article={slug:string;title:string;date:string;category:string;summary:string;author:string;cover?:string;body:string};

const dir=path.join(process.cwd(),'content/articles');

// Articles rédigés via /admin (Sveltia CMS) : un fichier Markdown par article, brouillons exclus.
export function getArticles():Article[]{
  if(!fs.existsSync(dir))return[];
  return fs.readdirSync(dir).filter(f=>f.endsWith('.md')).flatMap((f):Article[]=>{
    const {data,content}=matter(fs.readFileSync(path.join(dir,f),'utf8'));
    if(data.draft)return[];
    return [{slug:f.replace(/\.md$/,''),title:String(data.title??'Sans titre'),date:data.date?new Date(data.date).toISOString():'',category:String(data.category??'Analyse'),summary:String(data.summary??''),author:String(data.author??'Hassan Ahmat Djamaladine'),body:content,...(data.cover?{cover:String(data.cover)}:{})}];
  }).sort((a,b)=>b.date.localeCompare(a.date));
}
export function getArticle(slug:string){return getArticles().find(a=>a.slug===slug)}
export function renderMarkdown(md:string){return marked.parse(md,{async:false})}
import {formatDate,readingTime} from './format';
export {formatDate,readingTime};
import type {ArticleCardData} from '@/components/articles';
export function toCard(a:Article):ArticleCardData{return {slug:a.slug,title:a.title,category:a.category,dateIso:a.date,dateLabel:formatDate(a.date),minutes:readingTime(a.body),summary:a.summary,...(a.cover?{cover:a.cover}:{})}}
