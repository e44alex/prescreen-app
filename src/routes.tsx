import { Administration } from './pages/Administration.tsx';
import { RouteObject } from 'react-router-dom';
import { Test } from './pages/Test.tsx';

const routes: RouteObject[] = [
  { path: '/admin', element: <Administration /> },
  { path: '/test', element: <Test/>},
];

export default routes;
