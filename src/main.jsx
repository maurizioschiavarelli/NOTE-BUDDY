import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Docs from './components/pages/Docs';
import About from './components/pages/About';
import Javascript from './components/docs/Javascript/1-Javascript';
import ScrollToTop from './components/ScrollToTop'; // Import del componente ScrollToTop

// Configurazione delle rotte
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/docs',
      element: <Docs />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/Javascript/*',
      element: <Javascript />,
    },
  ],
  {
    basename: '/note-buddy', // Corretto per GitHub Pages
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop /> 
    </RouterProvider>
  </StrictMode>
);
