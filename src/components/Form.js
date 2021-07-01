

import { Router } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import API_URL from "./URL";




const Form = ()  =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
    
    </div>
  );
}

export default Form