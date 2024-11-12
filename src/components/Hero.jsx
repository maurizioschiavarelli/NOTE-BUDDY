import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import Tailwind from '../assets/MyIcon';

import responsiveImg from '../assets/responsiveImg.png';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (

        // Contenitore principale della sezione HERO
        <div className="bg-gradient-to-b from-gray-900 from-1% to-gray-800 py-10 text-white">

            <div className="mx-auto max-w-2xl lg:max-w-7xl">

                {/* Sezione titolo */}
                <h1 className="text-center text-4xl font-semibold text-white">noteBuddy</h1>
                <p className="mx-auto mt-2 max-w-3xl text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                    Guida completa alle basi dei principali linguaggi per lo sviluppo web
                </p>

                {/* Sezione contenitore "mobile friendly", "Performance", "Security", "Learning" */}
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

                    {/* Sezione "mobile friendly" */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Mobile friendly
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 max-lg:text-center">
                                    La nostra piattaforma è ottimizzata per dispositivi mobili, garantendo un&apos;esperienza utente fluida e accessibile ovunque tu sia.
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-300 bg-gray-900 shadow-2xl">
                                    <img
                                        className="size-full object-cover object-top"
                                        src={responsiveImg}
                                        alt="Immagine dimostrativa del sito responsive"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sezione "Performance" */}
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Performance
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                                    La nostra piattaforma è progettata per offrire prestazioni elevate, garantendo tempi di caricamento rapidi e un&apos;esperienza utente senza interruzioni.
                                </p>
                            </div>
                            <div className="flex flex-1 items-end justify-center">
                                <img
                                    className="w-full max-lg:max-w-xs bg-gray-300 rounded-md p-4 mt-4"
                                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                    alt="Immagine rappresentativa delle prestazioni"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sezione "Security" */}
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
                            <div className="flex flex-1 items-end">
                                <img
                                    className="h-[min(152px,40cqw)] w-full object-cover object-center bg-gray-300 rounded-md mt-4"
                                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                    alt="Immagine rappresentativa della sicurezza"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sezione "Learning" */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Learning
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center mb-10">
                                    Scopri le guide complete per i principali linguaggi di programmazione e framework, sia per il frontend che per il backend. Le nostre risorse coprono ogni aspetto, dai concetti di base fino alle tecniche avanzate.
                                </p>
                            </div>

                            {/* Sezione dei pulsanti di collegamento */}
                            <div className="min-h-[30rem] flex justify-center align-bottom mt-8">
                                <ul className='text-black flex flex-col px-10 gap-4'>
                                    <li>
                                        <Link to="/Javascript/Panoramica">
                                            <button className='h-14 w-full px-12 sm:px-28 md:px-36 lg:px-20 text-white rounded bg-gray-700 shadow-2xl font-extrabold flex items-center justify-center transition hover:bg-blue-gray-50 hover:text-yellow-400 rounded-t-2xl'>
                                                <FontAwesomeIcon icon={faJs} size="3x" className='mr-2' />
                                                Javascript
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <button className='h-14 w-full px-12 sm:px-28 md:px-24 lg:px-20 text-white rounded bg-gray-700 shadow-2xl font-extrabold flex items-center justify-center transition hover:bg-blue-gray-50  hover:text-blue-900'>
                                            <FontAwesomeIcon icon={faPhp} size="3x" className='mr-4' />
                                            PhP
                                        </button>
                                    </li>
                                    <li>
                                        <button className='h-14 w-full px-12 sm:px-28 md:px-24 lg:px-20 text-white rounded bg-gray-700 shadow-2xl font-extrabold flex items-center justify-center transition hover:bg-blue-gray-50 hover:text-light-blue-700'>
                                            <FontAwesomeIcon icon={faReact} size="3x" className='mr-2' />
                                            React
                                        </button>
                                    </li>
                                    <li>
                                        <button className='h-14 w-full px-12 sm:px-28 md:px-24 lg:px-20 text-white rounded bg-gray-700 shadow-2xl font-extrabold flex items-center justify-center transition hover:bg-blue-gray-50 hover:text-red-700'>
                                            <FontAwesomeIcon icon={faLaravel} size="3x" className='mr-2' />
                                            Laravel
                                        </button>
                                    </li>
                                    <li>
                                        <button className='h-14 w-full px-12 sm:px-28 md:px-24 lg:px-20 text-white rounded bg-gray-700 shadow-2xl font-extrabold flex items-center justify-center transition hover:bg-blue-gray-50 hover:text-purple-700'>
                                            <FontAwesomeIcon icon={faBootstrap} size="3x" className='mr-2' />
                                            Bootstrap
                                        </button>
                                    </li>
                                    <li>
                                        <button className='h-14 w-full px-12 sm:px-28 md:px-24 lg:px-20 text-white rounded bg-gray-700 shadow-2xl font-extrabold flex items-center justify-center transition hover:bg-blue-gray-50 hover:text-light-blue-600'>
                                            <Tailwind />
                                            Tailwind
                                        </button>
                                    </li>
                                    <li>
                                        <button className='h-14 w-full px-12 sm:px-28 md:px-24 lg:px-20 text-white rounded bg-gray-700 shadow-2xl font-extrabold flex items-center justify-center transition hover:bg-blue-gray-50 hover:text-gray-900 rounded-b-2xl'>
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
    );
}
