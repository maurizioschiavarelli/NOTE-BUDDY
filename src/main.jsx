import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './index.css'
import Docs from './components/pages/Docs'
import About from './components/pages/About'

// Javascript docs
import Javascript from './components/docs/Javascript/1-Javascript'

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
    basename: '/note-buddy', // Aggiungi questo per GitHub Pages
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
