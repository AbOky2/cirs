// Génère la carte du monde en points utilisée par le site :
//   - lib/world.ts            : dimensions, positions des pôles (Québec, régions) et points « signaux »
//   - public/world-dots.svg   : 1 700 points sur les terres émergées (servi en masque CSS)
// Données : Natural Earth 1:50m (world-atlas), projection Natural Earth.
// Usage ponctuel (dépendances non installées par défaut) :
//   npm i --no-save world-atlas topojson-client d3-geo && node scripts/generate-world.mjs
import {createRequire} from 'node:module';
import {writeFileSync} from 'node:fs';
const require=createRequire(import.meta.url);
const {feature}=require('topojson-client');
const {geoNaturalEarth1,geoPath,geoContains}=await import('d3-geo');
const topology=require('world-atlas/land-50m.json');

const land=feature(topology,topology.objects.land);
const W=1000,STEP=8.5;
const proj=geoNaturalEarth1();
// Cadre : toutes les longitudes, latitudes -56° → 78° (sans l’Antarctique).
const frame={type:'Polygon',coordinates:[[[-180,-56],[180,-56],[180,78],[-180,78],[-180,-56]]]};
proj.fitWidth(W,frame);
const [[,y0],[,y1]]=geoPath(proj).bounds(frame);
const H=Math.round(y1-y0);
const r1=v=>Math.round(v*10)/10;

const dots=[];
for(let y=y0+STEP/2;y<y1;y+=STEP)for(let x=STEP/2;x<W;x+=STEP){
  const ll=proj.invert([x,y]);
  if(!ll||!Number.isFinite(ll[0])||ll[1]<-56)continue;
  if(geoContains(land,ll))dots.push([r1(x),r1(y-y0)]);
}
const at=(lon,lat)=>{const [x,y]=proj([lon,lat]);return [r1(x),r1(y-y0)]};
const hubs={quebec:at(-71.21,46.81),ameriques:at(-47.9,-15.8),europe:at(4.35,50.85),afrique:at(11.5,6.5),asie:at(105.85,21.03)};

// Points « signaux » pseudo-aléatoires mais déterministes.
let seed=7;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
const twinkles=[];
while(twinkles.length<34){const d=dots[Math.floor(rnd()*dots.length)];if(!twinkles.includes(d))twinkles.push(d)}
const enc=a=>a.map(([x,y])=>`${x},${y}`).join(' ');

writeFileSync(new URL('../public/world-dots.svg',import.meta.url),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}"><g fill="#0d1e45">${dots.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2.15"/>`).join('')}</g></svg>`);
writeFileSync(new URL('../lib/world.ts',import.meta.url),`// Fichier généré par scripts/generate-world.mjs (Natural Earth 1:50m, projection Natural Earth) — ne pas modifier à la main.
// Grille de ${dots.length} points sur les terres émergées, pas de ${STEP} unités.
export const WORLD_W = ${W};
export const WORLD_H = ${H};
export const WORLD_STEP = ${STEP};
export const WORLD_TWINKLES = '${enc(twinkles)}';
export const WORLD_HUBS = ${JSON.stringify(hubs)} as const;
`);
console.log(`${dots.length} points, ${W}×${H}`);
