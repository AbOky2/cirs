import {HomeView} from '@/views/home';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('en','/',dicts.en.meta.homeTitle,dicts.en.meta.homeDesc);
export default function Page(){return <HomeView lang="en"/>}
