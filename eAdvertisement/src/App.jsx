import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserSidebar } from './components/layouts/UserSidebar'
// import './App.css'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
// import "./assets/adminlte.min.css"
import { Route, Routes, useLocation } from 'react-router-dom'
import { UserProfile } from './components/user/UserProfile'
import { Login } from './components/common/Login'
import { Signup } from './components/common/Signup'
import { AgencySidebar } from './components/layouts/AgencySidebar'
import { AddScreen } from './components/agency/AddScreen'
import axios from 'axios'
import PrivateRoutes from './hooks/PrivetRoutes'
import LandingPage from './components/common/LandingPage'
import { AddScreen2 } from './components/agency/AddScreen2'
import { ViewMyScreens } from './components/agency/ViewMyScreens'
import { UpdateMyscreen } from './components/agency/UpdateMyscreen'
import { HordingList } from './components/admin/HordingList'
import { ResetPassword } from './components/common/ResetPassword'
import { UserScreen } from './components/user/UserScreen'
import { UpdateUser } from './components/user/UpdateUser'
import { AgencyLogin } from './components/common/AgencyLogin'
import { DashBoard } from './components/layouts/DashBoard'
import { Twitter } from './components/user/Twitter'
import { UserHording } from './components/user/UserHording'
import { ContactUs } from './components/common/ContactUs'
import { AgencySignup } from './components/common/AgencySignup'
import { UserNavbar } from './components/layouts/UserNavbar'

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { Users } from './components/admin/Users'
import { UserAction } from './components/admin/UserAction'

function App() {
   axios.defaults.baseURL = "http://localhost:3000"

   const location = useLocation();

   useEffect(() => {
     if (location.pathname === "/login" || location.pathname === "/signup"  || location.pathname === "/agencylogin" ||location.pathname === "/contactus" || location.pathname === "/agencysignup") {
       document.body.className = ""; // Remove the unwanted class for login and signup
     } else { 
       document.body.className =
         "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
     }
   }, [location.pathname]);

  return (
      <div className={location.pathname === "/login" || location.pathname === "/signup"  || location.pathname === "/agencylogin" || location.pathname === "/contactus" || location.pathname === "/agencysignup" ? "" : "app-wrapper"}>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/agencylogin' element={<AgencyLogin/>}></Route>
        <Route path='/agencysignup' element={<AgencySignup/>}></Route>
        <Route path='/' element={<LandingPage/>}></Route>
        {/* <Route path='/hordinglist' element={<HordingList/>}></Route> */}
        {/* <Route path='/dashboard' element={<DashBoard/>}></Route> */}
        {/* <Route path='/resetpassword' element={<ResetPassword/>}></Route> */}
        <Route path='/resetpassword/:token' element={<ResetPassword/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>


        <Route path='' element={<PrivateRoutes/>}>
        <Route path='/user' element={<UserSidebar/>}>
        {/* <Route path='usernavbar' element={<UserNavbar/>}></Route> */}
        <Route path='userprofile' element={<UserProfile/>}></Route>
        <Route path='userscreen/:id' element={<UserScreen/>}></Route>
        <Route path='updateuser/:id' element={<UpdateUser/>}></Route>
        <Route path='userhording' element={<UserHording/>}></Route>
        <Route path='dashboard' element={<DashBoard/>}></Route>
        {/* <Route path='/login' element={<Login/>}></Route> */}

        </Route>
        <Route path='/agency' element={<AgencySidebar/>}>
        {/* <Route path='addscreen' element={<AddScreen/>}></Route> */}
        <Route path='addscreen2' element={<AddScreen2/>}></Route>
        <Route path='myscreens' element={<ViewMyScreens/>}></Route>
        <Route path="updateScreen/:id" element={<UpdateMyscreen/>}></Route>
        <Route path='hordinglist' element={<HordingList/>}></Route>
        <Route path='userslist' element={<Users/>}></Route>
        <Route path='useraction' element={<UserAction/>}></Route>


        </Route>
        </Route>
      </Routes>
      
    </div>
   
  )
}

export default App
