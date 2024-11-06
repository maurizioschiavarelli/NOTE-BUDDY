/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Breadcrumb from './Breadcrumb';

const Sidebar = ({ links, home, currentPage }) => {
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
      <div className="lg:hidden fixed z-20 flex items-center space-x-2 p-3 text-white bg-gray-600/75 w-full">
        <button onClick={toggleSidebar}>
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8"
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
        className={`h-screen bg-gray-800 text-white w-64 flex flex-col overflow-y-scroll fixed lg:sticky top-28 lg:top-16 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 z-10`}
      >
        <div className="p-4 text-2xl font-bold">NoteBuddy</div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
