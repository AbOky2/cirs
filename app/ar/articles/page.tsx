import {ArticlesView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('ar','/articles/',dicts.ar.meta.articlesTitle,dicts.ar.meta.articlesDesc);
export default function Page(){return <ArticlesView lang="ar"/>}
