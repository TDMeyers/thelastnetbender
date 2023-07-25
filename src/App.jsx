import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/NavBar";
import CharacterGallery from "./Pages/CharacterGallery";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import "bulma/css/bulma.css";


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/CharacterGallery"
          element={<CharacterGallery />}
        />
      </Routes>
    </div>
  );
}
