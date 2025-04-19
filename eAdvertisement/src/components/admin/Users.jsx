import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Users = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const res = await axios.get('/users');
    console.log(res.data); // Check if users and roles are populated correctly
    setUsers(res.data.data);
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      const res = await axios.delete("/user/" + id);
      if (res.status === 200) {
        alert("User deleted successfully.");
        setUsers(prev => prev.filter(user => user._id !== id)); // Update UI
      }
    } catch (err) {
      console.error("Error deleting user:", err.response || err.message);
      alert("Failed to delete user.");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>User List</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th> {/* Added Role column */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.roleId?.name || "No Role"}</td> {/* Accessing the role */}
                <td>
                  <button onClick={() => deleteUser(user._id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};





// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'

// export const Users = () => {

//     const { id } = useParams()
//     const [screens, setscreens] = useState([])
//     const getAllUsers = async() => {

//         // const res = await axios.get("/hording/getHordingsbyuserid/"+localStorage.getItem("id"))
//         const res = await axios.get(`/users`)
//         console.log(res.data) //api response...
//         setscreens(res.data.data)

//     }
//     const deleteUser = async(id) =>{
//         const res = await axios.delete("/users" + id)
//         // alert(id)
//         console.log(res)

//         if(res.status === 204){
//              alert("user deleted..");
      

//         }
//     }
//     // const [screens, setscreens] = useState([])
//     // const getAllMyScreens = async() => {

//     //     const res = await axios.get("/hording/getHordingsbyuserid/"+localStorage.getItem("id"))
//     //     // const res = await axios.get("/hording/getallhording/")
//     //     console.log(res.data) //api response...
//     //     setscreens(res.data.data)

//     // }
//     useEffect(() => {
//         axios.get(`/users/${id}`).then((res) => {
//           setUser(res.data.data)
//         })
//       }, [id])
    
//     //   if (!users) return <div>Loading...</div>

//     useEffect(() => {
        
//         getAllUsers()
        
//     }, [])
    

//   return (
//     <div style={{textAlign:"center"}}>
//         USER LIST
//         <table className='table table-striped'>
//             <thead className='thead-dark'>
//                 <tr>
//                     <th>ID</th>
//                     <th>FIRST NAME</th>
//                     <th>LAST NAME</th>
//                     {/* <th>STATUS</th> */}
//                     <th>EMAIL</th>
//                     {/* <th>Longitude</th> */}
//                     {/* <th>IMAGE</th> */}
//                     <th>ACTION</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                    screens?.map((sc)=>{
//                     return<tr>

//                         <td>{sc._id}</td>
//                         <td>{sc.firstName}</td>
//                         <td>{sc.lastName}</td>
//                         {/* <td>{sc.status}</td> */}
//                         <td>{sc.email}</td>
//                         {/* <td>{sc.longitude}</td> */}
//                         {/* <td>
//                             <img  style ={{height:100,width:100}}src={sc?.hordingURL}></img>
//                         </td> */}
//                         {/* <td>
//                             <Link to={`/user/userscreen/${sc._id}`} className ="btn btn-info">ACTION</Link>
//                         </td> */}
//                         <td>
//                                     <button onClick={()=>{deleteUser(sc._id)}} className="btn btn-danger">Delete</button>
//                                 </td>
//                     </tr>
//                    }) 
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }


