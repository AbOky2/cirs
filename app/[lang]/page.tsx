import {HomeView,pageMetadata} from '@/components/views';
import {intlLangs,type Lang} from '@/lib/i18n';
type P={params:Promise<{lang:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return intlLangs.map(lang=>({lang}))}
export async function generateMetadata({params}:P){return pageMetadata((await params).lang as Lang,'home')}
export default async function Page({params}:P){return <HomeView lang={(await params).lang as Lang}/>}
