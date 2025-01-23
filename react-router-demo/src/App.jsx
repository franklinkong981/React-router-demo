import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Home from "./Home.jsx";
import Eat from "./Eat.jsx";
import Drink from "./Drink.jsx";
import NavBar from "./Nav.jsx";
import Food from "./Food.jsx";
import OrderSummary from "./OrderSummary.jsx";
import AdminPage from "./AdminPage.jsx";
import NotFound from "./NotFound.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import BlogHome from "./BlogHome.jsx";


function App() {

  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/eat" element={<Eat />}/>
          <Route path="/drink" element={<Drink />}/>
          <Route path="/food/:name" element={<Food/>} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path="/users/:username" element={<AdminPage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/bloghome" element={<BlogHome/>}/>
          <Route path="/" element={<Home />}/>
          {/*<Route path="*" element={<Navigate to="/"/>}/>*/}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <h1>SOME OTHER CONTENT</h1>
    </div>
  );
}

export default App;
