import { SiTailwindcss } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { FaLaravel } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaPhp } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Card from '../Card'

import '../Hero.css'

export default function Docs () {
  return (
    <>
      <Navbar />

      <div className='flex flex-wrap gap-6 py-10 sm:py-10 m-auto justify-center bg-gradient-to-b from-gray-900 from-1% to-gray-800 text-black'>
        <Card
          className='buttonGlowJs'
          title='JAVASCRIPT'
          subTitle='Il linguaggio del web'
          description='Scopri la guida completa per apprendere le nozioni fondamentali di JavaScript, il linguaggio essenziale per lo sviluppo frontend. Impara a manipolare il DOM, gestire eventi e costruire applicazioni interattive.'
          Icon={IoLogoJavascript}
          iconClassName='bg-gray-900 rounded-xs w-full h-full transition hover:text-yellow-400'
          link='/Javascript/Panoramica'
        />

        <Card
          className='buttonGlowPhp'
          title='PHP'
          subTitle='Scripting lato server'
          description='Impara a dominare PHP, il linguaggio di scripting lato server, con questa guida dettagliata. Gestisci database, sessioni utente e crea applicazioni web dinamiche e scalabili.'
          Icon={FaPhp}
          iconClassName='bg-gray-900 rounded-xs w-full h-full hover:text-blue-700'
          link='/Php'
        />

        <Card
          className='buttonGlowReact'
          title='REACT'
          subTitle='Costruisci interfacce utente'
          description="Un'introduzione approfondita a React, la libreria JavaScript per creare interfacce utente moderne. Impara a progettare componenti riutilizzabili, gestire lo stato e utilizzare gli hook."
          Icon={FaReact}
          iconClassName='bg-gray-900 rounded-xs w-full h-full transition hover:text-light-blue-700'
          link='/React'
        />

        <Card
          className='buttonGlowLaravel'
          title='LARAVEL'
          subTitle='Framework PHP moderno'
          description='Esplora Laravel, uno dei framework PHP più avanzati per la creazione di applicazioni web scalabili. Impara a gestire routing, controller, migrazioni e altre funzionalità avanzate.'
          Icon={FaLaravel}
          iconClassName='bg-gray-900 rounded-xs w-full h-full transition hover:text-red-700'
          link='/Laravel'
        />

        <Card
          className='buttonGlowBootstrap'
          title='BOOTSTRAP'
          subTitle='Design reattivo'
          description='Impara ad utilizzare Bootstrap, il framework CSS che semplifica la creazione di siti web reattivi. Scopri come realizzare layout moderni, flessibili e componenti riutilizzabili.'
          Icon={FaBootstrap}
          iconClassName='bg-gray-900 rounded-xs w-full h-full transition hover:text-purple-700'
          link='/Bootstrap'
        />

        <Card
          className='buttonGlowTailwind'
          title='TAILWIND'
          subTitle='Utility-first CSS'
          description='Scopri Tailwind CSS, il framework utility-first che ti permette di creare interfacce utente personalizzate in modo rapido ed efficiente. Impara a usare le classi di utilità per uno stile flessibile e moderno.'
          Icon={SiTailwindcss}
          iconClassName='bg-gray-900 rounded-xs w-full h-full transition hover:text-light-blue-400'
          link='/Tailwind'
        />
      </div>

      <Footer />
    </>
  )
}
