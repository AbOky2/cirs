// Fonctions pures, utilisables côté client comme côté serveur.
export function formatDate(iso:string){return iso?new Intl.DateTimeFormat('fr-CA',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(iso)):''}
export function readingTime(md:string){return Math.max(1,Math.round(md.split(/\s+/).length/220))}
