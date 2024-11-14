import { SiTailwindcss } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { FaLaravel } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaPhp } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'

import './Hero.css'

import { useEffect } from 'react';

import responsiveImg from '../assets/responsiveImg.png'
import { Link } from 'react-router-dom'



export default function Hero () {

  useEffect(() => {
    const handleScroll = () => {
      const title = document.getElementById('title');
      if (window.scrollY > 500) {
        title.style.opacity = 0;
      } else {
        title.style.opacity = 1;
      }
    };

    // Aggiungi l'evento scroll
    window.addEventListener('scroll', handleScroll);

    // Rimuovi l'evento quando il componente viene smontato
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Contenitore principale della sezione HERO
    <div className='bg-gradient-to-b from-1% from-gray-900 to-gray-800 py-10 text-white'>
      <div className='mx-5 md:mx-auto max-w-2xl lg:max-w-7xl lg:mx-auto'>
        {/* Sezione titolo */}
        <div id="title" className='top-20 sticky my-52 pb-10 title h-full' onScroll={scroll}>
          <h1 className='font-semibold text-4xl text-center noteBuddyH1'>
            noteBuddy
          </h1>
          <p className='mx-auto mt-2 max-w-3xl font-semibold text-4xl text-balance text-center text-gray-950 sm:text-5xl tracking-tight'>
            Guida completa alle basi dei principali linguaggi per lo sviluppo
            web
          </p>
        </div>

        {/* Sezione contenitore "mobile friendly", "Performance", "Security", "Learning" */}
        <div className='gap-4 grid lg:grid-cols-3 lg:grid-rows-2 mt-10 sm:mt-16'>
          {/* Sezione "mobile friendly" */}
          <div className='relative lg:row-span-2 overflow-hidden hero'>
            <div className='absolute inset-px bg-gray-800 rounded-lg lg:rounded-l-[2rem]'></div>
            <div className='relative flex flex-col h-full overflow-hidden'>
              <div className='px-8 sm:px-10 pt-8 sm:pt-10 pb-3 sm:pb-0 rounded'>
                <p className='mt-2 font-medium text-gray-950 text-lg max-lg:text-center tracking-tight'>
                  Mobile friendly
                </p>
                <p className='mt-2 max-w-lg text-sm/6 max-lg:text-center'>
                  La nostra piattaforma è ottimizzata per dispositivi mobili,
                  garantendo un&apos;esperienza utente fluida e accessibile
                  ovunque tu sia.
                </p>
              </div>
              <div className='[container-type:inline-size] relative max-lg:mx-auto w-full max-lg:max-w-sm min-h-[30rem] grow'>
                <div className='top-10 bottom-0 absolute inset-x-10 border-gray-300 border-x-[1cqw] bg-gray-900 shadow-2xl border-t-[1cqw] rounded-t-[12cqw] overflow-hidden'>
                  <img
                    className='object-top object-cover size-full'
                    src={responsiveImg}
                    alt='Immagine dimostrativa del sito responsive'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sezione "Performance" */}
          <div className='relative max-lg:row-start-1 overflow-hidden hero'>
            <div className='absolute inset-px bg-gray-800 rounded-lg max-lg:rounded-t-[2rem]'></div>
            <div className='relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] h-full overflow-hidden'>
              <div className='px-8 sm:px-10 pt-8 sm:pt-10'>
                <p className='mt-2 font-medium text-gray-950 text-lg max-lg:text-center tracking-tight'>
                  Performance
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-white max-lg:text-center'>
                  La nostra piattaforma è progettata per offrire prestazioni
                  elevate, garantendo tempi di caricamento rapidi e
                  un&apos;esperienza utente senza interruzioni.
                </p>
              </div>
              <div className='flex flex-1 justify-center items-end'>
                <img
                  className='bg-gray-300 mt-4 p-4 rounded-md w-full max-lg:max-w-xs'
                  src='https://tailwindui.com/plus/img/component-images/bento-03-performance.png'
                  alt='Immagine rappresentativa delle prestazioni'
                />
              </div>
            </div>
          </div>

          {/* Sezione "Security" */}
          <div className='relative lg:col-start-2 max-lg:row-start-3 lg:row-start-2 overflow-hidden hero'>
            <div className='absolute inset-px bg-gray-800 rounded-lg'></div>
            <div className='relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] h-full overflow-hidden'>
              <div className='px-8 sm:px-10 pt-8 sm:pt-10'>
                <p className='mt-2 font-medium text-gray-950 text-lg max-lg:text-center tracking-tight'>
                  Security
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-white max-lg:text-center'>
                  La sicurezza dei tuoi dati è la nostra priorità. Utilizziamo
                  le migliori pratiche per proteggere le tue informazioni.
                </p>
              </div>
              <div className='flex flex-1 items-end'>
                <img
                  className='bg-gray-300 mt-4 rounded-md w-full h-[min(152px,40cqw)] object-center object-cover'
                  src='https://tailwindui.com/plus/img/component-images/bento-03-security.png'
                  alt='Immagine rappresentativa della sicurezza'
                />
              </div>
            </div>
          </div>

          {/* Sezione "Learning" */}
          <div className='relative lg:row-span-2 overflow-hidden hero'>
            <div className='absolute inset-px bg-gray-800 rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]'></div>
            <div className='relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] h-full overflow-hidden'>
              <div className='px-8 sm:px-10 pt-8 sm:pt-10 pb-3 sm:pb-0'>
                <p className='mt-2 font-medium text-gray-950 text-lg max-lg:text-center tracking-tight'>
                  Learning
                </p>
                <p className='mt-2 mb-10 max-w-lg text-sm/6 text-white max-lg:text-center'>
                  Scopri le guide complete per i principali linguaggi di
                  programmazione e framework, sia per il frontend che per il
                  backend. Le nostre risorse coprono ogni aspetto, dai concetti
                  di base fino alle tecniche avanzate.
                </p>
              </div>

              {/* Sezione dei pulsanti di collegamento */}
              <div className='align-bottom flex justify-center min-h-[30rem]'>
                <ul className='flex flex-col gap-4 px-10 text-black'>
                  <li>
                    <Link to='/Javascript/Panoramica'>
                      <button className='flex justify-center items-center bg-gray-700 hover:bg-blue-gray-50 shadow-2xl px-12 sm:px-28 md:px-36 lg:px-20 rounded rounded-t-2xl w-full h-14 font-extrabold text-white hover:text-yellow-400 transition buttonGlowJs'>
                      <IoLogoJavascript className='text-5xl mr-3'/>
                        Javascript
                      </button>
                    </Link>
                  </li>
                  <li>
                    <button className='flex justify-center items-center bg-gray-700 hover:bg-blue-gray-50 shadow-2xl px-12 sm:px-28 md:px-24 lg:px-20 rounded w-full h-14 font-extrabold text-white hover:text-blue-900 transition buttonGlowPhp'>
                      <FaPhp className='text-5xl mr-3'/>
                      PhP
                    </button>
                  </li>
                  <li>
                    <button className='flex justify-center items-center bg-gray-700 hover:bg-blue-gray-50 shadow-2xl px-12 sm:px-28 md:px-24 lg:px-20 rounded w-full h-14 font-extrabold text-white hover:text-light-blue-700 transition buttonGlowReact'>
                      <FaReact className='text-5xl mr-3'/>
                      React
                    </button>
                  </li>
                  <li>
                    <button className='flex justify-center items-center bg-gray-700 hover:bg-blue-gray-50 shadow-2xl px-12 sm:px-28 md:px-24 lg:px-20 rounded w-full h-14 font-extrabold text-white hover:text-red-700 transition buttonGlowLaravel'>
                      <FaLaravel className='text-5xl mr-3'/>
                      Laravel
                    </button>
                  </li>
                  <li>
                    <button className='flex justify-center items-center bg-gray-700 hover:bg-blue-gray-50 shadow-2xl px-12 sm:px-28 md:px-24 lg:px-20 rounded w-full h-14 font-extrabold text-white hover:text-purple-700 transition buttonGlowBootstrap'>
                      <FaBootstrap className='text-5xl mr-3'/>
                      Bootstrap
                    </button>
                  </li>
                  <li>
                    <button className='flex justify-center items-center bg-gray-700 hover:bg-blue-gray-50 shadow-2xl px-12 sm:px-28 md:px-24 lg:px-20 rounded w-full h-14 font-extrabold text-white hover:text-light-blue-600 transition buttonGlowTailwind'>
                      <SiTailwindcss className='text-5xl mr-3'/>
                      Tailwind
                    </button>
                  </li>
                  <li>
                    <button className='flex justify-center items-center bg-gray-700 hover:bg-blue-gray-50 shadow-2xl mb-8 px-12 sm:px-28 md:px-24 lg:px-20 rounded rounded-b-2xl w-full h-14 font-extrabold text-white hover:text-gray-900 transition buttonGlow'>
                      Altri in arrivo
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
