import {HomeView} from '@/views/home';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('fr','/',dicts.fr.meta.homeTitle,dicts.fr.meta.homeDesc);
export default function Page(){return <HomeView lang="fr"/>}
