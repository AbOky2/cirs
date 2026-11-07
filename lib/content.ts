import type {Lang} from '@/lib/i18n';

/* Coordonnées : identiques dans toutes les langues. */
export const contact={
  email:'firme@cirsorg.com',
  phone:'418 558 48 64',
  phoneHref:'tel:+14185584864',
  whatsapp:'+33 7 52 93 06 08',
  whatsappHref:'https://wa.me/33752930608'
};

/* ————————————————————————————————————————————————————————————————
   Français (langue de référence)
   ———————————————————————————————————————————————————————————————— */
const fr={
  meta:{title:'CIRS-Conseil Inc. — Anticiper. Comprendre. Décider.',description:'CIRS-Conseil Inc., cabinet de conseil canado-québécois en stratégie et affaires publiques : veille stratégique et intelligence économique, analyse géopolitique, analyse des risques, communication stratégique et évaluation des politiques publiques.'},
  motto:'Anticiper. Comprendre. Décider.',
  mottoVerbs:[
    {w:'Anticiper.',k:'Veille',c:'Repérer les signaux avant qu’ils ne s’imposent.'},
    {w:'Comprendre.',k:'Analyse',c:'Relier les faits, les acteurs et les dynamiques.'},
    {w:'Décider.',k:'Orientation',c:'Traduire l’analyse en choix clairs.'}],
  ui:{skip:'Aller au contenu',home:'Accueil',logoLabel:'CIRS-Conseil Inc., accueil',contactCta:'Nous contacter',menuOpen:'Ouvrir le menu',menuClose:'Fermer le menu',navMain:'Navigation principale',navMobile:'Navigation mobile',lang:'Langue du site',
    nav:{about:'À propos',expertises:'Expertises',team:'Équipe',articles:'Articles',events:'Événements',contact:'Contact'}},
  locations:'Québec, Canada',remote:'travail à distance',
  privacy:'CIRS-Conseil Inc. respecte la réglementation en matière de protection des renseignements personnels relative à la Loi 25 au Québec et le RGPD en Europe.',
  footer:{tagline:'Cabinet de conseil canado-québécois en stratégie et affaires publiques.',contact:'Coordonnées',explore:'Explorer',privacy:'Confidentialité',top:'Haut de page ↑'},
  clist:{email:'Courriel',phone:'Téléphone',whatsapp:'WhatsApp',location:'Implantation'},
  form:{name:'Nom complet',email:'Courriel professionnel',company:'Organisation',phone:'Téléphone (facultatif)',need:'Votre besoin',message:'Vos enjeux : contexte, marchés concernés, échéances…',submit:'Envoyer la demande',
    note:'L’envoi ouvre votre messagerie avec un courriel prérempli adressé à',note2:'Aucune donnée n’est stockée sur ce site.',privacyLink:'Confidentialité',
    ok:'Votre messagerie devrait s’ouvrir. Sinon, écrivez-nous à',okOr:'ou appelez le',subject:'Demande CIRS-Conseil',extra:['Conférence ou intervention','Autre demande'],
    body:{name:'Nom',email:'Courriel',company:'Organisation',phone:'Téléphone',need:'Besoin'}},
  hero:{tag:'Cabinet de conseil en stratégie et affaires publiques',lead:'CIRS-Conseil Inc. est un cabinet de conseil canado-québécois en stratégie et affaires publiques. Une information fiable pour éclairer vos décisions.',cta:'Parlons de vos enjeux',cta2:'Nos expertises',proof:['Cabinet indépendant','Québec · interventions à distance','Loi 25 & RGPD']},
  horizons:{title:'Nos horizons',hq:'Siège · Québec, Canada',tabs:'Régions d’intervention',quebec:'Québec'},
  regions:[
    {name:'Amériques',countries:'Québec · Canada · États-Unis · Amérique latine',text:'Une perspective québécoise sur les dynamiques continentales et les marchés des Amériques.'},
    {name:'Europe',countries:'France · Union européenne',text:'Une lecture des environnements économiques, réglementaires et institutionnels européens.'},
    {name:'Afrique',countries:'Afrique francophone · Afrique subsaharienne',text:'L’analyse des enjeux locaux et des dynamiques régionales pour éclairer votre développement.'},
    {name:'Asie',countries:'Asie du Sud-Est · Vietnam',text:'Comprendre les transformations des marchés et des chaînes de valeur en Asie du Sud-Est.'}],
  marquee:'Une perspective québécoise, des horizons internationaux',
  about:{tag:'À propos',statement:'CIRS-Conseil Inc. est un cabinet de conseil, une firme canado-québécoise en stratégie et affaires publiques. Notre approche s’appuie sur une veille et une intelligence économique rigoureuses pour anticiper, comprendre et décider.',
    note:'CIRS-Conseil Inc. est indépendant du think tank Cercle international de réflexions stratégiques (CIRS).',services:'Services',cta:'Rencontrer notre PDG',imgAlt:'Globe aux continents dorés sur fond bleu nuit',floatTitle:'Cabinet indépendant',floatSub:'du think tank CIRS'},
  // Chiffres factuels uniquement (décomptes du contenu, aucune statistique inventée).
  figures:['domaines d’expertise','secteurs d’intervention','régions du monde','pays et zones d’expertise'],
  xpHead:{tag:'Nos domaines d’expertise',title:'Cinq domaines d’expertise,',tone:'une même exigence.',text:'Notre expertise s’inspire notamment d’une expérience développée dans le domaine de la réflexion stratégique internationale, parallèlement aux travaux menés au sein du Cercle international de réflexions stratégiques (CIRS), think tank indépendant à but non lucratif établi en France.',tabs:'Domaines d’expertise',cta:'Parler de ce besoin'},
  expertises:[
    {title:'Veille stratégique et intelligence économique',text:'Surveiller les marchés, les acteurs, les réglementations et les tendances pour repérer les signaux qui comptent pour vous.'},
    {title:'Analyse géopolitique, pays et marchés',text:'Lire les rapports de force, comprendre un pays, son économie et ses marchés avant de s’y engager.'},
    {title:'Analyse des risques et environnement stratégique',text:'Identifier les risques, les parties prenantes et les opportunités d’implantation dans votre environnement économique, réglementaire et concurrentiel.'},
    {title:'Communication stratégique et de crise',text:'Porter le bon message, au bon moment, auprès des bons publics, en temps normal comme en situation de crise.'},
    {title:'Évaluation des politiques publiques',text:'Mesurer la portée et les effets des décisions publiques pour éclairer les choix des organisations.'}],
  method:{tag:'Notre méthode',title:'Du bruit',tone:'à la décision.',text:'Une démarche structurée pour rendre l’environnement international lisible et vos choix mieux informés.',decide:'Décider',
    steps:[{title:'Observer',text:'Recueillir les informations pertinentes et repérer les signaux émergents.'},{title:'Analyser',text:'Relier les faits, comprendre les acteurs et mettre les évolutions en perspective.'},{title:'Anticiper',text:'Explorer les scénarios et identifier les risques comme les opportunités.'},{title:'Conseiller',text:'Traduire l’analyse en orientations adaptées à votre réalité.'}]},
  founder:{name:'Hassan Ahmat Djamaladine',role:'PDG de CIRS-Conseil Inc.',firm:'CIRS-Conseil Inc. est un cabinet de conseil canado-québécois en stratégie et affaires publiques.',certifications:['Intelligence économique','Évaluation des politiques publiques','Métiers du pouvoir'],
    alt:'Portrait de Hassan Ahmat Djamaladine, PDG de CIRS-Conseil Inc.',certIn:'Certifié en',trainedAt:'Formé à',schools:'ENAP · IEP de Fontainebleau',badge:'PDG · CIRS-Conseil Inc.'},
  quote:{text:'Il n’est pas de vent favorable pour celui qui ne sait où il va.',author:'Sénèque'},
  team:{tag:'Équipe',lead:'Certifié en intelligence économique, en évaluation des politiques publiques et en métiers du pouvoir, formé en administration publique entre l’IEP de Fontainebleau et l’ENAP.',cta:'Découvrir son parcours'},
  sectorsHead:{tag:'Secteurs d’intervention',title:'Vos réalités,',tone:'notre point de départ.',text:'Chaque secteur a ses dynamiques. Notre analyse en tient compte.'},
  sectors:[{title:'Technologies & innovation',text:'Expansion, réglementation, concurrence et accès aux marchés internationaux.'},{title:'Industrie manufacturière',text:'Chaînes d’approvisionnement, droits de douane et changements réglementaires.'},{title:'Ressources & minéraux critiques',text:'Marchés, approvisionnements et exposition aux risques géopolitiques.'},{title:'Énergie',text:'Évolution des marchés, sécurité énergétique et environnement réglementaire.'},{title:'Institutions & organisations',text:'Affaires publiques, politiques publiques et compréhension de l’environnement institutionnel.'}],
  articlesHead:{tag:'Articles & analyses',title:'Des perspectives',tone:'pour mieux comprendre.',all:'Tous les articles'},
  evtCard:{k:'Conférences & événements',t:'Conférences, webinaires, tables rondes et interventions.',go:'Inviter CIRS-Conseil'},
  card:{read:'Lire l’article',min:'min',all:'Toutes',filter:'Filtrer par rubrique'},
  faqHead:{tag:'Questions fréquentes',title:'Vos questions,',tone:'nos réponses.',text:'Une autre question ? Écrivez-nous, nous vous répondons personnellement.',cta:'Poser une question'},
  faq:[
    {q:'Qui accompagnez-vous ?',a:'Les organisations qui doivent comprendre leur environnement international pour décider : entreprises, institutions et organisations, notamment québécoises, dans les technologies, l’industrie, les ressources, l’énergie ou les services.'},
    {q:'Intervenez-vous en dehors du Québec ?',a:'Oui. Implantés au Québec, nous intervenons aussi à distance sur les Amériques, l’Europe, l’Afrique et l’Asie du Sud-Est.'},
    {q:'CIRS-Conseil est-il lié au think tank CIRS ?',a:'CIRS-Conseil Inc. est indépendant du think tank Cercle international de réflexions stratégiques (CIRS). Notre expertise s’inspire notamment de l’expérience développée parallèlement à ses travaux.'},
    {q:'Comment protégez-vous nos informations ?',a:'CIRS-Conseil Inc. respecte la réglementation en matière de protection des renseignements personnels relative à la Loi 25 au Québec et le RGPD en Europe. Ce site ne stocke aucune donnée : le formulaire ouvre simplement votre messagerie.'},
    {q:'Comment démarrer ?',a:'Écrivez-nous à firme@cirsorg.com, appelez le 418 558 48 64 ou décrivez votre besoin dans le formulaire de contact. Nous revenons vers vous pour en parler.'}],
  cta:{tag:'Contact',title:'Parlons de vos enjeux.',tone:'Chaque décision commence par une conversation.',write:'Écrire une demande'},
  teamPage:{meta:{title:'Équipe — CIRS-Conseil Inc.',description:'Hassan Ahmat Djamaladine, PDG de CIRS-Conseil Inc., cabinet de conseil canado-québécois en stratégie et affaires publiques.'},
    tag:'Parcours du PDG',intro:'Hassan Ahmat Djamaladine est certifié en intelligence économique, en évaluation des politiques publiques et en métiers du pouvoir.',
    p1:'Il est formé en administration publique entre l’Institut d’études politiques (IEP) de Fontainebleau (France) et l’École nationale d’administration publique (ENAP) au Québec (Canada), où il a suivi une maîtrise, concentration internationale.',
    p2:'Il dispose d’une large expérience en réflexion stratégique internationale au service des organisations, développée au sein du think tank Cercle international de réflexions stratégiques (CIRS), dont CIRS-Conseil Inc. est indépendant.',
    path:'Parcours',cta:'Échanger avec notre PDG',
    steps:[{t:'Formation en administration publique',d:'Institut d’études politiques (IEP) de Fontainebleau, France.'},{t:'Maîtrise, concentration internationale',d:'École nationale d’administration publique (ENAP), Québec, Canada.'},{t:'Réflexion stratégique internationale',d:'Une large expérience au service des organisations, développée au sein du think tank Cercle international de réflexions stratégiques (CIRS).'},{t:'PDG de CIRS-Conseil Inc.',d:'Cabinet de conseil canado-québécois en stratégie et affaires publiques, indépendant du think tank CIRS.'}]},
  contactPage:{meta:{title:'Contact — CIRS-Conseil Inc.',description:'Écrivez à CIRS-Conseil Inc. ou appelez-nous : stratégie et affaires publiques, Québec, Canada.'},
    tag:'Contact',title:'Parlons de',tone:'vos enjeux.',lead:'Veille, analyse géopolitique, analyse des risques, communication stratégique ou évaluation des politiques publiques : décrivez votre besoin, nous revenons vers vous.',
    cardTitle:'Une question, un projet ?',cardText:'Écrivez-nous ou appelez-nous directement. Le formulaire prépare un courriel dans votre messagerie.'},
  eventsPage:{meta:{title:'Conférences & événements — CIRS-Conseil Inc.',description:'Conférences, webinaires et tables rondes de CIRS-Conseil Inc.'},
    tag:'Événements',title:'Faire dialoguer',tone:'les idées et l’action.',lead:'Conférences, webinaires et tables rondes : faire dialoguer l’analyse et les réalités des organisations.',soon:'Programme annoncé prochainement',
    formats:[{t:'Conférences & interventions',d:'Un regard stratégique pour éclairer les enjeux internationaux de vos équipes et de vos publics.'},{t:'Webinaires',d:'Un format accessible pour comprendre les évolutions géopolitiques, économiques et institutionnelles.'},{t:'Tables rondes',d:'Croiser les perspectives et mettre les enjeux en discussion.'},{t:'Rencontres CIRS-Conseil',d:'Des rencontres consacrées aux mutations de l’environnement international.'}],
    inviteTag:'Invitation',inviteTitle:'Inviter CIRS-Conseil',inviteTone:'à intervenir.',inviteCta:'Proposer une intervention'},
  articlesPage:{meta:{title:'Articles — CIRS-Conseil Inc.',description:'Analyses stratégiques, notes de politiques publiques et veille internationale de CIRS-Conseil Inc.'},
    tag:'Articles & analyses',title:'Comprendre aujourd’hui,',tone:'éclairer demain.',lead:'Analyses, notes stratégiques et veille sur les dynamiques qui façonnent votre environnement.',note:'',
    emptyTitle:'Nos premiers articles sont à venir.',emptyText:'Retrouvez prochainement les analyses de CIRS-Conseil Inc. dans cet espace.'},
  article:{all:'Tous les articles',reading:'min de lecture',copy:'Copier le lien',copied:'Lien copié'},
  notFound:{tag:'Erreur 404',title:'Cette page',tone:'n’existe pas.',lead:'Elle a peut-être été déplacée. Retrouvez les expertises et les analyses de CIRS-Conseil depuis l’accueil.',cta:'Revenir à l’accueil'}
};
export type Dict=typeof fr;

