import {TeamView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('ar','/equipe/',dicts.ar.meta.teamTitle,dicts.ar.meta.teamDesc);
export default function Page(){return <TeamView lang="ar"/>}
