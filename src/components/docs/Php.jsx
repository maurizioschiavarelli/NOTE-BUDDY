import Navbar from '../Navbar ';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import HeaderDocs from '../HeaderDocs'; // Assicurati di importare il componente HeaderDocs

const phpLinks = [
    { name: 'tizio', to: '/javascript/variabili' },
    { name: 'Tipi di caio', to: '/javascript/tipi-di-dati' },
    { name: 'asdffdsafdsa', to: '/javascript/funzioni' },
    { name: 'ddsfdsfadfsadf', to: '/javascript/dom' },
];

export default function JavascriptPage() {
    return (
        <>
            <Navbar />

            <div className="flex">
                <Sidebar links={phpLinks} />
                <div className="flex-1">
                    <HeaderDocs
                        title="Guida completa alle basi teoriche di"
                        imgUrl="/src/assets/heroImg.jpg"
                        subTitle="PHP"
                        description=" é un linguaggio di scripting lato server fondamentale per lo sviluppo web backend. Con questa guida, imparerai i concetti di base di PHP, inclusa la gestione dei database, la creazione di sessioni, e lo sviluppo di applicazioni web dinamiche."
                    />
                </div>
            </div>

            <Footer />
        </>
    );
}






