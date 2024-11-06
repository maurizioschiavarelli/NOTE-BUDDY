import Navbar from '../Navbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import HeaderDocs from '../HeaderDocs';

import {
  CodeBracketIcon,
  HashtagIcon,
  PuzzlePieceIcon,
  ArrowPathIcon,
  ClockIcon,
  SparklesIcon,
  DocumentIcon,
  ExclamationCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineIcon,
  TimelineConnector,
  Typography
} from "@material-tailwind/react";

const javascriptLinks = [
  { name: '• Javascript', to: '/javascript' },
  { name: 'Introduzione a JavaScript', to: '/jsintroduzione' },
  { name: 'Variabili', to: '/javascript/variabili' },
  { name: 'Tipi di Dato', to: '/javascript/tipi-dato' },
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

export default function Javascript() {
  return (
    <>
      <Navbar />

      <div className="flex bg-gray-800">
        <Sidebar
          links={javascriptLinks}
          home="Javascript"
          currentPage="Javascript home"
        />
        <div className="flex-1">
          <HeaderDocs
            title="Guida completa alle basi teoriche di"
            imgUrl="/src/assets/heroImg.jpg"
            subTitle="Javascript"
            description="è il principale linguaggio per lo sviluppo frontend. Con questa guida, imparerai a padroneggiare il linguaggio fino ad arrivare alla manipolazione del DOM."
          />
          <div className="lg:w-3/4 w-11/12 m-auto h-auto my-10 lg:my-0">
            <Timeline className="bg-gray-800">
              {/* JavaScript Basics */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector />
                <TimelineHeader className="relative rounded-t-xl bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="yellow">
                    <CodeBracketIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Introduction to JavaScript </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Introduzione al linguaggio JavaScript, le sue origini e il suo impiego nello sviluppo web.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Variables, Data Types */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="yellow">
                    <HashtagIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Variables and Data Types </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Esplorazione delle variabili e dei principali tipi di dato in JavaScript (String, Number, Boolean, ecc.).
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Functions */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="blue">
                    <PuzzlePieceIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Functions and Scope </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Le funzioni in JavaScript, la loro definizione e l importanza del concetto di scope e closure.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Loops and Conditionals */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="red">
                    <ArrowPathIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Loops and Conditionals </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Come utilizzare cicli (for, while) e strutture condizionali (if-else) per il flusso logico del programma.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Asynchronous JavaScript (Callbacks, Promises) */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="green">
                    <ClockIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Asynchronous JavaScript </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      La gestione dell asincronicità in JavaScript, inclusi callback, promesse e la sintassi async/await.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* ES6 Features (Arrow Functions, Classes, Modules) */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="purple">
                    <SparklesIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> ES6 Features </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Introduzione alle nuove funzionalità di JavaScript con ES6: arrow functions, classi, moduli e altro.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* DOM Manipulation */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="orange">
                    <DocumentIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> DOM Manipulation </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Manipolazione del DOM per interagire dinamicamente con il contenuto di una pagina web.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Error Handling and Debugging */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="indigo">
                    <ExclamationCircleIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Error Handling & Debugging </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Come gestire gli errori in JavaScript con try-catch e come fare il debug del codice.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Advanced Topics (Web APIs, Frameworks, etc.) */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineHeader className="relative rounded-b-xl bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="pink">
                    <PhoneIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Advanced JavaScript (Web APIs, Frameworks) </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Approfondimento su Web APIs, frameworks JavaScript e tecniche avanzate per lo sviluppo web.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
