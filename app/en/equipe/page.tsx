import {TeamView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('en','/equipe/',dicts.en.meta.teamTitle,dicts.en.meta.teamDesc);
export default function Page(){return <TeamView lang="en"/>}
