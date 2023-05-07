---
title: "Amarcord - Old posts from 2011 (ITA/ENG)"
date: 2011-02-07T10:37:06+09:00
draft: false
tags: [""]
description: ""
---
### >> Non ci penso un attimo: faccio benzina in Svizzera.
> Infatti, la carta regionale dei servizi è ormai un documento che hanno tutti, ma non tutti hanno il pin, cioè il codice per attivarla e c’è chi non s’è accorto che è scaduta e ne deve chiedere una nuova. Dove: alla Asl, ai Comuni abilitati o a Spazio Regione, lo sportello dei cittadini presso il Pirellino, in via Benzi – Viale Varese a Como. Oppure, può collegarsi al sito Internet della Regione Lombardia dedicato alla carta dei servizi, www.crs.lombardia.it e farne richiesta.

via laprovinciadicomo.it

Novitá sul fronte comasco per quanto riguarda la benzina. Si userá la carta regionale dei servizi. Esatto, quella per cui NESSUNO ha il pin, perché é chiaramente una rottura di coglioni la procedura per farselo rilasciare e perché alla ASL non lo chiedono mai (avendo un chip, lo passano nel lettore e sei a posto).
In Francia abbiamo una card (la Carte Vitale) per l’assistenza sanitaria. Ha anch’esso un pin che si puó richiedere via Web, dal sito, e ti arriva per posta in 2 giorni. Se lo dimentichi la procedura é la stessa.
Chiaramente, in Italia non é cosí.
Vai sul sito della crs (carta regionale dei servizi) e leggi:

“Se sei già in possesso della tua CRS, richiedi il PIN alle ASL, uffici Scelta e Revoca (scarica l’elenco degli sportelli allegato in fondo alla pagina), o alle sedi spazioRegione della tua provincia: basta portare con te la CRS, un documento d’identità valido e ti verrà rilasciato immediatamente.”
- quindi in pratica devi andare TU DI PERSONA a fartelo fare, in uno degli uffici appositi. E giá sta cosa é inconcepibile, per 4 numeri devo perdere una mattinata.
La cosa peggiore peró é:
“Se sei già in possesso del PIN di una carta in scadenza,
appena ricevuta quella nuova, potrai ottenere il relativo PIN
direttamente via web attraverso il servizio: ”
- quindi puoi avere il pin anche via Web. MA:
“Con il PIN della carta in scadenza, la procedura è semplice e rapida: inserisci la vecchia carta nel lettore di smart card e collegalo al tuo PC, clicca qui, digita il vecchio PIN e immediatamente potrai ottenere il nuovo.”
- lettore smart card. DEVI COMPRARE UN LETTORE SMART CARD, DI TASCA TUA, scaricare il loro software (che chiaramente non funzionerá) ..

.. tutto questo per avere un pin dimmerda?!?!?!

### >>> No title
Sono stato a Como in giornata ieri, purtroppo per un triste ed inaspettato avvenimento toccato ad un carissimo amico.

Sono stato a casa e ho chiacchierato con amici e questa volta è stato strano. Di solito sono giorni in cui tutto succede sullo sfondo di un colore caldo e accogliente, ritrovi un’energia propulsiva che ti spinge ad andare avanti. Questa volta è stato così diverso … è quasi un anno che sono qui, e sono molto cambiato, come persona. E’ come se avessi superato un ostacolo che prima mi pareva così impossibile da superare, e ora mi pare cosi piccolo, lontano e soprattutto insignificante. Sono rientrato inaspettatamente a casa, con la batteria ancora carica, pieno di nuove notizie, idee e nuovi obiettivi che voglio raggiungere … e e non mi sono più trovato nel mio vecchio mondo, l’ho trovato così fermo, immobile, stagnante. Le stesse cose, le stesse persone che fanno sempre le stesse cose, i soliti lamenti sulle stesse situazioni che non cambiano.

Io sono cambiato e mi sento così in corsa, ho una voglia di fare e girare che non avevo mai avuto prima. Soprattutto ho il coraggio di farle. E così strano tornare nel mio vecchio mondo immobile, ora. Faccio fatica a fermarmi ora. Quasi non mi sento più a casa.

### >>> How I got hired by Amazon.com – Simone Brunozzi
My name is Simone Brunozzi, a 30 year old guy from Italy.
What’s interesting about me? Well, I’m a brand new Technology Evangelist for Amazon Web Services in Europe!

I’m going to tell you how I landed the job of my dreams, and I suggest that you pay attention because it’s a story you don’t hear every day.

via brunozzi.com
You couldn’t find another more inspiring story than this one ..

### >>> Using MacPorts To Install Ruby 1.9.x
0)  Remove Previous Ruby Ports (i.e. ruby, ruby19, rb-*, and so on) and
Gems

    a) Ports

       sudo port uninstall <port-name>
       sudo port clean <port-name>

       Note:  Execute the above for all ruby related ports.

    b) Gems

       rm -rf /opt/local/lib/ruby
       rm -rf /opt/local/lib/ruby19

       Note:  You may not need to execute both commands and this really
depends on what you have installed and how.

1)  Remove Rake ( Optional If It Does Not Exist )

     sudo rm -rf /opt/local/bin/rake

2)  Install Ruby 1.9.1, SQLite3, and Mysql 5 Ports

     sudo port install ruby19 +nosuffix
     sudo port mysql5 +server
     sudo port sqlite3

     Note:  The above ruby19 install generates the required executables
without the extension.

3)  Install Rack, Rake, and Rails 2.3.0 Ruby Gems

     sudo gem install rack
     sudo gem install rake
     sudo gem install rails --source=http://gems.rubyonrails.org

4)  Install SQLite 3 Ruby Gem

     sudo gem install sqlite3-ruby

5)  Install MySQL 2.8.1 Ruby Gem

     sudo gem install kwatch-mysql-ruby --
--with-mysql-config=/opt/local/lib/mysql5/bin/mysql_config

6)  Install Thin

     sudo gem install thin

7)  Generate Rails Test Application

     rails test

 8)  Change To The Root Of Rails Application

     cd test

9)  Start Thin

     script/server thin

     Note:  The above command produces the above warning message:

               warning: encoding option is ignored - N

10) Navigate To The Site Using Your Browser:

      URL:  http://localhost:3000

      Result:  You should see the "Rails Welcome aboard" page.

11) Now, Let Us Generate A Simple Blog

      script/generate scaffold blog title:string text:text

      Note:  The above command produces the above warning message:

                warning: encoding option is ignored - N

12) Migrate The Database

      rake db:migrate

13) Navigate To The Site Using Your Browser:

     URL:  http://localhost:3000/blogs

     and interact with the Rails application to verify that things are
working.

14) If you made it this far,

     you are running Rails 2.3.0 RC1 and Ruby 1.9.1.

 

 

via ruby-forum.com
Actually when you launch the command to install ruby19 it will install the latest version of Ruby linked to the MacPort repository (today the 1.9.2).

### >>> (Semi) Semi Marathon International de Nice
It’s been a long time since I’ve run seriously. Last year I had an ambitious target for which I spent months in self training and preparation: 20 km in <= 2h10. And I got it successfully (in exactly 2h10). The problem was that I didn’t have already scheduled the next target, so a bit of laziness and the winter weather (very cold this year in Cote d’Azur) didn’t help :P

I started again with some training almost 2 months ago, as soon as the sun came back smiling to us. It’s been not easy at all and I’m  still totally out of training, or at least still far far away from my last year condition, but I have a target. And this target is tomorrow morning:

10Km - Semi Marathon International de Nice 2011.

### >>> QoS (not in Italy)
La Poste, il servizio postale francese, non permette di utilizzare alcuni loro prodotti per spedizioni ultra-veloci, e super-tracciabili, verso l’Italia. La bassissima qualitá del servizio di Poste Italiane non da garanzie alle poste francesi che quindi, per non offrirti un servizio pessimo, ti impedisce di utilizzarlo.

Questa é notizia ufficiale chiaccherando con una tizia allo sportello delle poste francesi.

Non aggiungo altro …

### >>> India!
News sul fronte lavorativo. Avventura nell’avventura in arrivo. Giusto perché essere in Francia non è sufficiente, mi sono candidato per una possibilità che offre la mia azienda e alla fine sono stato ufficialmente selezionato:

a maggio partirò per un’amazing esperienza di due mesi in India, a Bangalore ! Si tratterà, in due parole, di fare un pò di coordinamento dei progetti software che l’azienda ha lì dislocato, facendo il point of contact tra l’India e la Francia.

Burocrazia permettendo, quindi soprattutto per il visto, la partenza è prevista per metà maggio, e ritorno a metà luglio.

Inutile dirvi che sono elettrizzato. La Francia è la mia prima esperienza all’estero e dopo un anno mi trovo già in India, e non come semplice tecnico. Non vedo l’ora !!

P.S.: e per non farmi mancare nulla, sarà un bel viaggio durante la stagione dei monsoni (…) . Annegherò schiattando di caldo :P

### >>> A clear direction for the future !
E’ parecchio che non scrivo. La mia vita ha deciso di ingranare la quarta e di colpo un turbine di eventi, decisioni e possibilità si sono spalancate e stanno assumendo un carattere più concreto. Ci sono una marea di cose in ballo, per la mia vita personale e lavorativa, cose che si realizzeranno di sicuro e altre che sarebbe un sogno se lo facessero. Professionalmente parlando potrebbe essere veramente il momento più importante della mia vita, e devo riuscire a giocare le mie carte meglio delle mie possibilità. GANBATTE !!!

### >>> Ciao India !
Ci siamo. Questa è veramente la fine di questa avventura indiana. Questo post lo ricorderò per sempre. E’ a caldo, sono appena uscito dall’ufficio con tutti i ragazzi e i manager a salutarmi, dandomi questo magnifico regalo (in foto). Ho fatto un breve discorso, veramente non preparato e in cui ho ringraziato, di cuore, tutti quanti. Voglio scrivere quello che sento ora, per avere una traccia indelebile di quello che sto provando e poterlo rileggere nel futuro, ricordarmi dov’ero e rivivere, almeno un pò, questo momento di quest’avventura incredibile.
Sono ovviamente contento di partire, è stata una permanenza non lunga, che è volata via, ma neanche veramente breve: 2 mesi in un mondo totalmente nuovo e diverso, sono sempre 2 mesi. Chi mi conosce e mi segue ha capito che sono allo stremo delle forze, psichiche e fisiche, e nelle ultime settimane non ho fatto altro che lamentarmi e fare il conto alla rovescia verso questo giorno. Ma oggi è così strano. In questi 2 mesi ho fatto amicizia con tante persone, ragazzi e ragazze estremamente simpatici, gentili, sempre disponibili. Brave persone, ottimi amici. Ho fatto il pieno di cultura indiana, ho imparato tantissime cose, lavorativamente parlando è stato veramente utile e interessante e personalmente penso di aver raggiunto un’apertura mentale ancora maggiore, e mi sento veramente in grado di poter fare qualsiasi cosa in questo momento (anche i miei colleghi qui me lo dicono sempre :”dopo quel treno che avete preso per Varanasi, puoi fare veramente tutto”). Dopo due mesi sono riuscito a mangiare cibo al masala senza sudare troppo e tutto questo caos intorno è diventato “quasi” familiare, così come le mucche in strada, gli uomini che camminano tenendosi per mano, i rickshaw. Ho viaggiato tanto, abbiamo visitato cose incredibili, visto un mondo totalmente opposto che ci porteremo dentro per sempre.
Però seppur non veda l’ora di tornare nel mio mondo e di riabbracciare finalmente Sarah, oggi mi sento strano. Non c’è niente da fare: partire è sempre partire. E’ sempre comunque un lasciarsi qualcosa alle spalle, per quanto tu possa aver raccolto. E’ strano perché tutti questi ragazzi che ho incontrato, con cui ho passato tutto questo tempo, che mi hanno aiutato, con cui ho riso e scherzato .. beh, probabilmente non li incontrerò mai più. Certo, mai dire mai nella vita. Ma il mio sesto senso e i miei piani futuri non includono l’India. Mi mancheranno le persone che ho incontrato qui, davvero. Sarà strano ricominciare lunedì avendoli solo nella chat interna aziendale e non intorno.
Non so ancora di preciso cosa ho raccolto, me ne accorgerò nel tempo che verrà. Sicuramente più fiducia in me stesso (e soprattutto nel mio pessimo inglese, che comunque me l’ha fatta cavare egregiamente sia sul lavoro che fuori). Più apertura mentale verso il mondo, il non giudicare mai a priori comportamenti e abitudini seppur incomprensibili e lontani dai nostri, ma accettarli per come sono. Una visione globale decisamente maggiore, è veramente affascinante vedere come culture così diverse possano essersi sviluppate nel nostro stesso piccolo mondo (e il copyright di questa frase è di Sarah, ndr). Forse e soprattutto la gentilezza e l’ospitalità: gli indiani hanno questo da insegnarci.

