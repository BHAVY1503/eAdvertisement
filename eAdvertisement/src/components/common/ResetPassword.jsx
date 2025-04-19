import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

export const ResetPassword = () => {
  const token = useParams().token;
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = async (data) => {
    const obj = {
      token: token,
      password: data.password
    };
    try {
    //   const res = await axios.post(`/user/resetpassword/${token}`, obj);
    const res = await axios.post("/user/resetpassword", obj);
      alert("Password reset successfully!");
      navigate("/login");
    } catch (err) {
      alert("Reset link is invalid or expired.");
      console.error(err);
    }
  };

  return (
    <div className='login'>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>New Password</label>
          <input
            type='password'
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        </div>
        <div>
          <input type='submit' value="Reset Password" />
        </div>
      </form>
    </div>
  );
};


// import axios from 'axios'
// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { useParams } from 'react-router-dom'

// export const ResetPassword = () => {
//     const token = useParams().token
//     const {register,handleSubmit} = useForm()
//     const submitHandler = async(data)=>{
//         //resetpasseord api..
//         const obj = {
//             token:token,
//             password:data.password
//         }
//         const res = await axios.post(`/user/resetpassword/${token}`, obj)
//         console.log(res.data)
            

//     }
//   return (
//     <div className='login'>
//         <h1>RESET PASSWOERD COMPONENT</h1>
//         <form onSubmit={handleSubmit(submitHandler)}>
//             <div>
//                 <label>NEW PASSWORD</label>
//                 <input type='text' {...register("password")}></input>
//             </div>
//             <div>
//                 <input type='submit'></input>
//             </div>
//         </form>
//     </div>
//   )
// }
