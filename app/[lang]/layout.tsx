import type {Viewport} from 'next';
import {notFound} from 'next/navigation';
import {Document} from '@/components/document';
import {intlLangs,isLang} from '@/lib/i18n';
// Racine des versions traduites : /en/ (anglais) et /ar/ (arabe, de droite à gauche).
export const dynamicParams=false;
export function generateStaticParams(){return intlLangs.map(lang=>({lang}))}
export const viewport:Viewport={themeColor:'#081430'};
export default async function RootLayout({children,params}:Readonly<{children:React.ReactNode;params:Promise<{lang:string}>}>){
  const {lang}=await params;if(!isLang(lang)||lang==='fr')notFound();
  return <Document lang={lang}>{children}</Document>;
}
