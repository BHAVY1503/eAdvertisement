// ForgotPassword.jsx
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/user/forgotpassword", data); // <-- your API
      alert("Reset password link sent to your email.");
    } catch (error) {
      alert("Error sending email.");
    }
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};
