import Navbar from '../Navbar';
import Footer from '../Footer';

import fotoProfilo from '../../assets/fotoProfilo.jpeg';

export default function Example() {
    return (
        <>
            <Navbar></Navbar>

            <main className="pt-8 lg:pt-16 bg-gradient-to-b from-gray-900 from-1% to-gray-800">
                <div className="flex px-4 mx-auto max-w-screen-xl">
                    <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-8 lg:mb-12">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-white">
                                    <img className="mr-4 w-20 h-20 rounded-full" src={fotoProfilo} alt="Maurizio Schiavarelli"></img>
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-white">Maurizio Schiavarelli</a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">Studente di eLearning e sviluppatore web</p>
                                        <p className="text-base text-gray-500 dark:text-gray-400"><time title="November 11th, 2024">Nov. 11, 2024</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white lg:mb-6 lg:text-5xl">Benvenuti nel mio sito di eLearning noteBuddy</h1>
                        </header>
                        <p className="lead text-lg text-white mb-4">
                            Ciao! Sono Maurizio Schiavarelli, uno studente di programmazione appassionato di sviluppo web. Questo sito nasce come un luogo dove posso condividere le risorse che ho creato durante il mio percorso di apprendimento, con l&apos;obiettivo di aiutare altre persone a imparare e migliorare le proprie competenze di programmazione.
                        </p>
                        <p className="text-lg text-white mb-4">
                            Al momento, sto studiando framework di sviluppo frontend come React e Vue.js, ma nel mio sito puoi trovare una raccolta di guide e risorse su una varietà di tecnologie, tra cui Laravel, JavaScript, PHP, React, Bootstrap e Tailwind CSS. Questo progetto è il frutto di mesi di studio e di tentativi pratici, ed è stato progettato per essere una risorsa utile per chiunque voglia imparare a programmare o approfondire le proprie conoscenze.
                        </p>
                        <p className="text-lg text-white mb-4">
                            Se sei un principiante o un programmatore esperto, qui troverai guide passo-passo, esempi di codice, e consigli pratici su come utilizzare le tecnologie più moderne nel campo dello sviluppo web.
                        </p>
                        <figure className="my-6">
                            <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="foto di esempio" className="mx-auto rounded-lg shadow-lg"></img>
                            <figcaption className="text-gray-400 font-light text-center">La mia foto</figcaption>
                        </figure>

                        <h2 className="my-8 text-3xl font-bold text-white">Chi sono?</h2>
                        <p className="text-lg text-white mb-4">
                            Sono nato il 21 novembre 1995 e attualmente sono uno studente presso Aulab, una scuola che mi sta permettendo di approfondire i miei studi e diventare uno sviluppatore web completo. La mia passione per la programmazione è iniziata sin dalle scuole superiori, quando ho cominciato a esplorare il mondo del coding da autodidatta. Da allora, ho deciso di dedicarmi al miglioramento delle mie competenze tecniche e allo sviluppo di applicazioni web moderne.
                        </p>
                        <p className="text-lg text-white mb-4">
                            Mi occupo principalmente di sviluppo frontend, ma ho una buona conoscenza anche delle tecnologie backend. In particolare, al momento mi sto concentrando su framework come React e Vue.js per migliorare l&apos;esperienza utente nelle applicazioni web. Inoltre, sono appassionato di Laravel, PHP, e JavaScript, che sono alla base delle applicazioni che sviluppo nel mio tempo libero.
                        </p>

                        <h2 className="my-8 text-3xl font-bold text-white">Cosa puoi trovare su questo sito</h2>
                        <p className="text-lg text-white mb-4">
                            Questo sito è il mio spazio personale dove condivido le risorse che creo mentre studio e lavoro su nuovi progetti. Al momento, puoi trovare delle guide complete su alcune delle tecnologie più popolari e utili per lo sviluppo web moderno:
                        </p>
                        <ul className="list-disc pl-8 text-lg text-white mb-4">
                            <li>Laravel</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                        </ul>
                        <p className="text-lg text-white mb-4">
                            Ogni guida è progettata per essere facile da seguire, con esempi pratici e spiegazioni dettagliate. Se sei un principiante, troverai risorse introduttive, mentre se hai già esperienza, potrai approfittare di tutorial avanzati per migliorare ulteriormente le tue competenze.
                        </p>

                        <h3 className="my-8 text-2xl font-semibold text-white">Progetti in corso</h3>
                        <p className="text-lg text-white mb-4">
                            Attualmente, sto lavorando a diversi progetti di sviluppo che includono l&apos;uso dei framework React e Vue.js. Oltre alle guide, voglio creare delle applicazioni pratiche per mettere in mostra le mie competenze in azione. Se sei curioso di vedere cosa sto costruendo, continua a seguire il sito per aggiornamenti!
                        </p>

                        {/*                                    */}

                        <h3 className="my-8 text-2xl font-semibold text-white">La mia filosofia di apprendimento</h3>
                        <p className="text-lg text-white mb-4">
                            Credo fermamente che la programmazione sia una skill che si acquisisce praticando, sbagliando e migliorando continuamente. Ogni giorno cerco di imparare qualcosa di nuovo, di risolvere problemi e di affrontare nuove sfide. Questo sito rappresenta la mia visione di condividere la conoscenza: l&apos;apprendimento non è mai un processo solitario, ma un&apos;opportunità per aiutare gli altri mentre si cresce insieme.
                        </p>

                        <h4 className="my-8 text-xl font-semibold text-white">Collaborazioni</h4>
                        <p className="text-lg text-white mb-4">
                            Se sei un altro sviluppatore, un insegnante o un appassionato di tecnologia, sarò felice di collaborare. Puoi contattarmi per scambiare idee, fare domande o discutere di progetti futuri. Credo che il miglior modo di crescere sia confrontarsi con gli altri e imparare dalle esperienze reciproche.
                        </p>

                        <blockquote className="my-8 p-6 bg-gray-800 text-white italic rounded-lg shadow-lg">
                            <p>“L&apos;apprendimento è un viaggio, e questo sito è il mio modo di condividere quel viaggio con voi.”</p>
                        </blockquote>

                        <h4 className="my-8 text-xl font-semibold text-white">Come utilizzare le risorse di questo sito</h4>
                        <p className="text-lg text-white mb-4">
                            Per cominciare a usare le risorse del sito, basta navigare tra le varie guide disponibili. Ogni tutorial è strutturato per fornirti una comprensione passo-passo, partendo dalle basi fino ad arrivare a concetti più avanzati. Puoi anche scaricare gli esempi di codice per testarli direttamente sul tuo ambiente di sviluppo.
                        </p>

                        <h2 className="my-8 text-3xl font-bold text-white">Contattami</h2>
                        <p className="text-lg text-white mb-4">
                            Se hai domande o vuoi entrare in contatto con me, puoi raggiungermi tramite il mio indirizzo email: <a href="mailto:maurizioschiavarelli@gmail.com" className="text-blue-400 underline"> maurizioschiavarelli@gmail.com</a> o sui miei profili social. Sarò felice di rispondere a qualsiasi curiosità o suggerimento!
                        </p>
                    </article>
                </div>

                <section>
                    <div className="max-w-screen-3xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                                I miei progetti
                            </h2>
                            <p className="mt-4 text-base font-normal text-white sm:text-xl dark:text-gray-400">
                                Progetti realizzati con competenza e attenzione ai dettagli per supportare la crescita e l&apos;apprendimento di tutte le teconologie web.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 md:grid-cols-2 xl:grid-cols-4">

                            <div className="space-y-4">
                                <span className="bg-gray-900 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                    Portfolio Front-end
                                </span>
                                <h3 className="text-2xl font-bold leading-tight text-white">
                                    Portfolio Personale
                                </h3>
                                <p className="text-lg font-normal text-white dark:text-gray-400">
                                    Un portfolio interattivo creato con JavaScript, HTML e CSS per mostrare le mie competenze e progetti. Il sito include una navigazione fluida, design reattivo e una presentazione dinamica delle mie abilità.
                                </p>
                            </div>


                            <div className="space-y-4">
                                <span className="bg-gray-900 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                    Aulab - Presto.it
                                </span>
                                <h3 className="text-2xl font-bold leading-tight text-white">
                                    Presto.it - Sistema di prenotazione
                                </h3>
                                <p className="text-lg font-normal text-white dark:text-gray-400">
                                    Un progetto backend sviluppato con Laravel per un sistema di prenotazione online. Il sistema consente agli utenti di prenotare appuntamenti in modo semplice ed efficiente, con una gestione avanzata delle disponibilità.
                                </p>
                            </div>


                            <div className="space-y-4">
                                <span className="bg-gray-900 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                    Do Travel
                                </span>
                                <h3 className="text-2xl font-bold leading-tight text-white">
                                    Do Travel - Piattaforma di viaggio
                                </h3>
                                <p className="text-lg font-normal text-white dark:text-gray-400">
                                    Un&apos;applicazione web per la gestione di viaggi, sviluppata con Laravel per il backend e un framework front-end moderno per una UI reattiva e intuitiva. Gli utenti possono esplorare destinazioni, prenotare voli e alloggi, e pianificare itinerari personalizzati.
                                </p>
                            </div>


                            <div className="space-y-4">
                                <span className="bg-gray-900 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                    Fallout Terminale
                                </span>
                                <h3 className="text-2xl font-bold leading-tight text-white">
                                    Terminale Fallout - Replica
                                </h3>
                                <p className="text-lg font-normal text-white dark:text-gray-400">
                                    Un progetto che replica l&apos;interfaccia del terminale del gioco Fallout, sviluppato in JavaScript. Questo progetto ha lo scopo di simulare l&apos;esperienza utente di un terminale classico, con comandi e interazioni ispirati al famoso gioco.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer></Footer>
        </>
    )
}
