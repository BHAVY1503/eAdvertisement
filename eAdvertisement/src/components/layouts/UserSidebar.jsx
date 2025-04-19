import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { AgencyNavbar } from "./AgencyNavbar";
import { UserNavbar } from "./UserNavbar";

export const UserSidebar = () => {
  //for closing sidebar...
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <UserNavbar toggleSidebar={toggleSidebar} />
      <aside
        className={`app-sidebar bg-body-secondary shadow ${
          isSidebarOpen ? "open" : "d-none"
        }`}
        data-bs-theme="dark"
      >
        <div className="sidebar-brand">
          <a href="#" className="brand-link">
            <img
              // src="../../dist/assets/img/AdminLTELogo.png"
              // alt="AdminLTE Logo"
              className="brand-image opacity-75 shadow"
            />

            <span className="brand-text fw-light">USER</span>
          </a>
        </div>

        <div
          className=""
          data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
          tabIndex={-1}
          style={{
            marginRight: "-16px",
            marginBottom: "-16px",
            marginLeft: 0,
            top: "-8px",
            right: "auto",
            left: "-8px",
            width: "calc(100% + 16px)",
            padding: 8,
          }}
        >
          <nav className="mt-2">
          {/* <nav className=""> */}

            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <Link to="userprofile" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>
                    ADD SCREEN
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="userscreen" className="nav-link active">
                      {/* <i className="nav-icon bi bi-speedometer" /> */}
                      {/* <i className="bi bi-tv-fill me-2"/> */}
                      <p>
                        VIEW MY SCREENS
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </Link>
                  </li>
                </ul>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/user" className="nav-link active">
                      {/* <i className="nav-icon bi bi-speedometer" /> */}
                      {/* <i className="bi bi-tv-fill me-2"/> */}
                      <p>
                        DASHBOARD
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
                <Link to ={`dashboard`} className="nav-link">
                  <i className="nav-icon bi bi-box-seam-fill" />
                  <p>
                    HORDINGS
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
                {/* <li className="nav-item">
                <Link to ={`dashboard`} className="nav-link">
                  <i className="nav-icon bi bi-box-seam-fill" />
                  <p>
                    DASHBOARD
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link> */}
                {/* <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="dashboard" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>DASHBOARD</p>
                    </a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a href="./widgets/info-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>info Box</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./widgets/cards.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Cards</p>
                    </a>
                  </li> */}
                  
                {/* </li> */}
              </li>
             
            </ul>
            
          </nav>
        </div>

      </aside>
      {/* <div style={{backgroundColor:'red'}}>hll</div> */}
      {/* <main className="app-main">
        <Outlet></Outlet>
      </main> */}
      <main class="app-main">
  <Outlet></Outlet>
</main>

    </>
  );
};
// import React from 'react'
// import { UserNavbar } from './UserNavbar'
// import { Link, Outlet } from 'react-router-dom'

// export const UserSidebar = () => {
//   // const [isSidebarOpen, setSidebarOpen] = useState(true);
  
//   //   const toggleSidebar = () => {
//   //     console.log("toggleSidebar");
//   //     setSidebarOpen(!isSidebarOpen);
//   //   };
//   return (
//     <>
//     <UserNavbar/>
//     <aside
//          className={"app-sidebar bg-body-secondary shadow "
//           }
//         data-bs-theme="dark"
//       >
//         <div className="sidebar-brand">
          
//           <a href="./index.html" className="brand-link">
            
//             <img
//               src="../../dist/assets/img/AdminLTELogo.png"
//               alt="AdminLTE Logo"
//               className="brand-image opacity-75 shadow"
//             />
            
//             <span className="brand-text fw-light">AdminLTE 4</span>
            
//           </a>
          
//         </div>

//         <div
//           className=""
//           data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
//           tabIndex={-1}
//           style={{
//             marginRight: "-16px",
//             marginBottom: "-16px",
//             marginLeft: 0,
//             top: "-8px",
//             right: "auto",
//             left: "-8px",
//             width: "calc(100% + 16px)",
//             padding: 8,
//           }}
//         >
//           <nav className="mt-2">
            
//             <ul
//               className="nav sidebar-menu flex-column"
//               data-lte-toggle="treeview"
//               role="menu"
//               data-accordion="false"
//             >
//               <li className="nav-item menu-open">
//                 <Link to="userprofile" className="nav-link active">
//                   <i className="nav-icon bi bi-speedometer" />
//                   <p>
//                     ADD SCREEN
//                     <i className="nav-arrow bi bi-chevron-right" />
//                   </p>
//                 </Link>
//                 <ul className="nav nav-treeview">
//                   <li className="nav-item">
//                     <Link to="userscreen" className="nav-link active">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>MY SCREEN</p>
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <a href="./index2.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>Dashboard v2</p>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="./index3.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>Dashboard v3</p>
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a href="./generate/theme.html" className="nav-link">
//                   <i className="nav-icon bi bi-palette" />
//                   <p>Theme Generate</p>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#" className="nav-link">
//                   <i className="nav-icon bi bi-box-seam-fill" />
//                   <p>
//                     Widgets
//                     <i className="nav-arrow bi bi-chevron-right" />
//                   </p>
//                 </a>
//                 <ul className="nav nav-treeview">
//                   <li className="nav-item">
//                     <a href="./widgets/small-box.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>Small Box</p>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="./widgets/info-box.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>info Box</p>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="./widgets/cards.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>Cards</p>
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
            
//           </nav>
//         </div>
//       </aside>
//       <main class="app-main">
//         <Outlet></Outlet>
//       </main>
//     </>
//   )
// }
