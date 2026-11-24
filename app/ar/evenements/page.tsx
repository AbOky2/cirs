import {EventsView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('ar','/evenements/',dicts.ar.meta.eventsTitle,dicts.ar.meta.eventsDesc);
export default function Page(){return <EventsView lang="ar"/>}