/* ————————————————————————————————————————————————————————————————
   English
   ———————————————————————————————————————————————————————————————— */
const en:Dict={
  meta:{title:'CIRS-Conseil Inc. — Anticipate. Understand. Decide.',description:'CIRS-Conseil Inc., a Canadian consulting firm based in Québec specializing in strategy and public affairs: strategic intelligence, geopolitical analysis, risk analysis, strategic communication and public policy evaluation.'},
  motto:'Anticipate. Understand. Decide.',
  mottoVerbs:[
    {w:'Anticipate.',k:'Monitoring',c:'Spot the signals before they take hold.'},
    {w:'Understand.',k:'Analysis',c:'Connect facts, players and dynamics.'},
    {w:'Decide.',k:'Direction',c:'Turn analysis into clear choices.'}],
  ui:{skip:'Skip to content',home:'Home',logoLabel:'CIRS-Conseil Inc., home',contactCta:'Contact us',menuOpen:'Open menu',menuClose:'Close menu',navMain:'Main navigation',navMobile:'Mobile navigation',lang:'Site language',
    nav:{about:'About',expertises:'Expertise',team:'Team',articles:'Articles',events:'Events',contact:'Contact'}},
  locations:'Québec, Canada',remote:'remote work',
  privacy:'CIRS-Conseil Inc. complies with personal information protection regulations under Québec’s Law 25 and the GDPR in Europe.',
  footer:{tagline:'Canadian consulting firm based in Québec, specializing in strategy and public affairs.',contact:'Contact details',explore:'Explore',privacy:'Privacy',top:'Back to top ↑'},
  clist:{email:'Email',phone:'Phone',whatsapp:'WhatsApp',location:'Location'},
  form:{name:'Full name',email:'Business email',company:'Organization',phone:'Phone (optional)',need:'Your need',message:'Your challenges: context, markets involved, deadlines…',submit:'Send request',
    note:'Sending opens your email app with a pre-filled message addressed to',note2:'No data is stored on this site.',privacyLink:'Privacy',
    ok:'Your email app should open. If not, write to us at',okOr:'or call',subject:'CIRS-Conseil request',extra:['Conference or speaking engagement','Other request'],
    body:{name:'Name',email:'Email',company:'Organization',phone:'Phone',need:'Need'}},
  hero:{tag:'Strategy and public affairs consulting firm',lead:'CIRS-Conseil Inc. is a Canadian consulting firm based in Québec, specializing in strategy and public affairs. Reliable information to guide your decisions.',cta:'Let’s discuss your challenges',cta2:'Our expertise',proof:['Independent firm','Québec · remote engagements','Law 25 & GDPR']},
  horizons:{title:'Our horizons',hq:'Head office · Québec, Canada',tabs:'Regions we cover',quebec:'Québec'},
  regions:[
    {name:'Americas',countries:'Québec · Canada · United States · Latin America',text:'A Québec perspective on continental dynamics and the markets of the Americas.'},
    {name:'Europe',countries:'France · European Union',text:'A reading of European economic, regulatory and institutional environments.'},
    {name:'Africa',countries:'French-speaking Africa · Sub-Saharan Africa',text:'Analysis of local issues and regional dynamics to inform your development.'},
    {name:'Asia',countries:'Southeast Asia · Vietnam',text:'Understanding how markets and value chains are changing in Southeast Asia.'}],
  marquee:'A Québec perspective, international horizons',
  about:{tag:'About',statement:'CIRS-Conseil Inc. is a Canadian consulting firm based in Québec, specializing in strategy and public affairs. Our approach relies on rigorous monitoring and economic intelligence to anticipate, understand and decide.',
    note:'CIRS-Conseil Inc. is independent of the CIRS think tank (Cercle international de réflexions stratégiques).',services:'Services',cta:'Meet our CEO',imgAlt:'Globe with golden continents on a midnight-blue background',floatTitle:'Independent firm',floatSub:'from the CIRS think tank'},
  figures:['areas of expertise','sectors served','world regions','countries and areas of expertise'],
  xpHead:{tag:'Our areas of expertise',title:'Five areas of expertise,',tone:'one standard of rigor.',text:'Our expertise draws in particular on experience in international strategic thinking, developed alongside the work of the Cercle international de réflexions stratégiques (CIRS), an independent non-profit think tank based in France.',tabs:'Areas of expertise',cta:'Discuss this need'},
  expertises:[
    {title:'Strategic monitoring and economic intelligence',text:'Track markets, players, regulations and trends to spot the signals that matter to you.'},
    {title:'Geopolitical, country and market analysis',text:'Read power dynamics and understand a country, its economy and its markets before committing.'},
    {title:'Risk analysis and strategic environment',text:'Identify risks, stakeholders and opportunities for expansion within your economic, regulatory and competitive environment.'},
    {title:'Strategic and crisis communication',text:'Deliver the right message, at the right time, to the right audiences, in normal times and in a crisis.'},
    {title:'Public policy evaluation',text:'Measure the scope and effects of public decisions to inform organizations’ choices.'}],
  method:{tag:'Our method',title:'From noise',tone:'to decision.',text:'A structured approach that makes the international environment readable and your choices better informed.',decide:'Decide',
    steps:[{title:'Observe',text:'Gather relevant information and spot emerging signals.'},{title:'Analyze',text:'Connect the facts, understand the players and put developments into perspective.'},{title:'Anticipate',text:'Explore scenarios and identify risks as well as opportunities.'},{title:'Advise',text:'Turn analysis into recommendations suited to your reality.'}]},
  founder:{name:'Hassan Ahmat Djamaladine',role:'CEO of CIRS-Conseil Inc.',firm:'CIRS-Conseil Inc. is a Canadian consulting firm based in Québec, specializing in strategy and public affairs.',certifications:['Economic intelligence','Public policy evaluation','Careers in public power'],
    alt:'Portrait of Hassan Ahmat Djamaladine, CEO of CIRS-Conseil Inc.',certIn:'Certified in',trainedAt:'Trained at',schools:'ENAP · IEP de Fontainebleau',badge:'CEO · CIRS-Conseil Inc.'},
  quote:{text:'If one does not know to which port one is sailing, no wind is favorable.',author:'Seneca'},
  team:{tag:'Team',lead:'Certified in economic intelligence, public policy evaluation and careers in public power, trained in public administration at the IEP de Fontainebleau and ENAP.',cta:'Discover his background'},
  sectorsHead:{tag:'Sectors',title:'Your realities,',tone:'our starting point.',text:'Every sector has its own dynamics. Our analysis takes them into account.'},
  sectors:[{title:'Technology & innovation',text:'Expansion, regulation, competition and access to international markets.'},{title:'Manufacturing',text:'Supply chains, tariffs and regulatory change.'},{title:'Resources & critical minerals',text:'Markets, supply and exposure to geopolitical risk.'},{title:'Energy',text:'Market trends, energy security and the regulatory environment.'},{title:'Institutions & organizations',text:'Public affairs, public policy and understanding the institutional environment.'}],
  articlesHead:{tag:'Articles & analysis',title:'Perspectives',tone:'for deeper understanding.',all:'All articles'},
  evtCard:{k:'Conferences & events',t:'Conferences, webinars, round tables and speaking engagements.',go:'Invite CIRS-Conseil'},
  card:{read:'Read the article',min:'min',all:'All',filter:'Filter by category'},
  faqHead:{tag:'Frequently asked questions',title:'Your questions,',tone:'our answers.',text:'Another question? Write to us and we will answer you personally.',cta:'Ask a question'},
  faq:[
    {q:'Who do you work with?',a:'Organizations that need to understand their international environment in order to decide: businesses, institutions and organizations, particularly from Québec, in technology, industry, resources, energy or services.'},
    {q:'Do you work outside Québec?',a:'Yes. Based in Québec, we also work remotely across the Americas, Europe, Africa and Southeast Asia.'},
    {q:'Is CIRS-Conseil linked to the CIRS think tank?',a:'CIRS-Conseil Inc. is independent of the Cercle international de réflexions stratégiques (CIRS) think tank. Our expertise draws in particular on experience developed alongside its work.'},
    {q:'How do you protect our information?',a:'CIRS-Conseil Inc. complies with personal information protection regulations under Québec’s Law 25 and the GDPR in Europe. This site stores no data: the form simply opens your email app.'},
    {q:'How do we get started?',a:'Write to us at firme@cirsorg.com, call 418 558 48 64 or describe your need in the contact form. We will get back to you to discuss it.'}],
  cta:{tag:'Contact',title:'Let’s discuss your challenges.',tone:'Every decision starts with a conversation.',write:'Send a request'},
  teamPage:{meta:{title:'Team — CIRS-Conseil Inc.',description:'Hassan Ahmat Djamaladine, CEO of CIRS-Conseil Inc., a Canadian strategy and public affairs consulting firm based in Québec.'},
    tag:'The CEO’s background',intro:'Hassan Ahmat Djamaladine is certified in economic intelligence, public policy evaluation and careers in public power.',
    p1:'He trained in public administration at the Institut d’études politiques (IEP) de Fontainebleau (France) and the École nationale d’administration publique (ENAP) in Québec (Canada), where he pursued a master’s degree with an international concentration.',
    p2:'He has extensive experience in international strategic thinking in the service of organizations, developed within the Cercle international de réflexions stratégiques (CIRS) think tank, of which CIRS-Conseil Inc. is independent.',
    path:'Background',cta:'Talk with our CEO',
    steps:[{t:'Training in public administration',d:'Institut d’études politiques (IEP) de Fontainebleau, France.'},{t:'Master’s degree, international concentration',d:'École nationale d’administration publique (ENAP), Québec, Canada.'},{t:'International strategic thinking',d:'Extensive experience in the service of organizations, developed within the Cercle international de réflexions stratégiques (CIRS) think tank.'},{t:'CEO of CIRS-Conseil Inc.',d:'Canadian strategy and public affairs consulting firm based in Québec, independent of the CIRS think tank.'}]},
  contactPage:{meta:{title:'Contact — CIRS-Conseil Inc.',description:'Write to or call CIRS-Conseil Inc.: strategy and public affairs, Québec, Canada.'},
    tag:'Contact',title:'Let’s discuss',tone:'your challenges.',lead:'Monitoring, geopolitical analysis, risk analysis, strategic communication or public policy evaluation: describe your need and we will get back to you.',
    cardTitle:'A question, a project?',cardText:'Write to us or call us directly. The form prepares an email in your email app.'},
  eventsPage:{meta:{title:'Conferences & events — CIRS-Conseil Inc.',description:'Conferences, webinars and round tables by CIRS-Conseil Inc.'},
    tag:'Events',title:'Bringing ideas',tone:'and action together.',lead:'Conferences, webinars and round tables: bringing analysis and the realities of organizations into dialogue.',soon:'Programme coming soon',
    formats:[{t:'Conferences & talks',d:'A strategic perspective to shed light on the international issues facing your teams and audiences.'},{t:'Webinars',d:'An accessible format to understand geopolitical, economic and institutional developments.'},{t:'Round tables',d:'Bringing perspectives together and opening issues up for discussion.'},{t:'CIRS-Conseil meetings',d:'Meetings devoted to changes in the international environment.'}],
    inviteTag:'Invitation',inviteTitle:'Invite CIRS-Conseil',inviteTone:'to speak.',inviteCta:'Propose an engagement'},
  articlesPage:{meta:{title:'Articles — CIRS-Conseil Inc.',description:'Strategic analysis, public policy notes and international monitoring by CIRS-Conseil Inc.'},
    tag:'Articles & analysis',title:'Understanding today,',tone:'shedding light on tomorrow.',lead:'Analysis, strategic notes and monitoring of the dynamics shaping your environment.',note:'Our articles are published in French.',
    emptyTitle:'Our first articles are coming soon.',emptyText:'CIRS-Conseil Inc.’s analyses will soon be available here.'},
  article:{all:'All articles',reading:'min read',copy:'Copy link',copied:'Link copied'},
  notFound:{tag:'Error 404',title:'This page',tone:'does not exist.',lead:'It may have been moved. Find CIRS-Conseil’s expertise and analysis from the home page.',cta:'Back to home'}
};

