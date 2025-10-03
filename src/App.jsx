import { useState } from 'react'
import router from './Router/route'
import { RouterProvider } from 'react-router-dom'
import './App.css'

function App() {

    return <RouterProvider router={router} />;
  
}

export default App