Tra poche ore partirò. E’ stata l’esperienza più forte della mia vita finora. Altre ne arriveranno, non ci si ferma mai. Le ore che mi separano da Sarah ricominciando la mia vita francese le passerò riguardando le quasi 800 foto fatte, ricordando tutto quello che ho passato. Assaporando ancora per un ultimo attimo questo sapore fatto di masala, caos, meraviglia, polvere e amici.

Grazie.

### >>> Cultura indiana – part II
Sto leggendo un bellissimo libro dal titolo “Holy Cow!”, di Sarah Mc Donald. La storia di una ragazza che viaggia in India per un paio di mesi come backpacker e che giura di non tornare mai più in quel paese così orribile. Tranne poi di tornarci, 11 anni dopo, lasciando tutto, la sua vita agiata, il suo lavoro, per seguire il marito, giornalista della ABC mandato nell’ufficio di New Delhi. Definitivamente. E’ divertentissimo perché parla di tutti gli aspetti pratici della cultura indiana, in cui ovviamente mi ci ritrovo perfettamente, tutte scene che ho vissuto esattamente in questi 2 mesi. Purtroppo non credo sia stato tradotto in italiano.

Una cosa di cui questo libro non parla è del mondo del lavoro, dal punto di vista indiano. La loro radice culturale è importantissima per capire la differenza tra noi occidentali e loro. In questi due mesi sono stato ovviamente solo a contatto con i miei colleghi, tutti ragazzi più o meno della mia stessa età e ho chiacchierato molto con loro, e penso di aver compreso, almeno un pò, questo piccolissimo tassello di questo puzzle apparentemente impossibile che è la cultura indiana. In Francia l’ambiente in cui vivo è veramente molto internazionale, nonostante la comunità di italiani sia enorme, però in genere siamo tutti ragazzi della stessa età, più o meno, e tutti (quasi, tranne il sottoscritto) hanno già avuto esperienze all’estero importanti, già all’età di 24-25-26 anni: chi è stato in Giappone uno-due-tre anni, chi è stato negli USA o in India un anno, chi ha già girato tantissimo nelle vecchie aziende in cui ha lavorato, etc … in genere a Sophia Antipolis sono sempre a contatto con ragazzi con ambizione, voglia di crescere, di girare, di conoscere.
Qui in India invece è diametralmente opposto. E la differenza culturale, rispetto a noi europei, è nell’importanza della famiglia. Qui in India la famiglia viene assolutamente prima di qualsiasi cosa, prima degli amici, prima del lavoro, prima di tutto. Sposarsi e “sistemarsi” è di primaria importanza (tristemente forse, e soprattutto, per motivi di facciata e per il prestigio della famiglia, infatti i matrimoni sono combinati e ci si sposa senza voglia, solo perché arrivati ad una certa età la famiglia inizia a spingere e a stringere i tempi, perché altrimenti ne andrebbe del suo buon nome). Questo fa si che quando i ragazzi trovano un buon lavoro, statisticamente nel mio campo abbastanza in fretta e quasi sicuramente, essendo l’India la nuova capitale dell’IT e del software, quando si trova un buon lavoro non si tende a lasciarlo, perché esso permette di metter su famiglia in fretta. I ragazzi non hanno interesse, non come noi almeno, a girare, fare esperienze fuori, lasciare un lavoro per un altro quando si trova un’opportunità migliore. Si è messa su famiglia e basta, non c’è molta ambizione negli occhi dei miei colleghi. Anzi quasi nulla.
———-
Forse avrò sbagliato, ma non credo al 100%. Questa cultura indiana è l’insieme di tutti gli estremi, come anche dice il libro di cui vi parlavo prima. Quello che mi è parso di capire in questi 2 mesi è che i lati migliori e affascinanti della cultura di questo paese sono quelli che appartengono al folklore e alla religione: i colori sono importantissimi, la divinità è sempre raffigurata in mille modi diversi, tutti colorati, dinamici, e i culti sono veramente affascinanti. L’India della vita reale di tutti i giorni invece non mi è piaciuta affatto. La famosa spiritualità indiana qui è in vendita ai turisti.

### >>> Last weeks
Il tempo sta passando veramente velocissimo e ancora non mi sono reso conto di tutto quello che sto vivendo, so già che realizzerò tutto questo solo una volta tornato a casa riguardando le tantissime foto fatte finora e ripenserò alle cose viste, gli odori sentiti, le persone con cui ho discusso e scherzato, i momenti di stanchezza e di gioia.

Ieri sono stato a Mysore, da solo. L’ex capitale dello Stato del Karnataka, prima che Bangalore lo diventasse. Cittadina carina, per gli standard indiani. Ho fatto una marea di foto e visto tante cose interessanti e particolari.

