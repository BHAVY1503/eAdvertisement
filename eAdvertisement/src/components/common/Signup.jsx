import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";
import "../../assets/signup.css"
export const Signup = () => {
  
  const { register, handleSubmit, formState:{errors}} = useForm();
  console.log(errors)
  const navigate = useNavigate();
  const submitHandler = async(data) => {
    console.log(data)
    data.roleId = "67be9504b7cf31c821b7bb1a"

    const res = await axios.post("/user",data)
    console.log(res) //axiosobjec
    console.log(res.data) //api response...
 
    if(res.status===201){
      alert("Singup Succsesfully")
      navigate("/login")
      //user added..
      //naviget
    }
    else{
      alert("user not created")
      //user not added..
      //login..
    }
  }

  return ( <div className="login">
    <div className="login-card">
      <div className="brand">
        <div className="brand-logo"></div>
        <h1>CREATE ACCOUNT</h1>
        <p>Sign up to get started</p>
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" {...register("firstName")} placeholder="Enter first name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" {...register("lastName")} placeholder="Enter last name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} placeholder="Enter password" />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" {...register("age")} placeholder="Enter age" />
        </div>
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
      <div className="signup-link">
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  </div>
   

  );
};
