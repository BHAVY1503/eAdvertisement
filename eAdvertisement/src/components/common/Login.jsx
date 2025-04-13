import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../assets/login.css"
// import {jwtDecode } from 'jwt-decode'; 
// const jwt = require("jsonwebtoken");

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const validationSchema ={
    emailValidator:{
      required:{
          value:true,
          message:"email is required"
      }
  },
  passwordValidator:{
    required:{
      value:true,
      message:"password is required"
    }
  },
}
const submitHandler = async(data) => {
 
  data.roleId = "67be9504b7cf31c821b7bb1a"
  const res = await axios.post("/user/login",data)
  console.log(res) //axiosobjec
  console.log(res.data) //api response...

  if(res.status === 200){
    alert("Login Succsesfully")
    localStorage.setItem("id",res.data.data._id)
    localStorage.setItem("role", res.data.data.roleId.name)
  } if(res.data.data.roleId.name === "USER"){
     navigate("/user")
  }
  if(res.data.data.roleId.name === "Agency"){
  navigate("/agency")
 } 
  else{
    // alert("login fail")
    //user not added..
    //login..
  }
}
  // const submitHandler = async(data) => {
 
  //   data.roleId = "67be9504b7cf31c821b7bb1a"
  //   const res = await axios.post("/user/login",data)
   
  //   console.log(res) //axiosobjec
  //   console.log(res.data) //api response...
 
  //   if(res.status === 200){
  //     alert("Login Succsesfully")
  //     localStorage.setItem("token", token);
  
  //     // Decode token
  //     // const decoded = jwtDecode(token);

  //     // console.log("Decoded Token:", decoded);
  
  //     // Store useful user info
  //     // localStorage.setItem("id", decoded.id);
  //     // localStorage.setItem("role", decoded.role);
  
  //     // Route by role
  //     if (decoded.role === "USER") {
  //       navigate("/user");
  //     } else if (decoded.role === "Agency") {
  //       navigate("/agency");
  //     } else {
  //       alert("Role not recognized");
  //     }
  //   } else {
  //     alert("Login failed");
  //   }
 
  // const submitHandler = async (data) => {
  //   try {
  //     const res = await axios.post("/user/login", data);
  //     console.log(res.data.token)
  //     localStorage.setItem("token",res.data.token)
      
  //   } catch (error) {
  //     alert("Login Failed");
  //   }
  // };

  // const userApi = async()=>{

  //   axios.get("url",{
  //     headers:{
  //       "Authorization":"Beaer "+localStorage.getItem("token")
  //     }
  //   })
  // }


  return (
    <div className="login">
      <div className="login-card">
        <div className="brand">
          <div className="brand-logo"></div>
          <h1>LOGIN USER</h1>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              id="email"
              {...register("email",validationSchema.emailValidator)}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password",validationSchema.passwordValidator)}
              placeholder="Enter password"
            />
          </div>
          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <a href={`resetpassword`} className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="social-login">
          <p>Or login with</p>
          {/* <div className="social-buttons">
            <div className="social-btn"><a href="/google.com">G</a></div>
            <div className="social-btn">F</div>
          </div> */}
          {/* <div className="signup-link">
          <p>
           For Agency  <a href="">Agency</a>
          </p>
        </div> */}
        </div>
        <div className="signup-link">
          <p>
           For Agency  <a href="agencylogin">Agency</a>
          </p>
        </div>
        <div className="signup-link">
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
  }