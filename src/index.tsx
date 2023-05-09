import React from 'react';
import ReactDOM from 'react-dom/client';
import { About, Career, Contact, Home } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App, Error } from './components/App';
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-4N79BHVQ6N';
ReactGA.initialize(TRACKING_ID);

export const routes = [
  {
    path: '/',
    element: <Home />,
    name: 'Home',
    nodeRef: React.createRef<HTMLDivElement>(),
  },
  {
    path: 'about',
    element: <About />,
    name: 'About',
    nodeRef: React.createRef<HTMLDivElement>(),
  },
  {
    path: 'career',
    element: <Career />,
    name: 'Career',
    nodeRef: React.createRef<HTMLDivElement>(),
  },
  {
    path: 'contact',
    element: <Contact />,
    name: 'Contact',
    nodeRef: React.createRef<HTMLDivElement>(),
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