Ieri ho anche però sentito tanto la stanchezza. Questo Paese non è un paese facile in cui stare e da visitare, lo scrissi già qualche tempo fa. Ovunque è distruzione e caos immane, e forse è questo quello che mi ha impedito finora di assaporare veramente a fondo la bellezza dell’India: il caos esasperante. Non fa che centuplicare la tua personale sofferenza nel vedere scenari di degrado incredibile, di povertà allucinante, di miseria. Ieri passeggiavo nella cittadina la mattina presto. C’era silenzio, poca gente in giro, tutto chiuso. In quell’ora di relativa calma ho veramente assaporato la visita, ero tranquillo, non sentivo la stanchezza nonostante avessi dormito poco. Mi sono sorpreso. E’ ieri che ho compreso che il caos è lato peggiore di questo paese ed è per questo che sono sicuro che assaporerò la magia di quello che sto vivendo solo lontano da qui.

C’è poi anche l’aspetto hotel. Lo standard indiano è di un pessimo che voi neanche vi immaginate. Un hotel qui considerato caro, è assimilabile all’ostello europeo. E questo non giova alla tua permanenza, essendo già difficile il contesto, il fatto di non trovare neanche sollievo e relax in hotel, non è una cosa che aiuta.

Insomma, per tutti questi motivi ieri ho deciso che le mie visite in giro per il paese sono concluse, resterò a Bangalore per le settimane che rimangono (3), visitando quello che rimane qui da vedere. Sono troppo stanco adesso, non riesco più a sostenere tutto questo, sia fisicamente che psicologicamente. 2 mesi, per quanto mi riguarda, sono veramente un pò eccessivi, ma sento di essere cresciuto tantissimo, da tutti i punti di vista, e mi porterò dietro questa esperienza per sempre.

Via Flickr:

Visit to the ex-capital city of the State of Karnataka and its splendid Maharaja’s Palace.

### >>> Cultura indiana, parte I
Com’è strana questa cultura indiana, ci sono contraddizioni incredibili. Cercherò di scrivere un pò le mie impressioni dopo un mesetto, senza un ordine preciso. Quando tornerò in Francia avrò, forse, un’idea più nitida di tutto questo.

Primo pensiero. Normalmente guardando la tv si riesce, bene o male, a farsi un’idea grossolana del modo di vivere di un paese. Se in Italia si guardano qualche soap italiane, possiamo dire che rispecchiano abbastanza il nostro modus vivendi, non perfetto ovvio, però le case sono quelle, il modo di vestire è quello, il tenore di vita portato in tv rispecchia in generale quello dell’italiano medio e i suoi usi e costumi normali. Qui in India assolutamente no! I video musicali hanno sempre, e ripeto sempre, come soggetti un uomo e una donna che si incontrano con lui che le fa la corte, etc. Sono video veramente molto passionali da cui trasuda amore e calore, il normale procedimento di approccio a una donna, il fidanzamento, etc. Poi nella realtà indiana, invece, i matrimoni sono combinati. Quando un ragazzo arriva ad un’età, mediamente, di 25 anni (per le ragazze è verso i 18-19) la famiglia inizia ufficialmente “la ricerca”. Si passa la voce tra le famiglie e quando si trova una combinazione ci si incontra e si analizza la candidata: condizione economica della famiglia, la dote, il suo grado di educazione, l’oroscopo (non sto scherzando!), che lavoro fa, la sua casta (qui c’è un sistema complessissimo di caste, ogni persona appartiene ad una casta e ci si può sposare solo tra appartenenti alla stessa. Un sistema sociale complesso, negato dalla costituzione indiana che non le riconosce, ma che nella vita pratica è ancora molto radicato, utilizzato e importante per tutti gli indiani. E’ un sistema pieno di mille sfaccettature che ancora non ho capito a fondo).
Oppure i film. I film di Bollywood mostrano sempre famiglie normali, che vivono in case normali, pulite, ordinate. Poi nella realtà, invece, l’India è un paese completamente a pezzi. Le strade sono distrutte ovunque, le case fatiscenti.

Questo è un paese in piena e veloce crescita. Ma girando per il paese viene da chiederti “ma dove?”. E’ vero che tutte le aziende IT più grandi del mondo stanno investendo in India, ma allora la domanda è: ma tutto questo mare di soldi, dove sta andando? Quello che mi pare di vedere è un paese, invece, in cui la crescita sta andando solo da una parte. La forbice sociale sta diventando enorme, c’è un abisso tra super ricchi e super poveri. Mentre in Europa, bene o male, il tenore di vita è medio per tutti (anche da noi ci sono i super ricchi, ma la popolazione sta bene in genere e la forbice sociale non è, per il momento, ancora cosi alta), in India è incredibilmente enorme. Il tenore di vita della popolazione media è molto basso, le condizioni igieniche, anche per persone che lavorano, sono molto basse rispetto alle nostre. E’ anche un fattore culturale comunque, diciamo che l’ordine e la pulizia non fanno parte di questa parte del mondo. Però mentre la maggior parte delle persone, veramente, sopravvive, i super ricchi invece hanno un mondo a parte, vivono in palazzi giganteschi (a Mumbai abbiamo visto un palazzo di 7 piani in cui vive solo una famiglia, ricchissima) e non escono mai per le strade. Non si mischiano ai poveri, cioè tutto il resto del paese.

Il sistema delle caste è veramente stranissimo e molto tribale, se vogliamo descriverlo in qualche modo. Ogni persona è appartenente ad una casta, come già detto prima. Non si può cambiare casta, se non nella prossima vita, se si è compiuto buone azioni e condotto una vita retta. Questo sistema porta chiramente alla suddivisione in classi, per cui le classi superiori trattano veramente male le persone di classe inferiore e scene brutte accadono tutti i giorni, non per ultimo in ristoranti o bar in cui chi serve è appartenente ad una classe molto bassa e i clienti si sentono autorizzati a trattarli veramente male (scene in cui ogni volta sistematicamente mi sento veramente male). Altro lato negativo è che le persone di classe molto bassa si sentono bloccati nella loro situazione e fanno il loro lavoro senza stimolo alcuno, portando per esempio ad aspettare 1h per avere un caffè in un bar senza clienti a parte te, perchè probabilmente sanno che non cambierebbe nulla comunque, resteranno in quella situazione per sempre.
Tutto molto triste.

