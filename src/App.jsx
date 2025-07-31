import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home';
import Layout from './components/layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {

  const router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ]
    }

  ])


  return (
    <>
      <RouterProvider router={router} />
      

    </>

  )
}

export default App
