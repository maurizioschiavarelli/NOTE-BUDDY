import { FaJsSquare } from 'react-icons/fa'
import { FaVuejs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { DiNodejsSmall } from 'react-icons/di'
import { DiCss3Full } from 'react-icons/di'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import HeaderDocs from '../../HeaderDocs'
import { Helmet } from 'react-helmet'
import Modal from '../../Modal'

import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'

export default function JavascriptIntroduzione () {
  const [openAcc1, setOpenAcc1] = React.useState(false)
  const [openAcc2, setOpenAcc2] = React.useState(false)
  const [openAcc3, setOpenAcc3] = React.useState(false)
  const [openAcc4, setOpenAcc4] = React.useState(false)
  const [openAcc5, setOpenAcc5] = React.useState(false)

  const handleOpenAcc1 = () => setOpenAcc1(cur => !cur)
  const handleOpenAcc2 = () => setOpenAcc2(cur => !cur)
  const handleOpenAcc3 = () => setOpenAcc3(cur => !cur)
  const handleOpenAcc4 = () => setOpenAcc4(cur => !cur)
  const handleOpenAcc5 = () => setOpenAcc5(cur => !cur)

  const codeString = `    <script>
      let message = "Ciao, mondo!";
      console.log(message);
    </script> 

    //output Ciao mondo!`

  const codeString1 = `    <script>
      let name = "John"; // Stringa
      const age = 30;    // Numero intero
      let isStudent = true; // Booleano
    </script>`

  return (
    <div className='containerGuides'>
      <Helmet>
        <title>Javascript | Introduzione</title>
      </Helmet>

      {/* Header della documentazione */}
      <HeaderDocs
        title='Introduzione a JavaScript'
        icon={FaJsSquare}
        subTitle="Cos'è JavaScript e come può trasformare lo sviluppo web"
        description='JavaScript è un linguaggio di programmazione versatile e potente, essenziale per la creazione di applicazioni web moderne e interattive. In questo articolo esploreremo le basi, la storia, le caratteristiche e le ultime funzionalità di JavaScript.'
      />

      <div className='lg:w-3/4 w-11/12 m-auto h-auto my-10 lg:my-0 lg:mb-10 list'>
        {/* Sezione: Cos'è JavaScript */}
        <section>
          <h2>Cos&apos;è JavaScript?</h2>
          <p>
            JavaScript è un linguaggio di programmazione dinamico, utilizzato
            principalmente per il web. È uno degli elementi chiave nello
            sviluppo di siti web interattivi, grazie alla sua capacità di
            eseguire script lato client, cioè direttamente nel browser
            dell&apos;utente. Questo consente di aggiornare dinamicamente
            contenuti, interagire con l&apos;utente e modificare l&apos;aspetto
            della pagina senza la necessità di ricaricarla.
          </p>
          <p>
            Non solo è utilizzato nel front-end, ma anche nel back-end grazie
            all&apos;introduzione di tecnologie come Node.js, che consente di
            eseguire JavaScript anche lato server.
          </p>
          <hr />
          <h2>Linguaggi e framework utilizzati con Javacript</h2>
          <div className='flex flex-wrap text-center justify-evenly m-auto'>
            <div>
              <FaJsSquare className='text-9xl text-yellow-400' />
              <Modal
                title='Javascript'
                Icon={FaJsSquare}
                iconClassName='text-8xl text-yellow-400'
                description="JavaScript è uno dei linguaggi di programmazione più utilizzati al mondo per lo sviluppo web. È un linguaggio di scripting lato client che consente di aggiungere interattività alle pagine web. La sua capacità di manipolare il DOM (Document Object Model) lo rende fondamentale per lo sviluppo di applicazioni web dinamiche e responsive. JavaScript è anche utilizzato lato server con l aiuto di Node.js, creando un ecosistema di sviluppo full-stack. Supporta programmazione orientata agli oggetti, funzionale e imperativa, ed è la base di molti framework moderni, come React, Angular e Vue.js. JavaScript si integra bene con HTML e CSS, rendendo possibile la creazione di esperienze web interattive, dalla semplice validazione dei form all'implementazione di applicazioni web complesse e in tempo reale."
              />
            </div>
            <div>
              <AiOutlineHtml5 className='text-9xl text-orange-600' />
              <Modal
                title='HTML 5'
                Icon={AiOutlineHtml5}
                iconClassName='text-8xl text-orange-600'
                description="HTML5 è l'ultima versione del linguaggio di markup che struttura il contenuto delle pagine web. È stato progettato per essere il cuore del web moderno, migliorando la semantica e le funzionalità rispetto alle versioni precedenti. HTML5 include nuovi elementi semantici come <article>, <section>, <header>, <footer> e <nav>, che aiutano a organizzare il contenuto in modo logico, migliorando l'accessibilità e l'ottimizzazione per i motori di ricerca (SEO). Inoltre, HTML5 ha introdotto il supporto nativo per contenuti multimediali, come video e audio, senza la necessità di plugin esterni. Le API JavaScript integrate in HTML5, come la Geolocalizzazione, la gestione dei file locali e la gestione offline tramite il LocalStorage, hanno reso HTML5 la base per lo sviluppo di applicazioni web moderne, che possono funzionare anche senza una connessione internet continua."
              />
            </div>
            <div>
              <DiCss3Full className='text-9xl text-blue-500' />
              <Modal
                title='CSS'
                Icon={DiCss3Full}
                iconClassName='text-8xl text-blue-500'
                description="CSS3 è la versione più recente del linguaggio di stilizzazione che definisce l'aspetto delle pagine web. È essenziale per separare la struttura del contenuto HTML dalla presentazione visiva, consentendo una gestione più efficiente del layout e del design. CSS3 ha introdotto numerosi miglioramenti rispetto alle versioni precedenti, tra cui animazioni, transizioni, effetti di ombre, bordi arrotondati, e griglie. L'uso di flexbox e CSS grid ha semplificato la creazione di layout complessi, mentre le media queries permettono di progettare layout responsive, adattabili a schermi di diverse dimensioni. CSS3, combinato con tecniche avanzate di pre-processori come Sass e Less, consente di creare interfacce utente moderne e scalabili, migliorando sia l'estetica che l'usabilità delle applicazioni web."
              />
            </div>
            <div>
              <DiNodejsSmall className='text-9xl text-green-400' />
              <Modal
                title='NodeJS'
                Icon={DiNodejsSmall}
                iconClassName='text-8xl text-green-400'
                description="Node.js è un ambiente di runtime JavaScript open-source che permette di eseguire JavaScript sul lato server. Basato sul motore V8 di Google Chrome, Node.js è progettato per costruire applicazioni veloci ed efficienti, soprattutto per applicazioni in tempo reale e scalabili, come i server di chat e le applicazioni di streaming video. Grazie alla sua architettura non bloccante e orientata agli eventi, Node.js è particolarmente adatto per applicazioni che richiedono un elevato numero di operazioni di I/O, come le API RESTful. Utilizzando Node.js, gli sviluppatori possono scrivere sia il codice client che quello server in JavaScript, semplificando il flusso di lavoro e migliorando la manutenzione del codice. Inoltre, l'ecosistema di pacchetti di Node.js, tramite npm (Node Package Manager), fornisce una vasta gamma di librerie e strumenti che accelerano lo sviluppo."
              />
            </div>
            <div>
              <FaReact className='text-9xl text-light-blue-700' />
              <Modal
                title='React'
                Icon={FaReact}
                iconClassName='text-8xl text-light-blue-700'
                description="React è una libreria JavaScript sviluppata da Facebook per la creazione di interfacce utente (UI) dinamiche e scalabili. È particolarmente utilizzata per lo sviluppo di single-page applications (SPA), dove il contenuto della pagina viene aggiornato in modo dinamico senza necessità di ricaricare l'intera pagina. React utilizza un sistema basato sui componenti, che permette di creare interfacce modulari e riutilizzabili. Uno degli aspetti più innovativi di React è il Virtual DOM, che ottimizza il rendering delle modifiche all'interfaccia, migliorando la performance. Con l'introduzione di React Hooks, gli sviluppatori possono gestire lo stato e gli effetti collaterali in modo più conciso e leggibile. React ha un vasto ecosistema di strumenti e librerie, come React Router per la navigazione e Redux per la gestione dello stato, che lo rendono ideale per progetti di grandi dimensioni."
              />
            </div>
            <div>
              <FaVuejs className='text-9xl text-green-800' />
              <Modal
                title='VueJS'
                Icon={FaVuejs}
                iconClassName='text-8xl text-green-800'
                description='Vue.js è un framework JavaScript progressivo che si concentra sulla creazione di interfacce utente reattive e sulla costruzione di applicazioni web moderne. È stato progettato per essere adottato in modo incrementale, il che significa che puoi iniziare con piccole funzionalità e gradualmente integrare funzionalità avanzate quando necessario. Vue è noto per la sua curva di apprendimento relativamente bassa, rendendolo una scelta ideale per i principianti. Offre un sistema reattivo che consente di aggiornare automaticamente la UI quando i dati cambiano, e utilizza una sintassi semplice ma potente. Con il supporto per la creazione di componenti, il routing, e la gestione dello stato tramite Vuex, Vue.js può essere utilizzato per costruire applicazioni complesse e ad alte prestazioni. La documentazione di Vue è chiara e ben organizzata, e la sua comunità in crescita contribuisce regolarmente con risorse e plugin.'
              />
            </div>
          </div>
        </section>

        <hr className='border-t-2 border-gray-600 mb-6' />

        {/* Sezione: Perché JavaScript è importante */}
        <section>
          <h3>Perché JavaScript è importante?</h3>
          <p>
            Senza JavaScript, il web sarebbe fatto di pagine statiche che non
            potrebbero rispondere alle azioni dell&apos;utente in tempo reale.
            JavaScript ha rivoluzionato la navigazione online, abilitando
            funzionalità come il caricamento asincrono dei contenuti, la
            validazione dei moduli in tempo reale, e l&apos;animazione degli
            elementi della pagina.
          </p>
          <p>
            Inoltre, la sua versatilità è cresciuta nel tempo: grazie a
            framework e librerie come React, Angular, Vue.js, ed Express.js,
            JavaScript è oggi utilizzato per creare sia interfacce utente (UI)
            sia applicazioni server-side, gestendo database, autenticazione e
            comunicazione in tempo reale.
          </p>
        </section>

        <hr className='border-t-2 border-gray-600 mb-6' />

        {/* Sezione: Le caratteristiche principali di JavaScript */}
        <section>
          <h3>Le caratteristiche principali di JavaScript</h3>
          <ul>
            <li>
              <strong>Flessibilità:</strong> JavaScript supporta diversi
              paradigmi di programmazione, come la programmazione imperativa,
              orientata agli oggetti e funzionale, il che lo rende molto
              versatile per vari tipi di progetti.
            </li>
            <li>
              <strong>Compatibilità con il browser:</strong> JavaScript è
              eseguito direttamente nel browser, il che lo rende perfetto per
              applicazioni web client-side.
            </li>
            <li>
              <strong>Asincronicità:</strong> JavaScript permette di eseguire
              operazioni asincrone tramite callback, promesse (Promises) e la
              sintassi `async/await`, migliorando l&apos;efficienza e
              l&apos;esperienza utente.
            </li>
            <li>
              <strong>Accesso alle API Web:</strong> JavaScript può interagire
              con numerose API del browser, permettendo l&apos;accesso alle
              funzionalità avanzate come la geolocalizzazione, il media stream e
              la gestione di file locali.
            </li>
            <li>
              <strong>Facilità di apprendimento:</strong> La sintassi di base di
              JavaScript è semplice e facilmente comprensibile, con una grande
              quantità di risorse di apprendimento disponibili.
            </li>
          </ul>
        </section>

        <hr className='border-t-2 border-gray-600 mb-6' />

        {/* Codice esempio 1 */}
        <section>
          <h4>Esempio di dichiarazione di variabili in JavaScript</h4>
          <div className='flex justify-center items-center mb-6'>
            <SyntaxHighlighter
              language='javascript'
              style={nightOwl}
              className='rounded-lg m-auto text-center w-80 sm:w-full'
            >
              {codeString1}
            </SyntaxHighlighter>
          </div>
        </section>

        <hr className='border-t-2 border-gray-600 mb-6' />

        {/* Sezione: Storia e evoluzione di JavaScript */}
        <section>
          <h3>Storia e evoluzione di JavaScript</h3>
          <p>
            JavaScript è stato creato nel 1995 da Brendan Eich, mentre lavorava
            per Netscape Communications Corporation. Inizialmente conosciuto
            come &quot;Mocha&quot;, successivamente è stato rinominato
            &quot;LiveScript&quot; e infine &quot;JavaScript&quot;. La sua
            nascita è stata una risposta alla necessità di aggiungere
            interattività alle pagine web che erano altrimenti statiche.
          </p>
          <p>
            Nel corso degli anni, JavaScript è evoluto in un linguaggio robusto
            grazie agli standard ECMAScript, che sono evoluti ogni anno,
            introducendo nuove funzionalità, miglioramenti delle performance e
            maggiore sicurezza. Il rilascio di ECMAScript 6 (ES6) nel 2015 ha
            segnato un punto di svolta con l&apos;introduzione di nuove
            funzionalità, come le arrow functions, classi e moduli.
          </p>
        </section>

        <hr className='border-t-2 border-gray-600 mb-6' />

        {/* Sezione: Come funziona JavaScript */}
        <section>
          <h3>Come funziona JavaScript?</h3>
          <p>
            JavaScript viene eseguito nel browser, dove è interpretato dal
            motore JavaScript del browser stesso (ad esempio, V8 per Chrome,
            SpiderMonkey per Firefox). Quando un utente carica una pagina web,
            il browser scarica il codice JavaScript e lo esegue, consentendo di
            interagire con la pagina senza ricaricarla.
          </p>
          <p>
            Inoltre, JavaScript può comunicare con il server tramite AJAX
            (Asynchronous JavaScript and XML) o, più modernamente, con Fetch
            API, permettendo di aggiornare il contenuto della pagina senza
            interrompere l&apos;esperienza dell&apos;utente.
          </p>
        </section>

        <hr className='border-t-2 border-gray-600 mb-6' />

        {/* Esempio base di codice JavaScript */}
        <section>
          <h4>Un esempio base di codice JavaScript</h4>
          <div className='flex justify-center items-center mb-6'>
            <SyntaxHighlighter
              language='javascript'
              style={nightOwl}
              className='rounded-lg m-auto text-center w-80 sm:w-full'
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
          <p>
            In questo esempio, JavaScript crea una variabile chiamata{' '}
            <code>message</code> e visualizza un alert con il messaggio
            &quot;Ciao, mondo!&quot;. È uno degli esempi più semplici per
            introdurre la sintassi del linguaggio.
          </p>
        </section>

        <hr className='border-t-2 border-gray-600 mb-6' />

        {/* Sezione: JavaScript e la Manipolazione del DOM */}
        <section>
          <h3>JavaScript e la Manipolazione del DOM</h3>
          <p>
            Il DOM (Document Object Model) è una rappresentazione ad oggetti
            della struttura HTML di una pagina web. JavaScript permette di
            accedere al DOM e di manipolarne gli elementi dinamicamente. Ad
            esempio, è possibile aggiungere, rimuovere o modificare gli elementi
            della pagina in risposta alle azioni dell&apos;utente.
          </p>
          <p>
            La manipolazione del DOM è fondamentale per creare interazioni
            fluide, come modificare dinamicamente il contenuto, applicare stili,
            gestire eventi, e caricare contenuti senza ricaricare la pagina.
          </p>
          <img
            src='https://via.placeholder.com/800x400.png?text=DOM+Manipulation+Example'
            alt='Esempio di manipolazione del DOM'
            className='my-6 w-full h-auto'
          />
        </section>

        <hr className='border-t-2 border-gray-600 mb-6' />

        {/* Sezione: JavaScript nel Web moderno */}
        <section>
          <h3>JavaScript nel Web moderno</h3>
          <p>
            Con l&apos;introduzione di Node.js, JavaScript è diventato un
            linguaggio a tutti gli effetti anche per lo sviluppo back-end.
            Tecnologie come React, Angular, e Vue.js hanno cambiato il modo in
            cui costruisci interfacce utente moderne, consentendo la creazione
            di Single Page Applications (SPA) performanti.
          </p>
          <p>
            JavaScript è ora utilizzato per tutto, dalla creazione di interfacce
            web alle applicazioni mobili (tramite React Native) e persino lo
            sviluppo di desktop app (tramite Electron).
          </p>
        </section>

        <hr className='border-t-2 border-gray-600 mb-6' />

        {/* Sezione: Le nuove funzionalità di JavaScript (ES6+) */}
        <section>
          <h3>Le nuove funzionalità di JavaScript (ES6+)</h3>
          <p>
            L&apos;introduzione di ECMAScript 6 (ES6) ha migliorato notevolmente
            la produttività degli sviluppatori JavaScript, introducendo una
            serie di nuove funzionalità, tra cui:
          </p>
          <ul>
            <li>
              <strong>Arrow Functions:</strong> Sintassi compatta per le
              funzioni che preserva il contesto di <code>this</code>.
            </li>
            <li>
              <strong>let/const:</strong> Nuove parole chiave per la
              dichiarazione di variabili che offrono una gestione più sicura
              delle variabili rispetto a <code>var</code>.
            </li>
            <li>
              <strong>Template literals:</strong> Consente di interpolare
              variabili direttamente all&apos;interno di stringhe, migliorando
              la leggibilità.
            </li>
            <li>
              <strong>Destructuring:</strong> Permette di estrarre valori da
              array e oggetti in modo conciso e intuitivo.
            </li>
            <li>
              <strong>Modules:</strong> Introduzione della modularizzazione del
              codice con import ed export.
            </li>
          </ul>
        </section>
        <hr />
        <h3>Domande sui tipi di dato</h3>
        <Accordion open={openAcc1}>
          <AccordionHeader
            onClick={handleOpenAcc1}
            className='text-gray-400 hover:text-white'
          >
            Cos&apos;è JavaScript?
          </AccordionHeader>
          <AccordionBody className='text-white'>
            JavaScript è un linguaggio di programmazione dinamico, utilizzato
            principalmente per il web. È uno degli elementi chiave nello
            sviluppo di siti web interattivi, grazie alla sua capacità di
            eseguire script lato client, cioè direttamente nel browser
            dell&apos;utente. Questo consente di aggiornare dinamicamente
            contenuti, interagire con l&apos;utente e modificare l&apos;aspetto
            della pagina senza la necessità di ricaricarla.
            <br />
            Non solo è utilizzato nel front-end, ma anche nel back-end grazie
            all&apos;introduzione di tecnologie come Node.js, che consente di
            eseguire JavaScript anche lato server.
          </AccordionBody>
        </Accordion>

        <Accordion open={openAcc2}>
          <AccordionHeader
            onClick={handleOpenAcc2}
            className='text-gray-400 hover:text-white'
          >
            Perché JavaScript è importante nel web?
          </AccordionHeader>
          <AccordionBody className='text-white'>
            Senza JavaScript, il web sarebbe fatto di pagine statiche che non
            potrebbero rispondere alle azioni dell&apos;utente in tempo reale.
            JavaScript ha rivoluzionato la navigazione online, abilitando
            funzionalità come il caricamento asincrono dei contenuti, la
            validazione dei moduli in tempo reale, e l&apos;animazione degli
            elementi della pagina.
            <br />
            Inoltre, la sua versatilità è cresciuta nel tempo: grazie a
            framework e librerie come React, Angular, Vue.js ed Express.js,
            JavaScript è oggi utilizzato per creare sia interfacce utente (UI)
            sia applicazioni server-side, gestendo database, autenticazione e
            comunicazione in tempo reale.
          </AccordionBody>
        </Accordion>

        <Accordion open={openAcc3}>
          <AccordionHeader
            onClick={handleOpenAcc3}
            className='text-gray-400 hover:text-white'
          >
            Quali sono le principali caratteristiche di JavaScript?
          </AccordionHeader>
          <AccordionBody className='text-white'>
            Le principali caratteristiche di JavaScript sono:
            <ul>
              <li>
                <strong>Flessibilità:</strong> Supporta diversi paradigmi di
                programmazione (imperativo, orientato agli oggetti, funzionale),
                il che lo rende versatile per progetti diversi.
              </li>
              <li>
                <strong>Compatibilità con il browser:</strong> È eseguito
                direttamente nel browser, quindi ideale per lo sviluppo di
                applicazioni client-side.
              </li>
              <li>
                <strong>Asincronicità:</strong> Supporta l&apos;esecuzione
                asincrona tramite callback, Promises e `async/await`,
                migliorando l&apos;esperienza utente e le prestazioni.
              </li>
              <li>
                <strong>Accesso alle API Web:</strong> Permette di interagire
                con diverse API del browser, come la geolocalizzazione e la
                gestione di file locali.
              </li>
              <li>
                <strong>Facilità di apprendimento:</strong> La sintassi è
                semplice e ci sono numerose risorse per chi vuole imparare.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>

        <Accordion open={openAcc4}>
          <AccordionHeader
            onClick={handleOpenAcc4}
            className='text-gray-400 hover:text-white'
          >
            Come funziona JavaScript nel browser?
          </AccordionHeader>
          <AccordionBody className='text-white'>
            JavaScript viene eseguito nel browser dal motore JavaScript
            integrato (ad esempio, V8 in Chrome o SpiderMonkey in Firefox).
            Quando una pagina web viene caricata, il browser scarica il codice
            JavaScript e lo esegue. Ciò consente di interagire con la pagina in
            tempo reale senza doverla ricaricare. JavaScript può anche
            comunicare con il server tramite AJAX o Fetch API, permettendo
            aggiornamenti dinamici del contenuto della pagina senza interrompere
            l&apos;esperienza dell&apos;utente.
          </AccordionBody>
        </Accordion>

        <Accordion open={openAcc5}>
          <AccordionHeader
            onClick={handleOpenAcc5}
            className='text-gray-400 hover:text-white'
          >
            Quali sono le novità di ECMAScript 6 (ES6)?
          </AccordionHeader>
          <AccordionBody className='text-white'>
            ECMAScript 6 (ES6) ha introdotto numerose funzionalità che hanno
            migliorato notevolmente la produttività degli sviluppatori
            JavaScript. Tra le principali novità troviamo:
            <ul>
              <li>
                <strong>Arrow Functions:</strong> Sintassi più compatta e
                semplificata per le funzioni.
              </li>
              <li>
                <strong>let/const:</strong> Nuove parole chiave per dichiarare
                variabili, che offrono una gestione più sicura rispetto a{' '}
                <code>var</code>.
              </li>
              <li>
                <strong>Template Literals:</strong> Permettono di concatenare
                stringhe e variabili in modo più leggibile.
              </li>
              <li>
                <strong>Destructuring:</strong> Consente di estrarre facilmente
                valori da oggetti e array.
              </li>
              <li>
                <strong>Modules:</strong> Introduzione della modularizzazione
                del codice con le parole chiave <code>import</code> ed{' '}
                <code>export</code>.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  )
}
