import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import MainLayout from './routes/main';

import Home from './routes/Inicio/inicio';
import About from './routes/Sobre_Nosotros/sobrenosotros';
import Contact from './routes/Contactanos/contactanos';
import Services from './routes/Servicios/servicios';

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />, // 👈 LAYOUT GLOBAL
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'Sobre-Nosotros',
        element: <About />,
      },
      {
        path: 'contactanos',
        element: <Contact />,
      },
      {
        path: 'servicios',
        element: <Services />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
  </React.StrictMode>,
)