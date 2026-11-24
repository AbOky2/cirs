import {HomeView} from '@/views/home';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('ar','/',dicts.ar.meta.homeTitle,dicts.ar.meta.homeDesc);
export default function Page(){return <HomeView lang="ar"/>}
