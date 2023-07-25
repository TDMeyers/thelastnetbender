import React from 'react';
import './App.css'
import Homepage from './Pages/Homepage'
import Navbar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About'
// import { configureStore } from '@reduxjs/toolkit';
import 'bulma/css/bulma.css';
import { Provider } from 'react-redux';

// const store = configureStore();

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Provider store={store}> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/charecter-Gallery" element={<Character-Gallery/>} />
        
      </Routes>
      {/* </Provider> */}
    </div>
  )
}
