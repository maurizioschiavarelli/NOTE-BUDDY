import { Helmet } from 'react-helmet'
import HeaderDocs from '../../HeaderDocs'
import { FaJsSquare } from 'react-icons/fa'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function JavascriptVariabili () {
  return (
    <>
      <Helmet>
        <title>Javascript | Variabili</title>
      </Helmet>

      <div className='containerGuides'>
        <HeaderDocs
          title='Le Variabili in JavaScript'
          icon={FaJsSquare}
          subTitle='Introduzione alla gestione delle variabili in JavaScript'
          description="In JavaScript, le variabili sono contenitori che permettono di memorizzare e gestire dati durante l'esecuzione di un programma. Possono contenere diversi tipi di valore, come numeri, stringhe, oggetti o funzioni, e sono essenziali per la manipolazione dinamica delle informazioni nel codice."
        />
      </div>

      <div className='lg:w-3/4 w-11/12 m-auto h-auto my-10 lg:my-0 lg:mb-10 list'>
        <h2 className='text-2xl font-bold mb-4'>
          Guida alle Variabili in JavaScript
        </h2>
        <p>
          Le variabili in JavaScript sono dei contenitori utilizzati per
          memorizzare dati e valori durante l&apos;esecuzione di un programma.
          In altre parole, le variabili permettono di assegnare un nome a un
          valore, che può essere utilizzato e manipolato nel corso del codice.
          JavaScript è un linguaggio a tipizzazione dinamica, il che significa
          che il tipo di valore che una variabile può contenere non è dichiarato
          esplicitamente e può cambiare durante l&apos;esecuzione del programma.
        </p>

        <h3 className='text-xl font-semibold mt-4'>Dichiarare le Variabili</h3>
        <p>
          In JavaScript, ci sono tre modi principali per dichiarare una
          variabile: <code>var</code>,<code>let</code>, e <code>const</code>.
          Ognuno di questi ha comportamenti e scopi diversi.
        </p>

        <h4 className='text-lg font-semibold mt-2'>
          1. <code>var</code>
        </h4>
        <p>
          La dichiarazione <code>var</code> è stata introdotta nei primi giorni
          di JavaScript. Una variabile dichiarata con <code>var</code> ha uno
          scope (ambito) globale o di funzione, a seconda di dove viene
          dichiarata. Tuttavia, <code>var</code> è ora meno consigliato a causa
          di alcune problematiche di &quot;hoisting&quot; (sollevamento) e
          mancanza di block scope.
        </p>

        <SyntaxHighlighter
          language='javascript'
          style={nightOwl}
          className='rounded-lg m-auto text-center w-80 sm:w-full'
        >
          {`
      var nome = 'Giuseppe';
      console.log(nome); // 'Giuseppe'
    `}
        </SyntaxHighlighter>

        <h4 className='text-lg font-semibold mt-2'>
          2. <code>let</code>
        </h4>
        <p>
          La dichiarazione <code>let</code> è stata introdotta con ECMAScript 6
          (ES6) ed è il metodo consigliato per dichiarare variabili in
          JavaScript. Le variabili dichiarate con <code>let</code>
          hanno uno scope di blocco, il che significa che sono visibili solo
          all&apos;interno del blocco di codice in cui sono dichiarate, come un
          ciclo o una condizione.
        </p>

        <SyntaxHighlighter
          language='javascript'
          style={nightOwl}
          className='rounded-lg m-auto text-center w-80 sm:w-full'
        >
          {`
      let nome = 'Maria';
      if (true) {
        let nome = 'Giovanni'; // Nuova variabile locale
        console.log(nome); // 'Giovanni'
      }
      console.log(nome); // 'Maria'
    `}
        </SyntaxHighlighter>

        <h4 className='text-lg font-semibold mt-2'>
          3. <code>const</code>
        </h4>
        <p>
          La dichiarazione <code>const</code> è utilizzata per creare variabili
          il cui valore non può essere riassegnato. Una volta che una variabile
          è dichiarata con <code>const</code>, non puoi modificarne il valore,
          ma attenzione, gli oggetti o gli array dichiarati con{' '}
          <code>const</code>
          possono comunque essere mutati, poiché il &quot;congelamento&quot;
          riguarda solo la riassegnazione della variabile stessa, non il
          contenuto.
        </p>

        <SyntaxHighlighter
          language='javascript'
          style={nightOwl}
          className='rounded-lg m-auto text-center w-80 sm:w-full'
        >
          {`
      const pi = 3.14;
      // pi = 3.14159; // Error: Assignment to constant variable.

      const persona = { nome: 'Luigi', eta: 30 };
      persona.eta = 31; // Questo è permesso
      console.log(persona); // { nome: 'Luigi', eta: 31 }
    `}
        </SyntaxHighlighter>

        <h3 className='text-xl font-semibold mt-4'>
          Hoisting e Scope delle Variabili
        </h3>
        <p>
          In JavaScript, le dichiarazioni delle variabili sono soggette a un
          comportamento chiamato &quot;hoisting&quot;, che significa che la
          dichiarazione della variabile (non il suo valore) viene sollevata
          all&apos;inizio del contesto di esecuzione. Questo si applica a{' '}
          <code>var</code> ma non a <code>let</code> e <code>const</code>.
          Vediamo un esempio con <code>var</code>:
        </p>

        <SyntaxHighlighter
          language='javascript'
          style={nightOwl}
          className='rounded-lg m-auto text-center w-80 sm:w-full'
        >
          {`
      console.log(x); // undefined (non errore)
      var x = 10;
      console.log(x); // 10
    `}
        </SyntaxHighlighter>

        <p>
          Anche se la variabile <code>x</code> è dichiarata dopo la prima
          chiamata al <code>console.log()</code>, JavaScript la
          &quot;solleva&quot; in cima al contesto, ma non ne inizializza il
          valore. Invece, con <code>let</code>e <code>const</code>,
          l&apos;errore sarebbe stato immediato se tentato di accedere alla
          variabile prima della sua dichiarazione.
        </p>

        <h3 className='text-xl font-semibold mt-4'>
          Esempio in un Componente React
        </h3>
        <p>
          In React, puoi dichiarare variabili come faresti in JavaScript
          standard. Tuttavia, la gestione dello stato del componente può essere
          fatta usando <code>useState</code> per creare variabili
          &quot;stateful&quot;. Ecco un esempio che mostra una variabile di
          stato in un componente React:
        </p>

        <SyntaxHighlighter
          language='javascript'
          style={nightOwl}
          className='rounded-lg m-auto text-center w-80 sm:w-full'
        >
          {`
      import React, { useState } from 'react';

      function Contatore() {
        const [conta, setConta] = useState(0); // Variabile di stato
        const incrementa = () => setConta(conta + 1);
        
        return (
          <div>
            <p>Contatore: {conta}</p>
            <button onClick={incrementa}>Aumenta</button>
          </div>
        );
      }

      export default Contatore;
    `}
        </SyntaxHighlighter>
        <p>
          In questo esempio, <code>conta</code> è una variabile di stato, e il
          valore iniziale è impostato a<code>0</code> con <code>useState</code>.
          Quando il pulsante viene cliccato, il valore di <code>conta</code>
          viene aggiornato utilizzando la funzione <code>setConta</code>.
        </p>
      </div>
    </>
  )
}
