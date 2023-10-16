import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users/Users.jsx';
import Update from './components/Users/Update/Update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
  path:'/users',
  element: <Users></Users>,
  loader:()=> fetch('http://localhost:3000/users')
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:3000/users/652d442384c9dc09dc8383be/${params.id}`)
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
