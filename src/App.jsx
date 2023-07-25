import React from 'react';
import { useState } from 'preact/hooks'
import './app.css'
import Homepage from './Pages/Homepage'
import Navbar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Form from "./Components/Form"

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  )
}
