import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home.jsx";
import Eat from "./Eat.jsx";
import Drink from "./Drink.jsx";
import NavBar from "./Nav.jsx";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/eat" element={<Eat />}/>
          <Route path="/drink" element={<Drink />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
      <h1>SOME OTHER CONTENT</h1>
    </div>
  );
}

export default App;
