/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Breadcrumb from './Breadcrumb';

const Sidebar = ({ links, home, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

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
      {/* Icona hamburger per schermi piccoli */}
      <div className="lg:hidden fixed z-20 flex items-center space-x-2 p-2 text-white bg-gray-600/75 w-full">
        <button onClick={toggleSidebar} aria-label="Toggle sidebar">
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
              />
            </svg>
          )}
        </button>
        {/* Breadcrumb */}
        <Breadcrumb home={home} currentPage={currentPage} />
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`h-screen bg-gray-800 text-white w-64 flex flex-col overflow-y-scroll fixed lg:sticky top-28 lg:top-16 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 z-10`}
        role="navigation"
        aria-label="Sidebar navigation"
      >
        <div className="p-4 text-3xl font-bold bg-gradient-to-b from-gray-900 from-50% to-gray-800">NoteBuddy</div>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to} // Assicurati che 'to' inizi con '/javascript/'
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-4 text-white bg-gray-900 rounded-lg font-bold shadow-lg' // Aggiungi classi se attivo
                    : 'block py-2 px-4 text-white' // Altrimenti mantieni le classi di base
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Sidebar;
