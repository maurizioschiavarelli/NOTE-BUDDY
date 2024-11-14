import { FaJsSquare } from "react-icons/fa"; 
import HeaderDocs from '../../HeaderDocs'
import { Helmet } from 'react-helmet'



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
} from '@heroicons/react/24/solid'
import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineIcon,
  Typography
} from '@material-tailwind/react'

export default function JavascriptHome () {
  return (
    <div className='containerGuides mb-12'>
      {/* Helmet per il SEO e link al CSS */}
      <Helmet>
        <title>Javascript | Panoramica</title>
      </Helmet>

      {/* Header della documentazione */}
      <HeaderDocs
        title='Guida completa alle basi teoriche di Javascript'
        icon={FaJsSquare}
        subTitle='Percorso della guida'
        description='Javascript è il principale linguaggio per lo sviluppo frontend. Con questa guida, imparerai a padroneggiare il linguaggio fino ad arrivare alla manipolazione del DOM.'
      />

      {/* Sezione di introduzione alla guida */}
      <div className='lg:w-3/4 w-11/12 m-auto h-auto my-10 lg:my-0 lg:mb-10'>
        <div className='list'>
          <h2 className='decoration-sky-600'>Cosa imparerai nella guida?</h2>
          <p>
            In questa guida, apprenderai le basi della programmazione
            utilizzando la sintassi di JavaScript. I concetti che esplorerai
            sono fondamentali per lavorare con JavaScript in vari ambienti di
            sviluppo.
          </p>

          <p>Al termine della guida, sarai in grado di:</p>

          <ul>
            <li>
              <strong>Implementare</strong> i tipi di dato di JavaScript, i
              metodi predefiniti e le variabili.
            </li>
            <li>
              <strong>Utilizzare</strong> le strutture condizionali per
              controllare il flusso di un programma in JavaScript.
            </li>
            <li>
              <strong>Creare</strong> funzioni e passare dati attraverso di esse
              in modo efficiente.
            </li>
            <li>
              <strong>Comprendere</strong> e utilizzare gli scope globali e a
              livello di blocco in JavaScript.
            </li>
            <li>
              <strong>Lavorare</strong> con gli array per memorizzare e gestire
              dati complessi.
            </li>
            <li>
              <strong>Utilizzare</strong> i cicli (loop) per eseguire blocchi di
              codice ripetutamente e automatizzare compiti.
            </li>
            <li>
              <strong>Semplificare</strong> l&apos;iterazione sugli array
              tramite metodi degli iteratori.
            </li>
            <li>
              <strong>Applicare</strong> la sintassi ES6 degli oggetti di
              JavaScript per modellare entità del mondo reale.
            </li>
          </ul>
        </div>
      </div>

      {/* Timeline degli argomenti della guida */}
      <div className='lg:w-3/4 w-11/12 m-auto h-auto my-10 lg:my-0'>
        <Timeline className='bg-gray-800 !text-xs'>
          {/* Introduzione a JavaScript */}
          <TimelineItem className='h-auto sm:h-36 lg:h-28 mb-6'>
            <TimelineHeader className='relative rounded-t-xl bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
              <TimelineIcon className='p-3' variant='ghost' color='green'>
                <CodeBracketIcon className='h-5 w-5 sm:h-6 sm:w-6' />
              </TimelineIcon>
              <div className='flex flex-col gap-1'>
                <Typography variant='h6'>Introduzione a JavaScript</Typography>
                <Typography variant='small' className='font-normal'>
                  Introduzione al linguaggio JavaScript, le sue origini e il suo
                  impiego nello sviluppo web.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          {/* Variabili e Tipi di Dato */}
          <TimelineItem className='h-auto sm:h-36 lg:h-28 mb-6'>
            <TimelineHeader className='relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
              <TimelineIcon className='p-3' variant='ghost' color='yellow'>
                <HashtagIcon className='h-5 w-5 sm:h-6 sm:w-6' />
              </TimelineIcon>
              <div className='flex flex-col gap-1'>
                <Typography variant='h6'>Variabili e Tipi di Dato</Typography>
                <Typography variant='small' className='font-normal'>
                  Esplorazione delle variabili e dei principali tipi di dato in
                  JavaScript (String, Number, Boolean, ecc.).
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          {/* Loop (Cicli) */}
          <TimelineItem className='h-auto sm:h-36 lg:h-28 mb-6'>
            <TimelineHeader className='relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
              <TimelineIcon className='p-3' variant='ghost' color='red'>
                <ArrowPathIcon className='h-5 w-5 sm:h-6 sm:w-6' />
              </TimelineIcon>
              <div className='flex flex-col gap-1'>
                <Typography variant='h6' color='white'>
                  Loop (Cicli)
                </Typography>
                <Typography
                  variant='small'
                  color='white'
                  className='font-normal'
                >
                  Come utilizzare cicli (for, while) per gestire iterazioni nei
                  programmi JavaScript.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          {/* Scope e Closures */}
          <TimelineItem className='h-auto sm:h-36 lg:h-28 mb-6'>
            <TimelineHeader className='relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
              <TimelineIcon className='p-3' variant='ghost' color='blue'>
                <PuzzlePieceIcon className='h-5 w-5 sm:h-6 sm:w-6' />
              </TimelineIcon>
              <div className='flex flex-col gap-1'>
                <Typography variant='h6' color='white'>
                  Scope e Closures
                </Typography>
                <Typography
                  variant='small'
                  color='white'
                  className='font-normal'
                >
                  La gestione dello scope in JavaScript e il concetto di closure
                  per la gestione delle variabili.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          {/* Eventi */}
          <TimelineItem className='h-auto sm:h-36 lg:h-28 mb-6'>
            <TimelineHeader className='relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
              <TimelineIcon className='p-3' variant='ghost' color='orange'>
                <DocumentIcon className='h-5 w-5 sm:h-6 sm:w-6' />
              </TimelineIcon>
              <div className='flex flex-col gap-1'>
                <Typography variant='h6' color='white'>
                  Eventi
                </Typography>
                <Typography
                  variant='small'
                  color='white'
                  className='font-normal'
                >
                  Come gestire eventi in JavaScript (click, change, submit,
                  etc.) per interazioni utente.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          {/* Asincronicità (Callback, Promises, async/await) */}
          <TimelineItem className='h-auto sm:h-36 lg:h-28 mb-6'>
            <TimelineHeader className='relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
              <TimelineIcon className='p-3' variant='ghost' color='green'>
                <ClockIcon className='h-5 w-5 sm:h-6 sm:w-6' />
              </TimelineIcon>
              <div className='flex flex-col gap-1'>
                <Typography variant='h6' color='white'>
                  Asincronicità (Callback, Promises, async/await)
                </Typography>
                <Typography
                  variant='small'
                  color='white'
                  className='font-normal'
                >
                  La gestione dell&apos;asincronicità in JavaScript, inclusi
                  callback, promesse e la sintassi async/await.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          {/* ES6 e Nuove Funzionalità */}
          <TimelineItem className='h-auto sm:h-36 lg:h-28 mb-6'>
            <TimelineHeader className='relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
              <TimelineIcon className='p-3' variant='ghost' color='purple'>
                <SparklesIcon className='h-5 w-5 sm:h-6 sm:w-6' />
              </TimelineIcon>
              <div className='flex flex-col gap-1'>
                <Typography variant='h6' color='white'>
                  ES6 e Nuove Funzionalità
                </Typography>
                <Typography
                  variant='small'
                  color='white'
                  className='font-normal'
                >
                  Introduzione alle nuove funzionalità di JavaScript con ES6:
                  arrow functions, classi, moduli e altro.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          {/* Modulo (import/export) */}
          <TimelineItem className='h-auto sm:h-36 lg:h-28 mb-6'>
            <TimelineHeader className='relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
              <TimelineIcon className='p-3' variant='ghost' color='blue'>
                <DocumentTextIcon className='h-5 w-5 sm:h-6 sm:w-6' />
              </TimelineIcon>
              <div className='flex flex-col gap-1'>
                <Typography variant='h6' color='white'>
                  Modulo (import/export)
                </Typography>
                <Typography
                  variant='small'
                  color='white'
                  className='font-normal'
                >
                  Come strutturare il codice usando moduli in JavaScript con
                  import/export.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          {/* Errori e Debugging */}
          <TimelineItem className='h-auto sm:h-36 lg:h-28 mb-6'>
            <TimelineHeader className='relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
              <TimelineIcon className='p-3' variant='ghost' color='indigo'>
                <ExclamationCircleIcon className='h-5 w-5 sm:h-6 sm:w-6' />
              </TimelineIcon>
              <div className='flex flex-col gap-1'>
                <Typography variant='h6' color='white'>
                  Errori e Debugging
                </Typography>
                <Typography
                  variant='small'
                  color='white'
                  className='font-normal'
                >
                  Come gestire gli errori in JavaScript con try-catch e come
                  fare il debug del codice.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          {/* Prototipi e Ereditarietà */}
          <TimelineItem className='h-auto sm:h-36 lg:h-28 mb-6'>
            <TimelineHeader className='relative bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
              <TimelineIcon className='p-3' variant='ghost' color='pink'>
                <PhoneIcon className='h-5 w-5 sm:h-6 sm:w-6' />
              </TimelineIcon>
              <div className='flex flex-col gap-1'>
                <Typography variant='h6' color='white'>
                  Prototipi e Ereditarietà
                </Typography>
                <Typography
                  variant='small'
                  color='white'
                  className='font-normal'
                >
                  Introduzione al concetto di prototipi e ereditarietà in
                  JavaScript.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          {/* Web APIs */}
          <TimelineItem className='h-auto sm:h-36 lg:h-28 mb-6'>
            <TimelineHeader className='relative rounded-b-xl bg-gray-900 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
              <TimelineIcon className='p-3' variant='ghost' color='teal'>
                <CubeIcon className='h-5 w-5 sm:h-6 sm:w-6' />
              </TimelineIcon>
              <div className='flex flex-col gap-1'>
                <Typography variant='h6' color='white'>
                  Web APIs (Fetch, LocalStorage, SessionStorage)
                </Typography>
                <Typography
                  variant='small'
                  color='white'
                  className='font-normal'
                >
                  Utilizzo delle Web APIs di JavaScript come Fetch, LocalStorage
                  e SessionStorage.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  )
}