### >>> In the Steve’s brain
Chi critica questi tributi seguiti all’uomo Steve Jobs, dopo la sua morte, che piovono da giorni da tutto il mondo forse non ha ben chiaro il concetto di chi è stato quest’uomo. Al di la delle sue capacità imprenditoriali inimitabili, che hanno reso Apple la società più ricca, stimata e invidiata del mondo, al di la del discorso economico e del marketing in se. Al di la di queste cose terrene e pratiche.
Chi critica forse non ha capito l’importanza capitale che ha avuto quest’uomo per l’informatica e la comunicazione, in generale. Di comunicazione non me ne intendo molto, ma di informatica direi qualcosina di si. Senza Jobs e Bill Gates non ci sarebbero stati i personal computer, o almeno, non li avremmo avuti cosi in fretta nelle nostre case. Non ci sarebbe stata la conseguente esplosione di interesse riguardo i computer, l’informatica, la programmazione. O almeno cosi presto. I computer avrebbero continuato ad essere qualcosa di nicchia, riservata ai “santoni” delle università che passavano giornate intere a compilare fogli a buchi per far fare al computer 2+2. Invece Jobs ha avuto l’intuizione geniale che il computer, forse, avrebbe potuto interessare milioni di persone nel mondo, quando IBM invece non l’aveva anche neanche lontanamente immaginato. Invece è arrivato Jobs, ha preso un’idea nata in Xerox (che incomprensibilmente aveva un tesoro inestimabile in casa e non lo capiva – Xerox avrebbe potuto benissimo essere una Apple già vent’anni prima) e ha fatto qualcosa che ancora nessuno aveva pensato: ci ha fatto arrivare il computer a casa.
E noi ci siamo interessati, abbiamo iniziato ad usarlo. Poi è arrivata Internet ed è esplosa la nuova era dell’informazione.
Senza Steve Jobs e Bill Gates il mondo a cui ora siamo abituati, che permette a me di scrivere qui e a voi di leggere da chissà quale device, non esisterebbe (oppure si, ma non cosi evoluto).
Senza Jobs e Gates l’informatica non sarebbe esplosa e non sarebbe diventata alla portata di tutti. E dall’interesse, dalla domanda, poi nascono gli investimenti nel settore ed ecco facoltà storicamente monoblocco come Ingegneria Elettronica scindersi per creare Ingegneria Informatica.

Quando si parla del valore che ha dato Jobs al mondo non è un discorso da stupidi consumatori che vedono perdere il loro flauto magico, è un discorso più ampio di questo. Molto di più. E’ un settore intero, uno dei più importanti del mondo e su cui esso praticamente si basa, l’informatica, che ha beneficiato di un genio del genere.

Quando tra 10 anni i nostri figli vedranno una tastiera come noi oggi vediamo i floppy disk, solo tramite le immagini su Internet, chi oggi critica forse capirà meglio cosa voglio dire.

### >>> travel.alebaffa.com
Ebbene sì, da oggi ufficialmente alebaffa passa dall’essere solo un nickname a un vero e proprio domain name. Il primo dei suoi utilizzi è un nuovo blog, che sarà mantenuto a quattro mani (dal sottoscritto e da relativa girfriend) e il cui unico tema principale sarà il viaggio. Foto, suggerimenti, racconti, guide fai-da-te, abbiamo deciso di raccontare le esperienze dei nostri viaggi, in modo da avere una traccia scritta e indelebile delle nostre avventure e, perché no, condividere con chi vorrà seguirci qualche consiglio utile o esperienza.

Trattandosi di un blog da viaggiatori, avendo ormai amici pressoché sparsi in tutto il globo, ed essendo ormai quello della lingua per noi un discorso veramente complicato (qui ormai ci sono 3 lingue attive quotidianamente e la quarta sta arrivando .. piano piano) l’inglese sarà la lingua ufficiale.

Questo il link : http://travel.alebaffa.com/ . Sperando di trovarvi ancora tutti di la (nonostante la lingua) !!

P.S.: questo blog non morirà (per il momento. Ma credo che una migrazione dei suoi contenuti verso l’altro dominio avverrà abbastanza presto).


#### At this point, the blog migrated to alebaffa.travel.com and so all the following posts here are from that other blog

### >>> Carnaval de Nice
The Carnival of Nice takes place every year from the second half of February until the first weekend of March. It’s the most important and biggest carnival of France, as well as one of the biggest carnival in the World attracting million of tourists every year. It lasts almost 3 weeks during which there are a lot of different events all over the city. Some of these events are very impressive, like the Fete d’Overture (the opening cerimony – the photo here is taken during it), the Corso Illuminé, during which the lighted carnival floats are driven through the streets of the city in the night and La Bataille des Fleurs.

It’s a paid event, so if you want to enjoy the party you have to pay something like 10€ or 25€, depending if you like the VIP tribune or just walking (I like more the second choice .. I’ve never even considered to sit during a carnival). BUT, and this is a good news, for the most crazy ones who still like dressing up, they will let you enter for free!!

But be prepared: you are in France, so you’ll be the only one dressed up and with a happy mood :-)
Obviously, Sarah and I were the only ones with a costume in all Nice this year (and ok, some children too). And all the tourists were stopping us for a photo :-P

### >>> Route de la Lavande, Provence
It’s probably one of the reasons the Provence is known for in the World. The lavender fields are located in the heart of the south of France and they are absolutely worth visiting! The lavender starts blooming in the end of June until the end of August, so the best time to visit the fields is some weeks before the beginning of the thresh, that will take place in the end of August (I would strongly suggest the end of July).

You can make it in one weekend, obviously depending on your time, needs and possibilities. There are a lot of different places for visiting the lavender fields, so it’s really just a matter of where you are and how much time you dispose. We choose Valensole, a very small town (but very very nice and very very Provencal style) inside the Park Naturel Régional du Verdon, which is 3 hours driving from Antibes, not far from where we live. Hereafter the planning of our visit (the routes are from Nice to Valensole, but you can use it if you’re coming from around the Nice area) :

ROUTES

Our "Route de la Lavande" – click on the map for details

 

Go:

