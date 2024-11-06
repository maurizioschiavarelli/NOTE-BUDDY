import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Sidebar from '../../Sidebar';
import HeaderDocs from '../../HeaderDocs';

const javascriptLinks = [
  { name: 'Javascript', to: '/javascript' },
  { name: '• Introduzione a JavaScript', to: '/javascript/introduzione' },
  { name: 'Variabili', to: '/javascript/variabili' },
  { name: 'Tipi di Dato', to: '/javascript/tipi-dato' },
  { name: 'Operatori', to: '/javascript/operatori' },
  { name: 'Strutture di Controllo', to: '/javascript/strutture-controllo' },
  { name: 'Funzioni', to: '/javascript/funzioni' },
  { name: 'Oggetti', to: '/javascript/oggetti' },
  { name: 'Array', to: '/javascript/array' },
  { name: 'Loop (Cicli)', to: '/javascript/loop' },
  { name: 'Scope e Closures', to: '/javascript/scope-closures' },
  { name: 'Eventi', to: '/javascript/eventi' },
  { name: 'Asincronicità (Callback, Promises, async/await)', to: '/javascript/asincronicita' },
  { name: 'Manipolazione del DOM', to: '/javascript/manipolazione-dom' },
  { name: 'ES6 e Nuove Funzionalità', to: '/javascript/es6' },
  { name: 'Modulo (import/export)', to: '/javascript/modulo' },
  { name: 'Errori e Debugging', to: '/javascript/errori-debugging' },
  { name: 'Gestione degli Errori (try-catch)', to: '/javascript/gestione-errori' },
  { name: 'Funzioni Arrow', to: '/javascript/funzioni-arrow' },
  { name: 'Destructuring', to: '/javascript/destructuring' },
  { name: 'Template Literals', to: '/javascript/template-literals' },
  { name: 'Higher-order Functions', to: '/javascript/higher-order-functions' },
  { name: 'Prototipi e Ereditarietà', to: '/javascript/prototipi-ereditarieta' },
  { name: 'Modifiche al Prototipo (Prototype Chain)', to: '/javascript/prototype-chain' },
  { name: 'This in JavaScript', to: '/javascript/this' },
  { name: 'Classi (ES6)', to: '/javascript/classi' },
  { name: 'Mappe e Set', to: '/javascript/mappe-set' },
  { name: 'JSON', to: '/javascript/json' },
  { name: 'Web APIs (Fetch, LocalStorage, SessionStorage)', to: '/javascript/web-apis' },
  { name: 'Performance e Ottimizzazione', to: '/javascript/performance' },
  { name: 'Testing in JavaScript', to: '/javascript/testing' },
  { name: 'Patterns di Design', to: '/javascript/design-patterns' }
];

export default function JSintroduzione() {
  return (
    <>
      <Navbar />
      
      <div className="flex">
      <Sidebar
        links={javascriptLinks}
        home="Javascript"
        currentPage="Introduzione"
      />
        <div className="flex-1">
          <HeaderDocs
            title="intro js"
            imgUrl="/src/assets/heroImg.jpg"
            subTitle="Javascript"
            description="é il principale linguaggio per lo sviluppo frontend. Con questa guida, imparerai a padroneggiare il linguaggio fino ad arrivare alla manipolazione del DOM."
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
