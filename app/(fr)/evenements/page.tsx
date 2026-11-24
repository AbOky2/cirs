import {EventsView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('fr','/evenements/',dicts.fr.meta.eventsTitle,dicts.fr.meta.eventsDesc);
export default function Page(){return <EventsView lang="fr"/>}
