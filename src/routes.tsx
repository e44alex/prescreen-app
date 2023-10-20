import { RouteObject } from 'react-router-dom';
import { Test } from './pages/Test.tsx';
import { Home } from 'src/pages/Home.tsx';
import Administration from 'src/pages/administration/Administration.tsx';

const routes: RouteObject[] = [
  { path: '/', element: <Home/>},
  { path: '/admin', element: <Administration /> },
  { path: '/test', element: <Test/>},
];

export default routes;