/* ————————————————————————————————————————————————————————————————
   العربية (من اليمين إلى اليسار)
   ———————————————————————————————————————————————————————————————— */
const ar:Dict={
  meta:{title:'CIRS-Conseil Inc. — استشراف. فهم. قرار.',description:'CIRS-Conseil Inc.، مكتب استشارات كندي مقرّه كيبيك، متخصّص في الاستراتيجية والشؤون العامة: اليقظة الاستراتيجية والذكاء الاقتصادي، والتحليل الجيوسياسي، وتحليل المخاطر، والتواصل الاستراتيجي، وتقييم السياسات العامة.'},
  motto:'استشراف. فهم. قرار.',
  mottoVerbs:[
    {w:'استشراف.',k:'اليقظة',c:'رصد الإشارات قبل أن تفرض نفسها.'},
    {w:'فهم.',k:'التحليل',c:'الربط بين الوقائع والفاعلين والديناميكيات.'},
    {w:'قرار.',k:'التوجيه',c:'تحويل التحليل إلى خيارات واضحة.'}],
  ui:{skip:'الانتقال إلى المحتوى',home:'الرئيسية',logoLabel:'CIRS-Conseil Inc.، الصفحة الرئيسية',contactCta:'تواصلوا معنا',menuOpen:'فتح القائمة',menuClose:'إغلاق القائمة',navMain:'التنقل الرئيسي',navMobile:'التنقل على الهاتف',lang:'لغة الموقع',
    nav:{about:'من نحن',expertises:'مجالات الخبرة',team:'الفريق',articles:'المقالات',events:'الفعاليات',contact:'اتصل بنا'}},
  locations:'كيبيك، كندا',remote:'العمل عن بُعد',
  privacy:'تلتزم CIRS-Conseil Inc. باللوائح المتعلقة بحماية المعلومات الشخصية بموجب القانون 25 في كيبيك واللائحة العامة لحماية البيانات (RGPD) في أوروبا.',
  footer:{tagline:'مكتب استشارات كندي مقرّه كيبيك، متخصّص في الاستراتيجية والشؤون العامة.',contact:'بيانات الاتصال',explore:'تصفّح',privacy:'الخصوصية',top:'العودة إلى الأعلى ↑'},
  clist:{email:'البريد الإلكتروني',phone:'الهاتف',whatsapp:'واتساب',location:'المقرّ'},
  form:{name:'الاسم الكامل',email:'البريد الإلكتروني المهني',company:'المؤسسة',phone:'الهاتف (اختياري)',need:'احتياجكم',message:'رهاناتكم: السياق، الأسواق المعنية، الآجال…',submit:'إرسال الطلب',
    note:'يؤدي الإرسال إلى فتح بريدكم الإلكتروني برسالة معدّة مسبقًا موجّهة إلى',note2:'لا يخزّن هذا الموقع أي بيانات.',privacyLink:'الخصوصية',
    ok:'من المفترض أن يُفتح بريدكم الإلكتروني. وإلا، راسلونا على',okOr:'أو اتصلوا على',subject:'طلب CIRS-Conseil',extra:['مؤتمر أو مداخلة','طلب آخر'],
    body:{name:'الاسم',email:'البريد الإلكتروني',company:'المؤسسة',phone:'الهاتف',need:'الاحتياج'}},
  hero:{tag:'مكتب استشارات في الاستراتيجية والشؤون العامة',lead:'CIRS-Conseil Inc. مكتب استشارات كندي مقرّه كيبيك، متخصّص في الاستراتيجية والشؤون العامة. معلومات موثوقة تُنير قراراتكم.',cta:'لنتحدّث عن رهاناتكم',cta2:'مجالات خبرتنا',proof:['مكتب مستقل','كيبيك · تدخّلات عن بُعد','القانون 25 و RGPD']},
  horizons:{title:'آفاقنا',hq:'المقرّ · كيبيك، كندا',tabs:'مناطق التدخّل',quebec:'كيبيك'},
  regions:[
    {name:'الأمريكتان',countries:'كيبيك · كندا · الولايات المتحدة · أمريكا اللاتينية',text:'منظور كيبيكي للديناميكيات القارية ولأسواق الأمريكتين.'},
    {name:'أوروبا',countries:'فرنسا · الاتحاد الأوروبي',text:'قراءة للبيئات الاقتصادية والتنظيمية والمؤسسية الأوروبية.'},
    {name:'أفريقيا',countries:'أفريقيا الناطقة بالفرنسية · أفريقيا جنوب الصحراء',text:'تحليل الرهانات المحلية والديناميكيات الإقليمية لإنارة مسار تطوّركم.'},
    {name:'آسيا',countries:'جنوب شرق آسيا · فيتنام',text:'فهم تحوّلات الأسواق وسلاسل القيمة في جنوب شرق آسيا.'}],
  marquee:'منظور كيبيكي وآفاق دولية',
  about:{tag:'من نحن',statement:'CIRS-Conseil Inc. مكتب استشارات كندي مقرّه كيبيك، متخصّص في الاستراتيجية والشؤون العامة. يرتكز نهجنا على يقظة استراتيجية وذكاء اقتصادي صارمين من أجل الاستشراف والفهم واتخاذ القرار.',
    note:'CIRS-Conseil Inc. مستقل عن مركز التفكير «الدائرة الدولية للتفكير الاستراتيجي» (CIRS).',services:'الخدمات',cta:'تعرّفوا على رئيسنا التنفيذي',imgAlt:'كرة أرضية بقارات ذهبية على خلفية زرقاء داكنة',floatTitle:'مكتب مستقل',floatSub:'عن مركز التفكير CIRS'},
  figures:['مجالات خبرة','قطاعات تدخّل','مناطق في العالم','بلدان ومناطق خبرة'],
  xpHead:{tag:'مجالات خبرتنا',title:'خمسة مجالات خبرة،',tone:'ومعيار واحد من الدقة.',text:'تستلهم خبرتنا بشكل خاص من تجربة في مجال التفكير الاستراتيجي الدولي، تطوّرت بالتوازي مع الأعمال المنجزة في إطار «الدائرة الدولية للتفكير الاستراتيجي» (CIRS)، وهو مركز تفكير مستقل غير ربحي مقرّه فرنسا.',tabs:'مجالات الخبرة',cta:'لنتحدّث عن هذا الاحتياج'},
  expertises:[
    {title:'اليقظة الاستراتيجية والذكاء الاقتصادي',text:'رصد الأسواق والفاعلين والتشريعات والاتجاهات لالتقاط الإشارات المهمّة بالنسبة إليكم.'},
    {title:'التحليل الجيوسياسي وتحليل البلدان والأسواق',text:'قراءة موازين القوى وفهم بلد ما واقتصاده وأسواقه قبل الالتزام فيه.'},
    {title:'تحليل المخاطر والبيئة الاستراتيجية',text:'تحديد المخاطر والأطراف المعنية وفرص التموقع في بيئتكم الاقتصادية والتنظيمية والتنافسية.'},
    {title:'التواصل الاستراتيجي وتواصل الأزمات',text:'إيصال الرسالة المناسبة، في الوقت المناسب، إلى الجمهور المناسب، في الأوقات العادية كما في الأزمات.'},
    {title:'تقييم السياسات العامة',text:'قياس نطاق القرارات العامة وآثارها لإنارة خيارات المؤسسات.'}],
  method:{tag:'منهجيتنا',title:'من الضجيج',tone:'إلى القرار.',text:'مقاربة منظّمة تجعل البيئة الدولية مقروءة وخياراتكم أكثر استنارة.',decide:'القرار',
    steps:[{title:'الرصد',text:'جمع المعلومات ذات الصلة والتقاط الإشارات الناشئة.'},{title:'التحليل',text:'الربط بين الوقائع وفهم الفاعلين ووضع التطوّرات في سياقها.'},{title:'الاستشراف',text:'استكشاف السيناريوهات وتحديد المخاطر والفرص.'},{title:'الاستشارة',text:'تحويل التحليل إلى توجّهات ملائمة لواقعكم.'}]},
  founder:{name:'حسن أحمد جمال الدين',role:'الرئيس التنفيذي لـ CIRS-Conseil Inc.',firm:'CIRS-Conseil Inc. مكتب استشارات كندي مقرّه كيبيك، متخصّص في الاستراتيجية والشؤون العامة.',certifications:['الذكاء الاقتصادي','تقييم السياسات العامة','مهن السلطة'],
    alt:'صورة حسن أحمد جمال الدين، الرئيس التنفيذي لـ CIRS-Conseil Inc.',certIn:'حاصل على شهادة في',trainedAt:'تكوّن في',schools:'ENAP · IEP Fontainebleau',badge:'الرئيس التنفيذي · CIRS-Conseil Inc.'},
  quote:{text:'لا توجد ريح مواتية لمن لا يعرف إلى أين يتّجه.',author:'سينيكا'},
  team:{tag:'الفريق',lead:'حاصل على شهادات في الذكاء الاقتصادي وتقييم السياسات العامة ومهن السلطة، وتكوّن في الإدارة العامة بين معهد الدراسات السياسية بفونتينبلو والمدرسة الوطنية للإدارة العامة (ENAP).',cta:'اكتشفوا مساره'},
  sectorsHead:{tag:'قطاعات التدخّل',title:'واقعكم',tone:'هو نقطة انطلاقنا.',text:'لكل قطاع ديناميكياته الخاصة، وتحليلنا يأخذها في الحسبان.'},
  sectors:[{title:'التكنولوجيا والابتكار',text:'التوسّع والتنظيم والمنافسة والنفاذ إلى الأسواق الدولية.'},{title:'الصناعة التحويلية',text:'سلاسل الإمداد والرسوم الجمركية والتغيّرات التنظيمية.'},{title:'الموارد والمعادن الحرجة',text:'الأسواق والإمدادات والتعرّض للمخاطر الجيوسياسية.'},{title:'الطاقة',text:'تطوّر الأسواق وأمن الطاقة والبيئة التنظيمية.'},{title:'المؤسسات والمنظمات',text:'الشؤون العامة والسياسات العامة وفهم البيئة المؤسسية.'}],
  articlesHead:{tag:'مقالات وتحليلات',title:'رؤى',tone:'لفهم أعمق.',all:'جميع المقالات'},
  evtCard:{k:'مؤتمرات وفعاليات',t:'مؤتمرات وندوات عبر الإنترنت وموائد مستديرة ومداخلات.',go:'دعوة CIRS-Conseil'},
  card:{read:'قراءة المقال',min:'دقائق',all:'الكل',filter:'التصفية حسب الباب'},
  faqHead:{tag:'أسئلة شائعة',title:'أسئلتكم،',tone:'وأجوبتنا.',text:'لديكم سؤال آخر؟ راسلونا وسنجيبكم شخصيًا.',cta:'طرح سؤال'},
  faq:[
    {q:'مَن ترافقون؟',a:'المؤسسات التي تحتاج إلى فهم بيئتها الدولية لاتخاذ قراراتها: الشركات والمؤسسات والمنظمات، ولا سيما الكيبيكية منها، في مجالات التكنولوجيا والصناعة والموارد والطاقة والخدمات.'},
    {q:'هل تعملون خارج كيبيك؟',a:'نعم. مقرّنا في كيبيك، ونتدخّل أيضًا عن بُعد في الأمريكتين وأوروبا وأفريقيا وجنوب شرق آسيا.'},
    {q:'هل ترتبط CIRS-Conseil بمركز التفكير CIRS؟',a:'CIRS-Conseil Inc. مستقل عن مركز التفكير «الدائرة الدولية للتفكير الاستراتيجي» (CIRS). وتستلهم خبرتنا بشكل خاص من التجربة التي تطوّرت بالتوازي مع أعماله.'},
    {q:'كيف تحمون معلوماتنا؟',a:'تلتزم CIRS-Conseil Inc. باللوائح المتعلقة بحماية المعلومات الشخصية بموجب القانون 25 في كيبيك واللائحة العامة لحماية البيانات في أوروبا. لا يخزّن هذا الموقع أي بيانات: فالاستمارة تفتح بريدكم الإلكتروني فقط.'},
    {q:'كيف نبدأ؟',a:'راسلونا على firme@cirsorg.com، أو اتصلوا على 418 558 48 64، أو صِفوا احتياجكم في استمارة الاتصال. وسنعود إليكم للتحدّث في الأمر.'}],
  cta:{tag:'اتصل بنا',title:'لنتحدّث عن رهاناتكم.',tone:'كل قرار يبدأ بحوار.',write:'إرسال طلب'},
  teamPage:{meta:{title:'الفريق — CIRS-Conseil Inc.',description:'حسن أحمد جمال الدين، الرئيس التنفيذي لـ CIRS-Conseil Inc.، مكتب استشارات كندي في الاستراتيجية والشؤون العامة مقرّه كيبيك.'},
    tag:'مسار الرئيس التنفيذي',intro:'حسن أحمد جمال الدين حاصل على شهادات في الذكاء الاقتصادي وتقييم السياسات العامة ومهن السلطة.',
    p1:'تكوّن في الإدارة العامة بين معهد الدراسات السياسية (IEP) بفونتينبلو (فرنسا) والمدرسة الوطنية للإدارة العامة (ENAP) في كيبيك (كندا)، حيث تابع ماجستيرًا بتخصّص دولي.',
    p2:'يتمتّع بخبرة واسعة في التفكير الاستراتيجي الدولي في خدمة المؤسسات، اكتسبها في إطار مركز التفكير «الدائرة الدولية للتفكير الاستراتيجي» (CIRS)، الذي تُعدّ CIRS-Conseil Inc. مستقلة عنه.',
    path:'المسار',cta:'تحدّثوا مع رئيسنا التنفيذي',
    steps:[{t:'تكوين في الإدارة العامة',d:'معهد الدراسات السياسية (IEP) بفونتينبلو، فرنسا.'},{t:'ماجستير بتخصّص دولي',d:'المدرسة الوطنية للإدارة العامة (ENAP)، كيبيك، كندا.'},{t:'التفكير الاستراتيجي الدولي',d:'خبرة واسعة في خدمة المؤسسات، اكتُسبت في إطار مركز التفكير «الدائرة الدولية للتفكير الاستراتيجي» (CIRS).'},{t:'الرئيس التنفيذي لـ CIRS-Conseil Inc.',d:'مكتب استشارات كندي في الاستراتيجية والشؤون العامة مقرّه كيبيك، مستقل عن مركز التفكير CIRS.'}]},
  contactPage:{meta:{title:'اتصل بنا — CIRS-Conseil Inc.',description:'راسلوا CIRS-Conseil Inc. أو اتصلوا بنا: الاستراتيجية والشؤون العامة، كيبيك، كندا.'},
    tag:'اتصل بنا',title:'لنتحدّث',tone:'عن رهاناتكم.',lead:'اليقظة، التحليل الجيوسياسي، تحليل المخاطر، التواصل الاستراتيجي أو تقييم السياسات العامة: صِفوا احتياجكم وسنعود إليكم.',
    cardTitle:'سؤال أو مشروع؟',cardText:'راسلونا أو اتصلوا بنا مباشرة. تُعدّ الاستمارة رسالة في بريدكم الإلكتروني.'},
  eventsPage:{meta:{title:'مؤتمرات وفعاليات — CIRS-Conseil Inc.',description:'مؤتمرات وندوات عبر الإنترنت وموائد مستديرة تنظّمها CIRS-Conseil Inc.'},
    tag:'الفعاليات',title:'حوار بين',tone:'الأفكار والعمل.',lead:'مؤتمرات وندوات عبر الإنترنت وموائد مستديرة: حوار بين التحليل وواقع المؤسسات.',soon:'سيُعلن عن البرنامج قريبًا',
    formats:[{t:'مؤتمرات ومداخلات',d:'نظرة استراتيجية تُنير الرهانات الدولية لفرقكم وجماهيركم.'},{t:'ندوات عبر الإنترنت',d:'صيغة ميسّرة لفهم التطوّرات الجيوسياسية والاقتصادية والمؤسسية.'},{t:'موائد مستديرة',d:'تلاقي وجهات النظر وطرح الرهانات للنقاش.'},{t:'لقاءات CIRS-Conseil',d:'لقاءات مخصّصة لتحوّلات البيئة الدولية.'}],
    inviteTag:'دعوة',inviteTitle:'ادعوا CIRS-Conseil',inviteTone:'للمشاركة.',inviteCta:'اقتراح مداخلة'},
  articlesPage:{meta:{title:'المقالات — CIRS-Conseil Inc.',description:'تحليلات استراتيجية ومذكّرات في السياسات العامة ويقظة دولية من CIRS-Conseil Inc.'},
    tag:'مقالات وتحليلات',title:'فهم اليوم،',tone:'لإنارة الغد.',lead:'تحليلات ومذكّرات استراتيجية ويقظة حول الديناميكيات التي تشكّل بيئتكم.',note:'تُنشر مقالاتنا باللغة الفرنسية.',
    emptyTitle:'مقالاتنا الأولى قريبًا.',emptyText:'ستجدون قريبًا تحليلات CIRS-Conseil Inc. في هذه المساحة.'},
  article:{all:'جميع المقالات',reading:'دقائق قراءة',copy:'نسخ الرابط',copied:'تم نسخ الرابط'},
  notFound:{tag:'خطأ 404',title:'هذه الصفحة',tone:'غير موجودة.',lead:'ربما نُقلت. اكتشفوا مجالات خبرة CIRS-Conseil وتحليلاتها من الصفحة الرئيسية.',cta:'العودة إلى الرئيسية'}
};

/** Isole les noms latins dans le texte arabe (sinon le point final de « Inc. » passe du mauvais côté). */
function isolateLatin<T>(v:T):T{
  if(typeof v==='string')return v.replace(/CIRS-Conseil(?:[\u00a0 ]Inc\.)?|firme@cirsorg\.com|418 558 48 64|RGPD|ENAP|IEP/g,m=>'\u2066'+m+'\u2069') as T;
  if(Array.isArray(v))return v.map(isolateLatin) as T;
  if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,isolateLatin(x)])) as T;
  return v;
}
export const dicts:Record<Lang,Dict>={fr,en,ar:{...isolateLatin(ar),meta:ar.meta}};
export const getDict=(lang:Lang)=>dicts[lang];

/* Décomptes factuels affichés en chiffres clés. */
export const figureValues=[
  {value:fr.expertises.length,pad:true},
  {value:fr.sectors.length,pad:true},
  {value:fr.regions.length,pad:true},
  {value:10,pad:false}
];
