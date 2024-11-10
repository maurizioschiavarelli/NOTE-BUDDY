import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Card";

export default function Docs() {
    return (
        <>
            <Navbar />

            <div className='flex flex-wrap gap-6 py-10 sm:py-10 m-auto justify-center bg-gradient-to-b from-gray-900 from-1% to-gray-800 text-white'>
                <Card
                    title="JAVASCRIPT"
                    subTitle="Il linguaggio del web"
                    description="Scopri la guida completa per apprendere le nozioni fondamentali di JavaScript, il linguaggio essenziale per lo sviluppo frontend. Impara a manipolare il DOM, gestire eventi e costruire applicazioni interattive."
                    imgUrl="../src/assets/Javascript.png"
                    link="/Javascript"
                />

                <Card
                    title="PHP"
                    subTitle="Scripting lato server"
                    description="Impara a dominare PHP, il linguaggio di scripting lato server, con questa guida dettagliata. Gestisci database, sessioni utente e crea applicazioni web dinamiche e scalabili."
                    imgUrl="../src/assets/php.png"
                    link="/Php"
                />

                <Card
                    title="REACT"
                    subTitle="Costruisci interfacce utente"
                    description="Un'introduzione approfondita a React, la libreria JavaScript per creare interfacce utente moderne. Impara a progettare componenti riutilizzabili, gestire lo stato e utilizzare gli hook."
                    imgUrl="../src/assets/REACT.png"
                    link="/React"
                />

                <Card
                    title="LARAVEL"
                    subTitle="Framework PHP moderno"
                    description="Esplora Laravel, uno dei framework PHP più avanzati per la creazione di applicazioni web scalabili. Impara a gestire routing, controller, migrazioni e altre funzionalità avanzate."
                    imgUrl="../src/assets/laravel.png"
                    link="/Laravel"
                />

                <Card
                    title="BOOTSTRAP"
                    subTitle="Design reattivo"
                    description="Impara ad utilizzare Bootstrap, il framework CSS che semplifica la creazione di siti web reattivi. Scopri come realizzare layout moderni, flessibili e componenti riutilizzabili."
                    imgUrl="../src/assets/bootstrap.png"
                    link="/Bootstrap"
                />

                <Card
                    title="TAILWIND"
                    subTitle="Utility-first CSS"
                    description="Scopri Tailwind CSS, il framework utility-first che ti permette di creare interfacce utente personalizzate in modo rapido ed efficiente. Impara a usare le classi di utilità per uno stile flessibile e moderno."
                    imgUrl="../src/assets/tailwind.jpg"
                    link="/Tailwind"
                />
            </div>

            <Footer />
        </>
    );
}
