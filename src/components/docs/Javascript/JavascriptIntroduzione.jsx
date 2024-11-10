import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Sidebar from '../../Sidebar';
import HeaderDocs from '../../HeaderDocs';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';



import jsHtmlCss from '../../../assets/jsHtmlCss.png';

const javascriptLinks = [
  { name: 'JavaScript', to: '/javascript' },
  { name: 'Introduzione a JavaScript', to: '/javascriptIntroduzione' },
  { name: 'Variabili', to: '/javascript/variabili' },
  { name: 'Tipi di Dato', to: '/JavascriptTipiDiDati' },
  { name: 'Operatori', to: '/javascript/operatori' },
  { name: 'Strutture di Controllo', to: '/javascript/strutture-controllo' },
  { name: 'Funzioni', to: '/javascript/funzioni' },
  { name: 'Oggetti', to: '/javascript/oggetti' },
  { name: 'Array', to: '/javascript/array' },
  { name: 'Loop (Cicli)', to: '/javascript/loop' },
  { name: 'Scope e Closures', to: '/javascript/scope-closures' },
  { name: 'Eventi', to: '/javascript/eventi' },
  { name: 'Asincronicità (Callback, Promises, async/await)', to: '/javascript/asincronicita' },
  { name: 'Manipolazione del DOM', to: '/javascript/manipolazione-dom' },
  { name: 'ES6 e Nuove Funzionalità', to: '/javascript/es6' },
  { name: 'Modulo (import/export)', to: '/javascript/modulo' },
  { name: 'Errori e Debugging', to: '/javascript/errori-debugging' },
  { name: 'Gestione degli Errori (try-catch)', to: '/javascript/gestione-errori' },
  { name: 'Funzioni Arrow', to: '/javascript/funzioni-arrow' },
  { name: 'Destructuring', to: '/javascript/destructuring' },
  { name: 'Template Literals', to: '/javascript/template-literals' },
  { name: 'Higher-order Functions', to: '/javascript/higher-order-functions' },
  { name: 'Prototipi e Ereditarietà', to: '/javascript/prototipi-ereditarieta' },
  { name: 'Modifiche al Prototipo (Prototype Chain)', to: '/javascript/prototype-chain' },
  { name: 'This in JavaScript', to: '/javascript/this' },
  { name: 'Classi (ES6)', to: '/javascript/classi' },
  { name: 'Mappe e Set', to: '/javascript/mappe-set' },
  { name: 'JSON', to: '/javascript/json' },
  { name: 'Web APIs (Fetch, LocalStorage, SessionStorage)', to: '/javascript/web-apis' },
  { name: 'Performance e Ottimizzazione', to: '/javascript/performance' },
  { name: 'Testing in JavaScript', to: '/javascript/testing' },
  { name: 'Patterns di Design', to: '/javascript/design-patterns' }
];

