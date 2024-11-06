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
  DocumentTextIcon,
  CubeIcon
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
          currentPage="Argomenti"
        />
        <div className="flex-1">
          <HeaderDocs
            title="Guida completa alle basi teoriche di"
            imgUrl="/src/assets/heroImg.jpg"
            subTitle="Javascript"
            description="è il principale linguaggio per lo sviluppo frontend. Con questa guida, imparerai a padroneggiare il linguaggio fino ad arrivare alla manipolazione del DOM."
          />
          <div className='lg:w-3/4 w-11/12 m-auto h-auto my-10 lg:my-0 lg:mb-10 text-white'>
            <div className="course-description">
              <h2 className="text-3xl font-semibold mb-4">Cosa imparerai nella guida?</h2>
              <p className="text-lg mb-6">
                In questa guida, apprenderai le basi della programmazione utilizzando la sintassi di JavaScript. I concetti che esplorerai sono fondamentali per lavorare con JavaScript in vari ambienti di sviluppo.
              </p>

              <p className="text-lg mb-4 font-medium">Al termine della guida, sarai in grado di:</p>

              <ul className="list-inside list-disc text-lg space-y-3">
                <li className="pl-4">Implementare i tipi di dato di JavaScript, i metodi predefiniti e le variabili.</li>
                <li className="pl-4">Utilizzare le strutture condizionali per controllare il flusso di un programma in JavaScript.</li>
                <li className="pl-4">Creare funzioni e passare dati attraverso di esse in modo efficiente.</li>
                <li className="pl-4">Comprendere e utilizzare gli scope globali e a livello di blocco in JavaScript.</li>
                <li className="pl-4">Lavorare con gli array per memorizzare e gestire dati complessi.</li>
                <li className="pl-4">Utilizzare i cicli (loop) per eseguire blocchi di codice ripetutamente e automatizzare compiti.</li>
                <li className="pl-4">Semplificare l&apos;iterazione sugli array tramite metodi degli iteratori.</li>
                <li className="pl-4">Applicare la sintassi ES6 degli oggetti di JavaScript per modellare entità del mondo reale.</li>
              </ul>
            </div>
          </div>

          <div className="lg:w-3/4 w-11/12 m-auto h-auto my-10 lg:my-0">
            <Timeline className="bg-gray-800">
              {/* Introduzione a JavaScript */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector />
                <TimelineHeader className="relative rounded-t-xl bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="yellow">
                    <CodeBracketIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Introduzione a JavaScript </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Introduzione al linguaggio JavaScript, le sue origini e il suo impiego nello sviluppo web.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Variabili e Tipi di Dato */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="yellow">
                    <HashtagIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Variabili e Tipi di Dato </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Esplorazione delle variabili e dei principali tipi di dato in JavaScript (String, Number, Boolean, ecc.).
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Loop (Cicli) */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="red">
                    <ArrowPathIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Loop (Cicli) </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Come utilizzare cicli (for, while) per gestire iterazioni nei programmi JavaScript.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Scope e Closures */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="blue">
                    <PuzzlePieceIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Scope e Closures </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      La gestione dello scope in JavaScript e il concetto di closure per la gestione delle variabili.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Eventi */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="orange">
                    <DocumentIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Eventi </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Come gestire eventi in JavaScript (click, change, submit, etc.) per interazioni utente.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Asincronicità (Callback, Promises, async/await) */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="green">
                    <ClockIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Asincronicità (Callback, Promises, async/await) </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      La gestione dell&apos;asincronicità in JavaScript, inclusi callback, promesse e la sintassi async/await.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* ES6 e Nuove Funzionalità */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="purple">
                    <SparklesIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> ES6 e Nuove Funzionalità </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Introduzione alle nuove funzionalità di JavaScript con ES6: arrow functions, classi, moduli e altro.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Modulo (import/export) */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="blue">
                    <DocumentTextIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Modulo (import/export) </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Come strutturare il codice usando moduli in JavaScript con import/export.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Errori e Debugging */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="indigo">
                    <ExclamationCircleIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Errori e Debugging </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Come gestire gli errori in JavaScript con try-catch e come fare il debug del codice.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Prototipi e Ereditarietà */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineConnector />
                <TimelineHeader className="relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="pink">
                    <PhoneIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Prototipi e Ereditarietà </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Introduzione al concetto di prototipi e ereditarietà in JavaScript.
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>

              {/* Web APIs */}
              <TimelineItem className="h-40 sm:h-36 lg:h-28">
                <TimelineHeader className="relative rounded-b-xl bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost" color="teal">
                    <CubeIcon className="h-5 w-5" />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="white"> Web APIs (Fetch, LocalStorage, SessionStorage) </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      Utilizzo delle Web APIs di JavaScript come Fetch, LocalStorage e SessionStorage.
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
