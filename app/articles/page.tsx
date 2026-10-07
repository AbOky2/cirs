import {Header,Footer,PageHero} from '@/components/site';
import {ArticlesBrowser} from '@/components/articles';
import {getArticles,toCard} from '@/lib/articles';
export const metadata={title:'Articles — CIRS-Conseil Inc.',description:'Analyses stratégiques, notes de politiques publiques et veille internationale de CIRS-Conseil Inc.'};
export default function Page(){const articles=getArticles().map(toCard);return <div id="top"><Header/><main id="main">
<PageHero tag="Articles & analyses" title="Comprendre aujourd’hui," tone="éclairer demain." crumb={{href:'/',label:'Accueil'}} lead={<p>Analyses, notes stratégiques et veille sur les dynamiques qui façonnent votre environnement.</p>}/>
<section className="section container">{articles.length?<ArticlesBrowser articles={articles}/>:<div className="empty"><h2>Nos premiers articles sont à venir.</h2><p>Retrouvez prochainement les analyses de CIRS-Conseil Inc. dans cet espace.</p></div>}</section>
</main><Footer/></div>}
