import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes.tsx';

function App() {
  const router = createBrowserRouter([
    ...routes,
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
