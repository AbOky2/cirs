import {EventsView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('en','/evenements/',dicts.en.meta.eventsTitle,dicts.en.meta.eventsDesc);
export default function Page(){return <EventsView lang="en"/>}