Autoroute, CLICK HERE (from Antibes to Valensole)
[You can also choose to go in Valensole following soon the Route Napoleon, but it’s longer and if you leave from Antibes/Nice on Friday evening, it’s better doing it in your way back. It’s too beautiful to be spent being in hurry !].

Back:  

Through the “Park du Verdon”: from Valensole, follow the direction to Riez and then to Castellane.

Route Napoleon: from Castellane, follow the direction to Grasse – Cannes.

WHAT TO VISIT
Valensole: it’s the best place to go if you have only one weekend and you want to see as much lavender fields as you can even imagine. All around this very beautiful and very “provencal“ village there are violet fields everywhere.
There is a great restaurant in the small center with typical courses (everything “lavender-based”, obviously).
There are cheap markets for your souvenirs.
Manosque:
There’s the market on Saturday morning: it’s worth visiting !
Occitane en Provence: one of the most important and famous parfumiers of France (absolutely to avoid if you are with your girlfriend or girls in general if you don’t want to completely drain your wallet)
WHERE TO STAY
Camping municipal “les Lavandes” – It’s a very pleasant camping, 5 mins walking from the center of Valensole. Owner very nice and helpful.
Route de Puimoisson – 04210 VALENSOLE – FRANCE
Tél. :+33 (0)4 92 74 86 14 ou +33 (0)6 72 48 48 44 ou +33 (0)6 43 00 90 72
GPS : 44°03’37.20”N – 5°59’20.70”E
THE PLAN
Saturday

Morning:

Breakfast in Valensole in the Bar des Sports (immancabile !). They don’t have patisseries, but there’s an amazing boulanger just in front.

visit of the shops in Valensole

Afternoon :

Visit of Manosque

Visit of “l’Occitane en Provence”

On the route from Valensole to Manosque it’s full of small private direct sellers of everything lavender-based. But the shops in Valensole and Manosque are cheaper .

There are also some distilleries of lavender. Worth visiting !

Sunday

Morning:

Weak-up very early !

Breakfast in Valensole in the Bar des Sports

Take your way to the Park of Verdon, Castellane and the Route Napoleon. It will take a lot of hours (you will stop everywhere taking photos and in the villages on the route).

### >>> The Taj Mahal, India
You cannot say you have been in India if you have missed it.

The Taj Mahal is one of the new seven Wonders of the World. This stunning, amazing, unforgettable, incredible white milky murble building is the place you must visit before everything else in India. Built around 400 years ago, this mausoleum also known as the “Temple of the Eternal Love“, for its incredible history (built by Mughal emperor Shah Jahan in memory of his third wife) and legends, maintains an incredible well preserved status.

The mausoleum is located in Agra, one of the poorest towns of India. It took 4 hours sleeper class trainjourney from Delhi to get there, a journey I thought the worst journey

most dirty-stinky train I’ve ever seen before. But I was wrong,nothing comparable with the 13 hours journey from Agra to Varanasi (but I will write a post for that to make you laugh badly). We found an hotel just 10 mins walking from the Taj Mahal, and early in the morning (5:30 a.m) we woke up in order to be at the Wonder at 6 a.m., the opening time. There are two moments in the day during which the Taj Mahal shows its best: the sunrise and the sunset.  The mausoleum is in the middle of a large, very well maintained and crowded green park. At that hour there was almost nobody, but a lot of curious monkeys and some bored camels. It was astrange feeling, actually. This park is a really a jewel, well maintained and it attracts tourists from all around the World, anyday, anytime, but the town around, Agra, is a disaster. There’s an incredible poverty all around, something we are not used to see and that I couldn’t even imagine so bad, that makes you feel selfish and guilty, somehow. But eventually it’s something you must be prepared to face with if you want to visit India.


Indian old woman

Anyway, at 6 o’clock we got there, at the entrance of the Taj Mahal. After have paid 100 times more than Indian visitors (yes, the prices for the foreigners in India are completely different from those for Indians) for the ticket, and after have left my backpack (to enter into the park of the Taj Mahal you cannot bring anything with you, but at most your camera. But at least there are some pay-lockers) we finally reached the park. The Taj Mahal was just in front of us. The morning lights color the marble of pink and the show is simply stunning. You cannot even breath once in front of it, so overwhelming are the emotions. All the postcards you have always seen in your life, all the images, the photos .. wow, you are exactly there now, and you cannot even believe it is something built by humans. We stayed there for almost 3 hours before leaving, during which I’ve taken thousands of photos. And where I proposed to Sarah to marry me :)

The Taj Mahal is absolutely one thing yo must visit once in your life.

### >>> Goa, India
The beaches in Goa are very famous in India. The Indian Ocean is incredible and the beaches themselves are amazingly large. The Indians come from all around the country to enjoy the sun, the sand, taking a rest with some cocktails in one of the several open pubs in front of the sea or in one of the several resorts all around the towns. Indians consider this place as one of the most pleasant spots of the country.
For the tourists, worse if europeans or americans, it’s a completely different story. The climate is normally ridiculously humid, the coasts are completely dirty and not maintained or cleaned at all, the water is brown colored and full of bacterias (faecal coliform bacteria) dangerous for the health. All around the beach the towns are absurdly poor and the mix of humidity, stinky rubbish and hot temperatures make this place a real nightmare if you are not used to see such an extreme situation.
To make the things worse, even if this point is normal in India (but here more marked), the foreigners in Goa, just because this place is not very famous out of the country and normally there’re not so many tourists, the foreigners are the real stars of the coasts: you will be asked for some photos by thousands of Indians.

### >>> Roma, The Eternal City
You can travel for months all over the European countries, you can visit all the main capitol cities, you can spend time understanding their different languages, their cultures and history. You can go to Paris, Barcelona, London, Vienna, Monaco. But like for India, where if you miss the Taj Mahal you have completely missed that country, here is the same: you cannot say you have been in Europe, if you miss Roma.

Once in the Caput Mundi (capitol of the world) what happens is that you start connecting the points. There is an ancient proverb in Italy saying “Tutte le strade portano a Roma” (All roads lead to Rome), coming from the fact that Rome has been the political, artistic and military center of most of the part of the ancient known world for almost six centuries. All the main roads built during the Empire all over the Europe, from Spain to Greece, from England to Mesopotamia through France and Germany, lead to Rome. 80000 Km of connections with most of the part of what is now the European Union. Roads that have been used for centuries and most of which are currently been used. 

