import { Link } from "react-router-dom";

const links = [
  { name: 'Javascript', to: '/javascript' },
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
    <div className="relative isolate overflow-hidden bg-gray-900 sm:py-32">
      <img
        alt="Immagine di sfondo che rappresenta il web development"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />

      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#533d2e] to-[#0d1fbd] opacity-20"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">noteBuddy</h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
            Scopri le guide per i principali linguaggi e framework per lo sviluppo web
          </p>
        </div>
        
        {/* Sezione Link */}
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <Link key={link.name} to={link.to}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
