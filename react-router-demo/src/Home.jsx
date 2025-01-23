import React from "react";
import {Navigate, useNavigate} from 'react-router-dom';
 
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>I'M HUNGRY</h1>
      <img src="https://i.giphy.com/pBj0EoGSYjGms.gif" alt="Audrey II wants to eat."/>
      <button onClick={() => navigate('/order-summary', {replace: true})}>Place order</button>
    </div>
  );
}

export default Home;