Visiting Rome thinking about its huge influence to almost everything we still do know and use, from the economic and political systems to the idea of democracy, the concept of Consul, the Senate, the Assembly, the taxation, the Arts, the growth of the Christianity … well, it gives you goosebumps.

Everything has started here, more than two thousands years ago.

If you think about that while wandering from the magnificence of the Colosseum through via dei Fori Imperiali to the Altare della Patria (the national monument to Victor Emanuel II), passing beside the Domus Aurea, the Foro Romano (Roman Forum) and the Mercati Traianei (Trajan’s Markets) is like walking through the History, and you feel like being in the center of an immense open-air museum.

A museum perfectly set in the urban city, harmoniously interlaced together in a continuum space-time in which the ancient and the new go along as if the time has never passed, they grow together and what has been built centuries ago has never dead: just born again and again.

The Eternal City.

We stayed in Rome for five days, and we didn’t manage to follow the plan. I didn’t consider we could spend almost an entire day only for the Saint Peter’s Basilica. You can be a believer or not, but when you are just in front of it you cannot explain your feelings, you are just able to take your camera and wordlessly take pictures.
Inside it’s even worse. The “wow” sequence begins turning your head to the right: the Michelangelo’s Pietà. Twenty meters ahead the John Paul II’s tomb, in the middle of the nave the Bernini’s baldachin, etc .. I would need a post only for the Basilica.

To keep ourselves in the Vatican’s atmosphere, we had the fortune to be in Rome just in time to visit a great exhibition, Lux in Arcana. The opportunity to see some documents coming from the Vatican Secret Archives.

### >>> Thank You
With this post we would like to thank you all ! The number of subscribers to our RSS, as well as the followers of our Google+ and Facebook pages is imcreasing every day ! Thank You !!

We are very sorry it’s being long time now without any update, but during the last months a lot of things have changed and we were just setting up our 2012 trips calendar ;-) ! So, some anticipations ……… the next two trip are going to be in two of the most beautiful capitol cities in the World, completely different to each other, two opposite cultures: Rome, Italy (end of March) and Tokyo, Japan (end of June and, hopefully, also end of the year).

So, stay tuned. And Thank You all, also for your patience :-)

### >>> The Colorful Joy Of The Indian Weddings
We recently had the pleasure and the honor to partecipate to a true Indian wedding, in Kolkata (Calcutta), West Bengal. 
A friend of ours, met during my 2 months stay in Bangalore this year, has kindly invited us to join him and his friends and parents in this joyful and important moment. Accordingly with our commitments, we have taken 5 days off at work, organized everything (flights, hotel, etc ..) and managed to get the visa in less than one week. Actually, for some unknown reasons, it seems that being Italian is good for the Indian visa and the Indian consulate can manage to make you have it very quickly. Good relationship between the two countries? Or is it simply  that we are very lucky?  - for my business visa I had to wait only 2 days to have it .. Anyway ..

indian_wedding_reception (68 of 73).JPGindian_wedding_reception (48 of 73).JPGIndia is a huge country composed of several internal states and Kolkata is the capital of the state of West Bengal, and because of that the weddings there are known as “Bengali weddings” .  This event normally lasts four-five days and in our case it’s been a four days wedding.Well, what to say: it’s been amazing. A wedding in general, all over the World, is an occasion when all the aspects of the local culture and its traditions come up and are heavily showed off. In Italy for example a wedding (it of course depends on the region, but still) is the best occasion to see all the most famous italian stereotypes: everybody talking loudly, shouting, joking, the ceremony in the Church, and we spend the entire day eating.

indian_wedding (8 of 85).JPGIn the case of India, a wedding means flowers, bright colors everywhere (white and black are normally forbidden in a wedding, they’re colors used in funerals so not well seen to bring good luck), and all the people either men and women dressed up with all their best typical Indian dresses (kurta for the men, and saree for the women). They are simply fantastic! The ritual itself is quite long and of course quite difficult to understand in depth. Luckily during the ceremony we have been helped in that by the other wedding attendants (we were actually the only two not-Indian persons among all, more or less 800 people invited) who have been every time so The bridekind and happy to make us understand what was happening in almost every moment. And this is one of the things I like the most in the Indian culture, and it is also quite funny: the Indians love talking about their traditions ! Try to ask someone about even a small aspect of their culture and you will be overwhelmed with words and stories for endless minutes. So, the best guide you could find to discover India is not the Lonely Planet, but the Indians themselves (even though the former is absolutely a must-have :-) ).

Both the bride and the groom were dressed up with amazing dresses, as you can see in these small images (but there is of course the entire photo set with the big-sized pics which link is just in the bottom of this post). I was of indian_wedding_reception (32 of 73).JPGcourse impressed by the bride, she was so beautiful and her face was completely and impressively made-up. Her dress seemed to be more complex than the groom’s one (even though talking with him he spent more than an hour to get dressed up) and she had so many golden jewels .. She was really beautiful ! The groom was lightly made-up in his face and overall he has that strange milk-white head covering, that looked to be not really comfortable, but he looked great anyway. Both of them had flower garlands and they were sitting all the time on those golden throne.
In all the building there were carpets everywhere. The ambience in general was amazing ! It was like being in a dream looking at what here in Europe we could easily consider a royal wedding.
indian_wedding (13 of 85).JPGOf course the buffet was entirely composed of typical bengali foods and we happily discovered an interesting thing: the bengali food is not that spicy !! In comparison with what we have tasted in Bangalore  or in other zones of India (when I was sweating all the time eating), it was really a very pleased discovery ..  

Of course we could not go there dressed up like profane foreigners, so we bought some typical Indian dresses. We were so scared because of course we didn’t know if they were proper for a wedding, but instead we were perfectly mixed with the other attendants. Here the result:

indian_wedding (24 of 85).JPG indian_wedding (23 of 85).JPG indian_wedding (26 of 85).JPG

