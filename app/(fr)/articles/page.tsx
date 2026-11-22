import {ArticlesView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('fr','/articles/',dicts.fr.meta.articlesTitle,dicts.fr.meta.articlesDesc);
export default function Page(){return <ArticlesView lang="fr"/>}
