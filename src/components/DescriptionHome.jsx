import { Link } from "react-router-dom";
import './Hero.css';

const links = [
  { name: 'Javascript', to: '/Javascript/Panoramica' },
  { name: 'PHP', to: '#' },
  { name: 'React', to: '#' },
  { name: 'Laravel', to: '#' },
  { name: 'Bootstrap', to: '#' },
  { name: 'Tailwind', to: '#' },
];

const stats = [
  { name: 'Linguaggi web', value: '2' },
  { name: 'Framework', value: '4' },
  { name: 'Guide future', value: 'Illimitate' },
];

export default function DescriptionHome() {
  return (
    <div className="relative z-0 bg-gray-900 sm:py-32 overflow-hidden heroImg isolate">
      <img
        alt="Immagine di sfondo che rappresenta il web development"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="object-right -z-10 absolute inset-0 w-full h-full object-cover md:object-center"
      />

      <div
        aria-hidden="true"
        className="sm:block sm:-top-10 sm:right-1/2 sm:-z-10 sm:absolute hidden sm:blur-3xl sm:mr-10 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="bg-gradient-to-tr from-[#533d2e] to-[#0d1fbd] opacity-20 w-[68.5625rem] aspect-[1097/845]"
        />
      </div>

      <div className="mx-auto px-6 py-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl">
          <h2 className="font-semibold text-5xl text-white sm:text-7xl tracking-tight">noteBuddy</h2>
          <p className="mt-8 font-medium text-gray-300 text-lg text-pretty sm:text-xl/8">
            Scopri le guide per i principali linguaggi e framework per lo sviluppo web
          </p>
        </div>
        
        {/* Sezione Link */}
        <div className="mx-auto lg:mx-0 mt-10 max-w-2xl lg:max-w-none">
          <div className="md:flex gap-x-8 gap-y-6 lg:gap-x-10 grid grid-cols-1 sm:grid-cols-2 font-semibold text-base/7 text-white">
            {links.map((link) => (
              <Link key={link.name} to={link.to}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>

          <dl className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16 sm:mt-20">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="font-semibold text-4xl text-white tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
