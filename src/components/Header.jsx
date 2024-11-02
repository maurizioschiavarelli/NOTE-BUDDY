import './Header.css';

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import Tailwind from '../assets/MyIcon';

const links = [
  { name: 'Javascript', to: '/javascript' },
  { name: 'Php', to: '#' },
  { name: 'React', to: '#' },
  { name: 'Laravel', to: '#' },
  { name: 'Bootstrap', to: '#' },
  { name: 'Tailwind', to: '#' },
]
const stats = [
  { name: 'Linguaggi web', value: '2' },
  { name: 'Framework', value: '4' },
  { name: 'Guide future', value: 'Unlimited' },
]

function Header() {

  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 from-10% to-gray-800 py-10 text-white">
        <div className="mx-auto max-w-3xl lg:max-w-7xl">
          <h2 className="text-center text-base/7 font-semibold text-white">noteBuddy</h2>
          <p className="mx-auto mt-2 max-w-3xl text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Guida completa alle basi dei principali linguaggi per lo sviluppo web
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 max-lg:text-center">
                    La nostra piattaforma è ottimizzata per dispositivi mobili, garantendo un esperienza utente fluida e accessibile ovunque tu sia.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-300 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Performance
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                    La nostra piattaforma è progettata per offrire prestazioni elevate, garantendo tempi di caricamento rapidi e un esperienza utente senza interruzioni
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs bg-gray-300 rounded-md p-4"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-gray-800"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Security
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                    La sicurezza dei tuoi dati è la nostra priorità. Utilizziamo le migliori pratiche per proteggere le tue informazioni.
                  </p>
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] w-full object-cover object-center bg-gray-300 rounded-md"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Learning
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                    Tutte le guide per i principali linguaggi e framework per lo sviluppo web
                  </p>
                </div>
                <div className="relative min-h-[30rem] flex justify-center">
                  <ul className='text-black flex flex-col my-8 px-10 gap-4'>
                    <li>
                      <button className='h-14 w-full px-14 text-white rounded bg-gray-700 shadow font-extrabold flex items-center justify-center'><FontAwesomeIcon icon={faJs} size="3x" className='mx-3' />
                      Javascript
                      </button>
                    </li>
                    <li><button className='h-14 w-full px-14 text-white rounded bg-gray-700 shadow font-extrabold flex items-center justify-center'><FontAwesomeIcon icon={faPhp} size="3x" className='mx-3' />PhP</button></li>
                    <li><button className='h-14 w-full px-14 text-white rounded bg-gray-700 shadow font-extrabold flex items-center justify-center'><FontAwesomeIcon icon={faReact} size="3x" className='mx-3' />React</button></li>
                    <li><button className='h-14 w-full px-14 text-white rounded bg-gray-700 shadow font-extrabold flex items-center justify-center'><FontAwesomeIcon icon={faLaravel} size="3x" className='mx-3' />Laravel</button></li>
                    <li><button className='h-14 w-full px-14 text-white rounded bg-gray-700 shadow font-extrabold flex items-center justify-center'><FontAwesomeIcon icon={faBootstrap} size="3x" className='mx-3' />Bootstrap</button></li>
                    <li><button className='h-14 w-full px-14 text-white rounded bg-gray-700 shadow font-extrabold flex items-center justify-center'><Tailwind />Tailwind</button></li>
                    <li><button className='h-14 w-full px-14 text-white rounded bg-gray-700 shadow font-extrabold flex items-center justify-center'>Altri in arrivo</button></li>
                  </ul>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-gray-900 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#462611] to-[#e4b20f] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ad552c] to-[#a05c0d] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">noteBuddy</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              Trova le guide per i principali linguaggi e framework per lo sviluppo web
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link key={link.name} to={link.to}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

    </>
  );
}

export default Header;
