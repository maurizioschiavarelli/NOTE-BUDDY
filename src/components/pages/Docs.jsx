import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Card";

export default function Docs() {
    return (
        <>
            <Navbar></Navbar>

            <div className='flex flex-wrap gap-6 py-10 sm:py-10 m-auto justify-center bg-gradient-to-b from-gray-900 from-1% to-gray-800 text-white'>
                <Card
                    title="JAVASCRIPT"
                    subTitle="Il linguaggio del web"
                    description="La guida definitiva per imparare a conoscere le nozioni base di questo linguaggio fondamentale per lo sviluppo frontend. Scopri come manipolare il DOM, gestire eventi e creare applicazioni interattive."
                    imgUrl="../src/assets/Javascript.png"
                    link="/Javascript">
                </Card>

                <Card
                    title="PHP"
                    subTitle="Scripting lato server"
                    description="La guida completa per padroneggiare PHP, il linguaggio di scripting lato server. Impara a gestire database, creare sessioni e sviluppare applicazioni web dinamiche."
                    imgUrl="../src/assets/php.png"
                    link="/Php">
                </Card>

                <Card
                    title="REACT"
                    subTitle="Costruisci interfacce utente"
                    description="Un'introduzione approfondita a React, la libreria JavaScript per la costruzione di interfacce utente. Scopri come creare componenti riutilizzabili, gestire lo stato e utilizzare gli hook."
                    imgUrl="../src/assets/REACT.png">
                </Card>

                <Card
                    title="LARAVEL"
                    subTitle="Framework PHP moderno"
                    description="La guida essenziale per imparare Laravel, il framework PHP per lo sviluppo di applicazioni web. Esplora routing, controller, migrazioni e molto altro per creare applicazioni robuste e scalabili."
                    imgUrl="../src/assets/laravel.png">
                </Card>

                <Card
                    title="BOOTSTRAP"
                    subTitle="Design reattivo"
                    description="Impara a utilizzare Bootstrap, il framework CSS più popolare per lo sviluppo di siti web reattivi e moderni. Scopri come creare layout flessibili e componenti riutilizzabili."
                    imgUrl="../src/assets/bootstrap.png">
                </Card>

                <Card
                    title="TAILWIND"
                    subTitle="Utility-first CSS"
                    description="Scopri Tailwind CSS, il framework di utility-first per creare rapidamente interfacce utente personalizzate. Impara a utilizzare le classi di utilità per stilizzare i tuoi progetti in modo efficiente."
                    imgUrl="../src/assets/tailwind.jpg">
                </Card>
            </div>


            <Footer></Footer>
        </>

    )
}