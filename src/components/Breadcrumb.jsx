import React from 'react';  // Importa React se necessario
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  
  // Ottieni i segmenti della path corrente
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  return (
    <nav className="text-white text-sm" aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        <li>
          <Link
            to="/"
            className="hover:underline"
            title="Vai alla pagina principale"
          >
            Home
          </Link>
        </li>
        
        {/* Il primo link "Javascript" deve portare a /Javascript/Panoramica */}
        {pathSegments.length > 0 && (
          <>
            <li>/</li>
            <li>
              <Link
                to="/Javascript/Panoramica"
                className="hover:underline"
                title="Vai a Javascript/Panoramica"
              >
                Javascript
              </Link>
            </li>
          </>
        )}

        {/* Genera dinamicamente i segmenti del breadcrumb */}
        {pathSegments.slice(1).map((segment, index) => {
          // Creazione del path relativo per ogni segmento, tranne "Javascript"
          const path = `/${pathSegments.slice(0, index + 2).join('/')}`;
          
          return (
            <React.Fragment key={index}>
              <li>/</li>
              <li>
                {/* Se è l'ultimo segmento, non fare il link */}
                {index === pathSegments.slice(1).length - 1 ? (
                  <span className="font-semibold" aria-current="page">
                    {segment}
                  </span>
                ) : (
                  <Link to={path} className="hover:underline" title={`Vai a ${segment}`}>
                    {segment}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