export default function JSintroduzione() {
  const codeString = `
    <script>
      let message = "Ciao, mondo!";
      console.log(message);
    </script>   
    //output Ciao mondo!
  `;

  const codeString1 = `
    <script>
      let name = "John"; // Stringa
      const age = 30;    // Numero intero
      let isStudent = true; // Booleano
    </script>`;

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar links={javascriptLinks} home="JavaScript" currentPage="Introduzione" />

        <div className="flex-1 bg-gray-800 text-white">
          <HeaderDocs
            title="Introduzione a JavaScript"
            imgUrl="/src/assets/heroImg.jpg"
            subTitle="Che cosa è JavaScript"
            description="JavaScript è un linguaggio di programmazione utilizzato per creare applicazioni web interattive. Esso rende i siti web più dinamici e reattivi."
          />

          <div className="lg:w-3/4 w-11/12 m-auto h-auto my-10 lg:my-0 lg:mb-10">
            {/* Sezione: Cos'è JavaScript */}
            <section>
              <h2 className="text-3xl font-semibold text-blue-400 mb-4">Cos&apos;è JavaScript?</h2>
              <p className="text-lg mb-6">
                JavaScript è uno dei linguaggi di programmazione più diffusi per lo sviluppo web. Viene eseguito nel browser, permettendo di creare esperienze utente dinamiche e interattive.
              </p>

              <img src={jsHtmlCss} alt="Esempio di codice JavaScript" className="my-6 w-full h-auto" />
            </section>

            <hr className="border-t-2 border-gray-600 mb-6" />

            {/* Sezione: Perché JavaScript è importante */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Perché JavaScript è importante?</h3>
              <p className="text-lg mb-6">
                Senza JavaScript, i siti web sarebbero semplici pagine statiche. JavaScript ha trasformato il web, permettendo l&apos;interattività in tempo reale.
              </p>
            </section>

            <hr className="border-t-2 border-gray-600 mb-6" />

            {/* Sezione: Le caratteristiche principali di JavaScript */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Le caratteristiche principali di JavaScript</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong className="text-orange-400">Flessibilità:</strong> Supporta diversi paradigmi di programmazione.</li>
                <li><strong className="text-orange-400">Compatibilità con il browser:</strong> Eseguito direttamente nel browser.</li>
                <li><strong className="text-orange-400">Asincronicità:</strong> Esecuzione di operazioni asincrone con AJAX.</li>
                <li><strong className="text-orange-400">Facilità di apprendimento:</strong> La sintassi è semplice e la documentazione abbondante.</li>
              </ul>
            </section>

            <hr className="border-t-2 border-gray-600 mb-6" />

            {/* Codice esempio 1 */}
            <section>
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Esempio di dichiarazione di variabili in JavaScript</h4>
              <div className="flex justify-center items-center mb-6">
                <SyntaxHighlighter language="javascript" style={nightOwl} className="rounded-lg m-auto text-center w-80 sm:w-full">
                  {codeString1}
                </SyntaxHighlighter>
              </div>
            </section>

            <hr className="border-t-2 border-gray-600 mb-6" />

            {/* Sezione: Storia e evoluzione di JavaScript */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Storia e evoluzione di JavaScript</h3>
              <p className="text-lg mb-6">
                Creato nel 1995 da Brendan Eich, JavaScript è diventato il linguaggio principale per lo sviluppo di pagine web interattive, grazie agli standard ECMAScript.
              </p>
            </section>

            <hr className="border-t-2 border-gray-600 mb-6" />

            {/* Come funziona JavaScript */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Come funziona JavaScript?</h3>
              <p className="text-lg mb-6">
                JavaScript viene eseguito nel browser come codice client-side. Questo permette di eseguire funzioni dinamiche senza ricaricare la pagina.
              </p>
            </section>

            <hr className="border-t-2 border-gray-600 mb-6" />

            {/* Esempio base di codice JavaScript */}
            <section>
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Un esempio base di codice JavaScript</h4>
              <div className="flex justify-center items-center mb-6">
                <SyntaxHighlighter language="javascript" style={nightOwl} className="rounded-lg w-80 sm:w-full">
                  {codeString}
                </SyntaxHighlighter>
              </div>
              <p className="text-lg mb-6">
                In questo esempio, JavaScript crea una variabile chiamata <code className="text-orange-400">message</code> e visualizza un alert con il messaggio &quot;Ciao, mondo!&quot;.
              </p>
            </section>

            <hr className="border-t-2 border-gray-600 mb-6" />

            {/* Sezione: JavaScript e la Manipolazione del DOM */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">JavaScript e la Manipolazione del DOM</h3>
              <p className="text-lg mb-6">
                JavaScript permette di manipolare dinamicamente il DOM, modificando il contenuto e lo stile degli elementi HTML senza ricaricare la pagina.
              </p>
              <img
                src="https://via.placeholder.com/800x400.png?text=DOM+Manipulation+Example"
                alt="Esempio di manipolazione del DOM"
                className="my-6 w-full h-auto"
              />
            </section>

            <hr className="border-t-2 border-gray-600 mb-6" />

            {/* Sezione: JavaScript nel Web moderno */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">JavaScript nel Web moderno</h3>
              <p className="text-lg mb-6">
                Oggi, JavaScript è utilizzato anche nel back-end con Node.js e per costruire librerie come React, Vue.js e Angular.
              </p>
            </section>

            <hr className="border-t-2 border-gray-600 mb-6" />

            {/* Sezione: Le nuove funzionalità di JavaScript (ES6+) */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Le nuove funzionalità di JavaScript (ES6+)</h3>
              <p className="text-lg mb-6">
                ES6 ha introdotto nuove funzionalità come le <strong className="text-orange-400">Arrow Functions</strong>, <strong className="text-orange-400">let/const</strong>, e <strong className="text-orange-400">template literals</strong> che hanno migliorato la produttività degli sviluppatori.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong className="text-orange-400">Arrow Functions:</strong> Sintassi compatta per le funzioni.</li>
                <li><strong className="text-orange-400">let/const:</strong> Gestione migliorata delle variabili.</li>
                <li><strong className="text-orange-400">Template literals:</strong> Concatenazione di stringhe semplificata.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
