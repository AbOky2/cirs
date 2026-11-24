import {TeamView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('fr','/equipe/',dicts.fr.meta.teamTitle,dicts.fr.meta.teamDesc);
export default function Page(){return <TeamView lang="fr"/>}
