import HeaderDocs from '../../HeaderDocs'
import { Helmet } from 'react-helmet'
import { FaJsSquare } from 'react-icons/fa'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function JavascriptOperatori () {
  const codeString1 = `console.log(3 + 4); // Stampa 7
console.log(5 - 1); // Stampa 4
console.log(4 * 2); // Stampa 8
console.log(9 / 3); // Stampa 3`

  const codeString2 = `console.log(5 - 1); // Stampa 4
console.log(4 * 2); // Stampa 8
console.log(9 / 3); // Stampa 3`

  const codeString3 = `console.log(11 % 3); // Stampa 2
console.log(12 % 3); // Stampa 0
`

  return (
    <>
      <div className='containerGuides mb-12'>
        <Helmet>
          <title>Javascript | Operatori</title>
        </Helmet>

        <HeaderDocs
          title='Operatori in JavaScript'
          icon={FaJsSquare}
          subTitle='Una panoramica sugli operatori fondamentali di JavaScript'
          description='In questa guida, esploreremo i vari tipi di operatori in JavaScript, come gli operatori matematici per somme e sottrazioni, gli operatori di comparazione per confrontare valori, e gli operatori logici per la gestione delle condizioni.'
        />

        <div className='lg:w-3/4 w-11/12 m-auto h-auto my-10 lg:my-0 lg:mb-10 list'>
          <h2>Cosa sono gli operatori aritmetici in Javascript</h2>
          <p>
            Gli operatori aritmetici sono tra i concetti fondamentali in
            programmazione. In JavaScript, vengono utilizzati per eseguire
            operazioni matematiche sui numeri, come addizioni, sottrazioni,
            moltiplicazioni e divisioni. Comprendere come usarli correttamente è
            essenziale per poter lavorare con variabili numeriche, effettuare
            calcoli e manipolare i dati nei programmi. JavaScript fornisce
            diversi operatori aritmetici che puoi utilizzare per effettuare
            queste operazioni. Gli operatori aritmetici più comuni in JavaScript
            sono:
            <ul>
              <li>
                <strong>Aggiungere (+)</strong>: somma di due numeri.
              </li>
              <li>
                <strong>Sottrarre (-)</strong>: sottrazione di un numero da un
                altro.
              </li>
              <li>
                <strong>Moltiplicare (*)</strong>: moltiplicazione di due
                numeri.
              </li>
              <li>
                <strong>Dividere (/)</strong>: divisione di un numero per un
                altro.
              </li>
              <li>
                <strong>Resto (%)</strong>: restituisce il resto della divisione
                tra due numeri.
              </li>
            </ul>
            Ecco alcuni esempi di codice che illustrano come utilizzare questi
            operatori:
            <SyntaxHighlighter
              language='javascript'
              style={nightOwl}
              className='rounded-lg m-auto text-center w-80 sm:w-full'
            >
              {codeString1}
            </SyntaxHighlighter>
            Questi operatori funzionano come ti aspetteresti. Ad esempio, quando
            sommi 3 e 4 con l&apos;operatore `+`, JavaScript restituirà il
            risultato di 7. Allo stesso modo, quando sottrai 1 da 5, otterrai 4.
            Vediamo anche un esempio di divisione e moltiplicazione:
            <SyntaxHighlighter
              language='javascript'
              style={nightOwl}
              className='rounded-lg m-auto text-center w-80 sm:w-full'
            >
              {codeString2}
            </SyntaxHighlighter>
            Oltre a questi operatori di base, JavaScript offre anche
            l&apos;operatore di resto (`%`), noto anche come operatore modulo.
            Questo restituisce il resto della divisione di due numeri. Ad
            esempio, quando dividi 11 per 3, il risultato è 3 con un resto di 2,
            perché 3 entra in 11 tre volte, con 2 come resto. Ecco un esempio:
            <SyntaxHighlighter
              language='javascript'
              style={nightOwl}
              className='rounded-lg m-auto text-center w-80 sm:w-full'
            >
              {codeString3}
            </SyntaxHighlighter>
            In questi esempi, possiamo vedere come il risultato della divisione
            di 11 per 3 restituisce 2 come resto (perché 3 entra in 11 tre
            volte, lasciando 2). Nel secondo caso, 12 diviso 3 non ha resto,
            quindi il risultato è 0. Utilizzando questi operatori, possiamo
            facilmente eseguire calcoli matematici all&apos;interno del nostro
            codice JavaScript.
          </p>
          
          <hr />
          <h2>Operatori con le stringhe</h2>
        </div>
      </div>
    </>
  )
}
