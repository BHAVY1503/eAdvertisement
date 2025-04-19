// import React from 'react'
// import hamburgermenu from "../../assets/images/hamburgermenu.png";
// import { Link, useNavigate } from 'react-router-dom';

// export const UserNavbar = ({toggleSidebar}) => {

//   // const naviagte = useNavigate()
//   // const logout = {
//   //   naviagte("/login")
//   // }

//   return (
//     <nav className="app-header navbar navbar-expand bg-body">
//     {/* begin::Container */}
//     <div className="container-fluid">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a
//             className="nav-link btn btn-light"
//             href="/"
//             role="button"
//             style={{
//               color: "black",
//               padding: "5px 10px",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//             }}
//             onClick={toggleSidebar}
//           >
//             <img src={hamburgermenu} style={{height:"25px",width:"25px"}}></img>
//           </a>
//         </li>
//         <li className="nav-item d-none d-md-block">
//           <a href="/">
//             Home
//           </a>
//         </li>
//         <li className="nav-item d-none d-md-block">
//           <a href="/contactus" className="nav-link">
//             Contact
//           </a>
//         </li>
//       </ul>
     

//       <ul className="navbar-nav ms-auto">
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             data-widget="navbar-search"
//             href="#"
//             role="button"
//           >
//             <i className="bi bi-search" />
//           </a>
//         </li>

       

      

//        < li className="nav-item">
//           <a href='/login'>
//           <Link to='/'>
//           <button className="btn btn-danger">LOGOUT</button>
//           </Link>
//           <a  className="nav-link" href="/" data-lte-toggle="fullscreen">
//             <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen" />
//             <i
//               data-lte-icon="minimize"
//               className="bi bi-fullscreen-exit"
//               style={{ display: "none" }}
//             />
//           </a>
//            </a>
//         </li>

        
//       </ul>
//     </div>
//   </nav>
// );
// };

import React, { useEffect, useState } from "react";
import hamburgermenu from "../../assets/images/hamburgermenu.png";
// import user from "../../assets/landing/images/user.png";
import user from "../../assets/landing/images/user.png";
import axios from "axios";
import { Link } from "react-router-dom";



export const UserNavbar = ({ toggleSidebar }) => {
  // const [userName, setUserName] = useState("Loading...");

  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("id");
      if (!userId) return;
  
      try {
        const res = await axios.get(`/user/${userId}`);
        const user = res.data.data;
  
        // Combine firstName + lastName
        const fullName = `${user.firstName} ${user.lastName}`;
        setUserName(fullName);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
  
    fetchUser();
  }, []);

  return (
    <nav className="app-header navbar navbar-expand bg-body">

      {/*begin::Container*/}
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link btn btn-light"
              href="#"
              role="button"
              style={{
                color: "black",
                padding: "5px 10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              onClick={toggleSidebar}
            >
              <img src={hamburgermenu} style={{height:"25px",width:"25px"}}></img>
            </a>
          </li>
          <li className="nav-item d-none d-md-block">

            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="contactus" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="/" className="nav-link">
              LogOut
            </a>
          </li>
        </ul>

       
          <li className="nav-item">
            <a className="nav-link" href="#" data-lte-toggle="fullscreen">
              <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen" />
              <i
                data-lte-icon="minimize"
                className="bi bi-fullscreen-exit"
                style={{ display: "none" }}
              />
            </a>
          </li>

          <li className="nav-item dropdown user-menu">

            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img src={user}
                // src="../../dist/assets/img/user2-160x160.jpg"
                className="user-image rounded-circle shadow"
                alt="User Image"
              />
              <span className="d-none d-md-inline">{userName}</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            {/* <ul className=""> */}

              {/* begin::User Image  */}
               <li className="user-header text-bg-primary">
                <img
                  src="../../dist/assets/img/user2-160x160.jpg"
                  className="rounded-circle shadow"
                  alt="User Image"
                />
                <p>
                  {userName} - Web Developer
                  <small>Member since Nov. 2023</small>
                </p>
                 <Link to='/'>
           <button className="btn btn-danger">LOGOUT</button>
           </Link>
              </li>
             

              <li className="user-body">
                <div className="row">
                  <div className="col-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div className="col-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div className="col-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
              </li>

              <li className="user-footer">
                <a href="#" className="btn btn-default btn-flat">
                  Profile
                </a>
                <a href="#" className="btn btn-default btn-flat float-end">
                  Sign out
                </a>
              </li>
            </ul>
          </li>
        {/* </ul> */}
      </div>
    </nav>
  );
};
