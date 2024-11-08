import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Pesquisa from './pages/Pesquisa.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pesquisa',
    element: <Pesquisa />
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
