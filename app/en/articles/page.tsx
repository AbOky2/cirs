import {ArticlesView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('en','/articles/',dicts.en.meta.articlesTitle,dicts.en.meta.articlesDesc);
export default function Page(){return <ArticlesView lang="en"/>}
