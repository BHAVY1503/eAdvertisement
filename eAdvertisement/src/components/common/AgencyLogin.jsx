import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../assets/login.css"

export const AgencyLogin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const validationSchema={
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
  const submitHandler = async (data) => {
    data.roleId = "67be8e2c331856f02c869273"; // Agency role ID
  
    try {
      const res = await axios.post("/user/login", data);
      console.log(res);
  
      const userRole = res.data.data.roleId.name;
  
      if (userRole === "Agency") {
        alert("Login Successfully");
        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("role", userRole);
        navigate("/agency");
      } else {
        // If not agency, but trying to login via agency form
        alert("Access denied. This login is for Agency accounts only.");
      }
  
    } catch (err) {
      console.error("Login error:", err);
  
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message); // "invalid cred.." or "Email not found.."
      } else {
        alert("Login failed. Please check your credentials.");
      }
    }
  };
  
  // const submitHandler = async(data) => {
 
  //   data.roleId = "67be8e2c331856f02c869273"
  //   const res = await axios.post("/user/login",data)
  //   console.log(res) //axiosobjec
  //   console.log(res.data) //api response...
 
  //   if(res.status === 200){
  //     alert("Login Succsesfully")
  //     localStorage.setItem("id",res.data.data._id)
  //     localStorage.setItem("role", res.data.data.roleId.name)}
  //   //  if(res.data.data.roleId.name === "USER"){
  //   //    navigate("/user")
  //   // }
  //   if(res.data.data.roleId.name === "Agency"){
  //   navigate("/agency")
  //  } 
  //   else{
  //     alert("login fail")
  //     //user not added..
  //     //login..
  //   }
  // }

  return (
    <div className="login" style={{textAlign:'center'}}>
      <div className="login-card">
        <div className="brand">
          <div className="brand-logo"></div>
          <h1>AGENCY</h1>
          <p>For Agency Login</p>
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
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="social-login">
          {/* <p>Or login with</p> */}
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
           {/* For Agency  <a href="">Agency</a> */}
          </p>
        </div>
        <div className="signup-link">
          <p>
            {/* Don't have an account? <a href="/agencysignup">Sign up</a> */}
          </p>
        </div>
      </div>
    </div>
  );
};