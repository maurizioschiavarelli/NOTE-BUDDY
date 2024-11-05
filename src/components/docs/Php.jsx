import Navbar from '../Navbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import HeaderDocs from '../HeaderDocs';

export default function PhpHome() {
    return (
        <>
            <Navbar />

            <div className="flex">
                <Sidebar />
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