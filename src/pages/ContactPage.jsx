import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactPage(){

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();

    if(name === '' || email === ''){
      alert('Invalid input provided');
    }
    else {
      //redirect users to Thank you page
      navigate('/thank-you');

    }
  }

  function handleNameChange(event){
    event.preventDefault();
    if(name === ''){
      alert('Name cannot be empty');
    }
  }

  function handleEmailChange(event){
    event.preventDefault();
    if(email === ''){
      alert('Email cannot be empty');
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <div>
        <input onChange={handleNameChange}  type="text" placeholder="Your full name"/>
        </div>

        <div>
        <input onChange={handleEmailChange} type="email" placeholder="Your Email address"/>
        </div>

        <div>
        <button type="submit">Sign up to newsletter</button>
        </div>

        
      </form>
    </div>
  )
};

export default ContactPage;