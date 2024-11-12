import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Helmet } from 'react-helmet';
import HeaderDocs from '../../HeaderDocs';
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function JavascriptTipiDiDato() {

    const tipiDiDato = {
        numberExample: `
          // Esempio di Number
          let numeroIntero = 42;
          let numeroDecimale = 23.42;
          console.log(numeroIntero);  // 42
          console.log(numeroDecimale); // 23.42
        `,
        bigIntExample: `
          // Esempio di BigInt
          let grandeNumero = 1234567890123456n;
          console.log(grandeNumero); // 1234567890123456n
        `,
        stringExample: `
          // Esempio di String
          let saluto = 'Ciao, mondo!';
          let linguaggio = "JavaScript";
          console.log(saluto);    // Ciao, mondo!
          console.log(linguaggio); // JavaScript
        `,
        booleanExample: `
          // Esempio di Boolean
          let isJavaScriptFun = true;
          let isJavaScriptDifficult = false;
          console.log(isJavaScriptFun);      // true
          console.log(isJavaScriptDifficult); // false
        `,
        nullExample: `
          // Esempio di Null
          let vuoto = null;
          console.log(vuoto); // null
        `,
        undefinedExample: `
          // Esempio di Undefined
          let nonInizializzato;
          console.log(nonInizializzato); // undefined
        `,
        symbolExample: `
          // Esempio di Symbol
          let uniqueSymbol = Symbol('id');
          let person = {
            name: 'Alice',
            [uniqueSymbol]: '12345'
          };
          console.log(person[uniqueSymbol]); // 12345
        `,
        objectExample: `
          // Esempio di Object
          let persona = {
            nome: 'Bob',
            eta: 30,
            saluta: function() {
              console.log('Ciao, sono ' + this.nome);
            }
          };
          console.log(persona.nome); // Bob
          persona.saluta();          // Ciao, sono Bob
        `
    };


    const [openAcc1, setOpenAcc1] = React.useState(false);
    const [openAcc2, setOpenAcc2] = React.useState(false);
    const [openAcc3, setOpenAcc3] = React.useState(false);
    const [openAcc4, setOpenAcc4] = React.useState(false);
    const [openAcc5, setOpenAcc5] = React.useState(false);
    const [openAcc6, setOpenAcc6] = React.useState(false);
    const [openAcc7, setOpenAcc7] = React.useState(false);
    const [openAcc8, setOpenAcc8] = React.useState(false);
    const [openAcc9, setOpenAcc9] = React.useState(false);
    const [openAcc10, setOpenAcc10] = React.useState(false);

    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
    const handleOpenAcc4 = () => setOpenAcc4((cur) => !cur);
    const handleOpenAcc5 = () => setOpenAcc5((cur) => !cur);
    const handleOpenAcc6 = () => setOpenAcc6((cur) => !cur);
    const handleOpenAcc7 = () => setOpenAcc7((cur) => !cur);
    const handleOpenAcc8 = () => setOpenAcc8((cur) => !cur);
    const handleOpenAcc9 = () => setOpenAcc9((cur) => !cur);
    const handleOpenAcc10 = () => setOpenAcc10((cur) => !cur);

    return (
        <>
            <div className="containerGuides">
                {/* Impostazioni Helmet per il titolo della pagina */}
                <Helmet>
                    <link rel="stylesheet" type="text/css" href="/src/components/Guides.css" />
                    <title>Javascript | Tipi di dato</title>
                </Helmet>

                {/* Header della documentazione */}
                <HeaderDocs
                    title="Tipi di Dato in JavaScript"
                    imgUrl="/src/assets/heroImg.jpg"  // Assicurati di avere un'immagine pertinente ai tipi di dato
                    subTitle="Esploriamo i principali tipi di dato in JavaScript"
                    description="In JavaScript, esistono otto tipi di dato fondamentali che formano la base di qualsiasi applicazione. Scopriamo insieme come e quando utilizzare ciascun tipo di dato, dai numeri alle stringhe, fino agli oggetti e simboli."
                />


                {/* Sezione del contenuto principale */}
                <div className="lg:w-3/4 w-11/12 m-auto h-auto my-10 lg:my-0 lg:mb-10 list">
                    <h2>Tipi di Dato in JavaScript</h2>
                    <p>
                        In <strong>JavaScript</strong>, esistono <strong>8 tipi di dato fondamentali</strong> che vengono
                        utilizzati per classificare le informazioni. Questi tipi di dato sono la base su cui costruire tutta
                        la logica del tuo codice. Ecco una panoramica di questi tipi di dato:
                    </p>

                    <ul>
                        <li>
                            <strong>Number</strong>: Rappresenta qualsiasi tipo di numero, che sia intero o con decimali.
                            <p>Esempio di utilizzo:</p>
                            <div className="flex justify-center items-center mb-6">
                                <SyntaxHighlighter language="javascript" style={nightOwl} className="rounded-lg m-auto text-center w-80 sm:w-full">
                                    {tipiDiDato.numberExample}
                                </SyntaxHighlighter>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <strong>BigInt</strong>: Si utilizza per numeri che vanno oltre il limite dei numeri tradizionali.
                            <p>Esempio di utilizzo:</p>
                            <div className="flex justify-center items-center mb-6">
                                <SyntaxHighlighter language="javascript" style={nightOwl} className="rounded-lg m-auto text-center w-80 sm:w-full">
                                    {tipiDiDato.bigIntExample}
                                </SyntaxHighlighter>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <strong>String</strong>: Una sequenza di caratteri racchiusa tra virgolette singole o doppie.
                            <p>Esempio di utilizzo:</p>
                            <div className="flex justify-center items-center mb-6">
                                <SyntaxHighlighter language="javascript" style={nightOwl} className="rounded-lg m-auto text-center w-80 sm:w-full">
                                    {tipiDiDato.stringExample}
                                </SyntaxHighlighter>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <strong>Boolean</strong>: Questo tipo di dato ha due possibili valori: <span>true</span> o <span>false</span>.
                            <p>Esempio di utilizzo:</p>
                            <div className="flex justify-center items-center mb-6">
                                <SyntaxHighlighter language="javascript" style={nightOwl} className="rounded-lg m-auto text-center w-80 sm:w-full">
                                    {tipiDiDato.booleanExample}
                                </SyntaxHighlighter>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <strong>Null</strong>: Rappresenta l&apos;assenza intenzionale di un valore.
                            <p>Esempio di utilizzo:</p>
                            <div className="flex justify-center items-center mb-6">
                                <SyntaxHighlighter language="javascript" style={nightOwl} className="rounded-lg m-auto text-center w-80 sm:w-full">
                                    {tipiDiDato.nullExample}
                                </SyntaxHighlighter>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <strong>Undefined</strong>: Indica che una variabile esiste, ma non è stata inizializzata con un valore.
                            <p>Esempio di utilizzo:</p>
                            <div className="flex justify-center items-center mb-6">
                                <SyntaxHighlighter language="javascript" style={nightOwl} className="rounded-lg m-auto text-center w-80 sm:w-full">
                                    {tipiDiDato.undefinedExample}
                                </SyntaxHighlighter>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <strong>Symbol</strong>: Un identificatore unico, utilizzato principalmente per creare proprietà uniche in oggetti.
                            <p>Esempio di utilizzo:</p>
                            <div className="flex justify-center items-center mb-6">
                                <SyntaxHighlighter language="javascript" style={nightOwl} className="rounded-lg m-auto text-center w-80 sm:w-full">
                                    {tipiDiDato.symbolExample}
                                </SyntaxHighlighter>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <strong>Object</strong>: Una raccolta di dati strutturata in coppie di chiavi e valori.
                            <p>Esempio di utilizzo:</p>
                            <div className="flex justify-center items-center mb-6">
                                <SyntaxHighlighter language="javascript" style={nightOwl} className="rounded-lg m-auto text-center w-80 sm:w-full">
                                    {tipiDiDato.objectExample}
                                </SyntaxHighlighter>
                            </div>
                        </li>
                        <hr />
                    </ul>

                    <p>
                        <strong>Nota:</strong> I primi 7 tipi di dato sono definiti come <strong>tipi primitivi</strong>, mentre gli
                        oggetti sono più complessi e ti consentiranno di creare strutture più articolate nel tuo codice.
                    </p>

                    <p>
                        Quando inizierai a esplorare i concetti di oggetti, vedrai che sarai in grado di creare collezioni
                        complesse di dati e gestirle in modo più efficiente. Gli oggetti sono fondamentali in JavaScript per
                        rappresentare strutture dati più complesse, come gli utenti, le impostazioni di un&apos;app, ecc.
                    </p>

                    <p>
                        Prima di entrare nei dettagli sugli oggetti, è utile partire dalle basi con <strong>numeri</strong> e
                        <strong> stringhe</strong>, che sono i tipi di dato con cui lavorerai di più all&apos;inizio. Una solida
                        comprensione di questi ti aiuterà a costruire una base forte per proseguire con argomenti più avanzati
                        come gli oggetti e le funzioni.
                    </p>
                    <hr />
                    <h3>Domande sui tipi di dato</h3>
                    <Accordion open={openAcc1}>
                        <AccordionHeader onClick={handleOpenAcc1} className='text-gray-400 hover:text-white'>
                            Quali sono i tipi di dato primitivi in JavaScript?
                        </AccordionHeader>
                        <AccordionBody className="text-white">
                            In JavaScript, ci sono 7 tipi di dato primitivi: <strong>Number</strong>, <strong>BigInt</strong>, <strong>String</strong>, <strong>Boolean</strong>, <strong>Null</strong>, <strong>Undefined</strong>, e <strong>Symbol</strong>. Questi tipi rappresentano valori semplici e sono immutabili.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={openAcc2}>
                        <AccordionHeader onClick={handleOpenAcc2} className='text-gray-400 hover:text-white'>
                            Che cos&apos;è il tipo di dato Number in JavaScript?
                        </AccordionHeader>
                        <AccordionBody className="text-white">
                            Il tipo <strong>Number</strong> in JavaScript rappresenta sia numeri interi che numeri con decimali (numeri a virgola mobile). Esempi: <code>42</code>, <code>3.14</code>, <code>-100</code>. Può anche rappresentare valori speciali come <code>Infinity</code> e <code>NaN</code> (Not a Number).
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={openAcc3}>
                        <AccordionHeader onClick={handleOpenAcc3} className='text-gray-400 hover:text-white'>
                            Che cos&apos;è BigInt in JavaScript e come si usa?
                        </AccordionHeader>
                        <AccordionBody className="text-white">
                            <strong>BigInt</strong> è un tipo di dato che consente di rappresentare numeri interi superiori alla capacità del tipo Number. È utile per lavorare con numeri che eccedono la portata di un numero intero tradizionale. Per definire un BigInt, basta aggiungere <code>n</code> alla fine del numero, ad esempio <code>1234567890123456n</code>.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={openAcc4}>
                        <AccordionHeader onClick={handleOpenAcc4} className='text-gray-400 hover:text-white'>
                            Qual è la differenza tra Null e Undefined?
                        </AccordionHeader>
                        <AccordionBody className="text-white">
                            Sia <strong>Null</strong> che <strong>Undefined</strong> rappresentano l&apos;assenza di un valore, ma in contesti diversi. <strong>Null</strong> viene assegnato esplicitamente per indicare l&apos;assenza di un valore, mentre <strong>Undefined</strong> è il valore predefinito di variabili o parametri non inizializzati.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={openAcc5}>
                        <AccordionHeader onClick={handleOpenAcc5} className='text-gray-400 hover:text-white'>
                            Che cos&apos;è il tipo di dato Boolean in JavaScript?
                        </AccordionHeader>
                        <AccordionBody className="text-white">
                            Un <strong>Boolean</strong> è un tipo di dato logico che può assumere uno dei due valori: <code>true</code> o <code>false</code>. È utilizzato per test condizionali e confronti.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={openAcc6}>
                        <AccordionHeader onClick={handleOpenAcc6} className='text-gray-400 hover:text-white'>
                            Che cos&apos;è il tipo di dato String in JavaScript?
                        </AccordionHeader>
                        <AccordionBody className="text-white">
                            Una <strong>Stringa</strong> è una sequenza di caratteri usata per rappresentare del testo in JavaScript. Le stringhe possono essere create racchiudendo il testo tra virgolette singole <code>&apos;ciao&apos;</code>, doppie <code>&quot;mondo&quot;</code>, o backtick <code>`template`</code>.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={openAcc7}>
                        <AccordionHeader onClick={handleOpenAcc7} className='text-gray-400 hover:text-white'>
                            Che cos&apos;è il tipo di dato Symbol in JavaScript?
                        </AccordionHeader>
                        <AccordionBody className="text-white">
                            Un <strong>Symbol</strong> è un identificatore unico e immutabile, utilizzato principalmente per creare chiavi uniche in oggetti. I Symbol vengono utilizzati quando si desidera evitare conflitti nei nomi delle proprietà degli oggetti.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={openAcc8}>
                        <AccordionHeader onClick={handleOpenAcc8} className='text-gray-400 hover:text-white'>
                            Che cos&apos;è il tipo di dato Object in JavaScript?
                        </AccordionHeader>
                        <AccordionBody className="text-white">
                            Un <strong>Oggetto</strong> è una raccolta di coppie chiave-valore. Può contenere valori di tipi diversi, inclusi altri oggetti. Gli oggetti sono utilizzati per rappresentare entità del mondo reale come utenti, prodotti o configurazioni.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={openAcc9}>
                        <AccordionHeader onClick={handleOpenAcc9} className='text-gray-400 hover:text-white'>
                            Qual è la differenza tra tipi di dato primitivi e non primitivi in JavaScript?
                        </AccordionHeader>
                        <AccordionBody className="text-white">
                            La principale differenza è che i tipi primitivi (come <code>Number</code>, <code>String</code>, <code>Boolean</code>) sono immutabili e vengono confrontati in base al loro valore, mentre i tipi non primitivi (come <code>Object</code>, <code>Array</code>) sono mutabili e vengono confrontati in base al riferimento.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={openAcc10}>
                        <AccordionHeader onClick={handleOpenAcc10} className='text-gray-400 hover:text-white'>
                            Come posso verificare il tipo di un valore in JavaScript?
                        </AccordionHeader>
                        <AccordionBody className="text-white">
                            Puoi usare l&apos;operatore <code>typeof</code> per verificare il tipo di un valore. Ad esempio:
                            <pre><code>typeof 42 // &apos;number&apos;</code></pre>
                            <pre><code>typeof &apos;ciao&apos; // &apos;string&apos;</code></pre>
                            <pre><code>typeof true // &apos;boolean&apos;</code></pre>
                            In questo modo, puoi determinare facilmente il tipo di variabili e valori.
                        </AccordionBody>
                    </Accordion>

                </div>


            </div>
        </>
    );
}