An Indian wedding is not an occasion for tourists, and so we were so glad for the invitation and so happy to partecipate: it is definitely a thing not opened to everyone and something that can be seen only one or at most few times in a life (at least for Europeans). Our life so far is being really amazing and we thank God for that.

We wish all the best for our newlywed friends !

### >>> Une baguette s’il vous plait
One important consequence of traveling is how you start handling all the languages you have learned so far. Well, yes,  I mean staying in the same country for quite a long time, a period of time enough to learn the local language and to become autonomous with it.

I still remember that day. I was in one boulangerie, here in France, to buy some bread. La baguette. And when asked “Qu’est-ce que vous voulez, monsieur? “, I  just naturally said “Une baguette, s’il vous plaît“. Une baguette, instead of un baguette. No errors, no bakers shouting “bien sure, UNE BAGUETTE POUR LE MONSIEUR!!!“, with a voice volume so high to make all the people in the bakery knowing of my grammatical error.
A thrilling moment, seriously.

Handling more than two languages is interesting, you see how your brain changes its “languages prioritization”. It’s something I face with every day, since in my working place I’m currently using three languages at the same time (FR, EN, IT). You have your native language, and you start having more than one foreign languages stored in your internal database. So, it happens that when you are in a foreign country and you start talking with one who’s not your countryman, the question is “which is the language your brain starts searching the words from? “. Is it English, or another one? In my case, it’s french, because I am so used now to talk in french that English has become my third language. But I am still lucky, because I just know three languages.  For instance, to Sarah it was even more difficult, considering she knows four languages (IT, FR, EN, JP), when she came here in France she found herself speaking in Japanese while talking to others. Funny moments … 

Your brain has two different stacks for the languages: native and foreigners. The latter contains several slots and the first one, which is the one your brain searches the words from, depends on your habits. The problem is what to do when you are forced to use another slot from this stack. Well, your brain starts a tiring research in all the other slots (french NO, english OK, japanese NO), but the final latency is too high to have a normal fluent discussion. Yes, it’s like a computer, you have a RAM volatile fast memory in which are stored your native and the first of the foreign languages you know, and a slower hard disk in which are stored all the others.

Handling the switch among the different stacks and slots is not trivial at all. But it’s so fascinating … it’s like a gym for your brain.  When you manage to do it you start feeling like you could do everything. When the languages are no longer an obstacle, there are no limits on the experiences you can do.  Knowing the language is of capital importance to appreciate the world around you. 

### >>> Paris, la ville de l’amour
Travelling is a state of mind.

It’s letting yourself loose, free from the daily routine of preoccupation and responsibilities.

It’s getting lost in others’ conversations in front of a cup of coffee at 9am, French, English, Italian, Japanese words filling the cozy small hotel dining room.

What’s the difference about Paris – c’mon, seriously – yet another European capital.

Nevertheless, a strange melody fills the air.

With its narrow, characteristic streets, small passageways magically suspended in a timeless silence, with its incredible panoramic viewpoints, with its heterogeneous districts, where everything is possible and everyone admitted, with its fairy and ethereal lights, this city has become the symbol of romanticism and love.

Paris is the city of emotions.

The knowing sensuality permeating every piece of art, the unique elegance of French savoir-faire, and the majesty of its glorious historical past make the atmosphere of the city light, frivolous and suggestive at one time.

And what is love, if not L’Insoutenable Légèreté de l’être ?

The first time you arrive in this city, you will be dazzled by its beauty: Arts are everywhere, not only in the museums, but all around you. The city itself is an immense piece of art.

This brings back to the city history.

Starting from the Renaissance, in fact, Paris has been a bubbling culture centre, mixing artistic and scientific movements in an eclectic environment. In the XIX century, Paris has become the epicentre of Romanticism, the artistic current invading Europe as a rebellion against the established order, proclaiming the superiority of feeling over reason.

Romanticism had no fear of dream, of passion, of melancholy, of sensuality. Everything was true lyricism, sublime music of senses.

And actually, the city charm has a lot more to do with feeling than understanding. There’s no need to know Paris history, or the Romanticism, to seat on the Seine borders and let oneself be inebriated by its fragrance of freedom and eternity.

« Respirer Paris, cela conserve l’âme », Victor Hugo.

Let sensations fill you up, let the emotional flow flood your heart.

And so we did.

On the notes of the most timely released Un monstre à Paris soundtrack, we let the city and its magic envelop us.

The first day of our visit was entirely dedicated to the senses.

From our small but cosy hostel room in the evocative Rue de la Félicité, perfectly alike one of those in which Romanticism dissolute artists living in the Débauche composed their best oeuvres, we took the metro till the Louvre, where we spent half a day suspended between past, present and future

Re-emerging from the glass pyramid was like passing to a superior existence level.

Then we took on the Champs Elysees in the sunset, mixing up with the frivolous shopping crowd, our eyes fixed on the shape of our final destination: the majestic Arc de Triomphe. 

After an entire day accumulating lyrical potential we’d obviously need a full discharge. And what better than a modern rock show soirée to let ourselves loose and free from the influence of the Past?

In the second day, we entered in contact with our supernatural side and spiritual longings: wandering about in Montmartre, getting a panoramic view of the whole city from the Sacre Coeur basilica, letting us be surrounded by the undefined space-time Art in Salvator Dali’s supernatural espace, visiting Saint Sulpice, the Pere Lachaise cemetery, attending the solemn Latin sung High Mass in Notre Dame.

The third was the day of here, now and forever, I love you. La Tour Eiffel, of course, and le Pont des Arts, where the shadows of all the cadenas d’amour (now removed) which keys lie in the Seine as eternal love promise, and the unforgettable diner-croisiere pour deux avec Champagne on the Seine.

We obviously needed the fourth day to come back to the Earth, and the frivolous colours, perfumes and light pop music at Galeries Lafayettes made the transition smooth and enjoyable.

– Sarah –

##UPDATE##
I like this post so much that I totally got lost while reading it. And of course I forgot to put the usual link to my photo album on Flickr (Ale). And here it is:
