import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Icona di hamburger per schermi piccoli */}
      <button
        className="lg:hidden p-4 text-white fixed top-4 left-4 z-20"
        onClick={toggleSidebar}
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 fixed top-20 left-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
</svg>
}

      </button>

      {/* Sidebar */}
      <div ref={sidebarRef} className={`h-screen bg-gray-800 text-white w-64 flex flex-col overflow-y-scroll fixed lg:sticky lg:top-16 top-0 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 z-10`}>
        <div className="p-4 text-2xl font-bold">NoteBuddy</div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          <Link to="/javascript" className="block px-4 py-2 rounded hover:bg-gray-700">JavaScript</Link>
          <Link to="/php" className="block px-4 py-2 rounded hover:bg-gray-700">PHP</Link>
          <Link to="/react" className="block px-4 py-2 rounded hover:bg-gray-700">React</Link>
          <Link to="/laravel" className="block px-4 py-2 rounded hover:bg-gray-700">Laravel</Link>
          <Link to="/bootstrap" className="block px-4 py-2 rounded hover:bg-gray-700">Bootstrap</Link>
          <Link to="/tailwind" className="block px-4 py-2 rounded hover:bg-gray-700">Tailwind</Link>
          {/* Aggiungi altri link qui */}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
