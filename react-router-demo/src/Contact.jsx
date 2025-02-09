import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

function Contact() {
  const [email, setEmail] = useState("");
  const history = useHistory();

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function storeEmail() {
    alert("jk, no email storage");
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    storeEmail(email);
    history.push('/');
  }

  return (
    <div>
      <h1>This is the contact page.</h1>
      <p>To get in touch, enter email.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={email} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;