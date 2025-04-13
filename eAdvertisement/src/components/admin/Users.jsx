import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Users = () => {

    const { id } = useParams()
    const [screens, setscreens] = useState([])
    const getAllUsers = async() => {

        // const res = await axios.get("/hording/getHordingsbyuserid/"+localStorage.getItem("id"))
        const res = await axios.get(`/users`)
        console.log(res.data) //api response...
        setscreens(res.data.data)

    }
    const deleteUser = async(id) =>{
        const res = await axios.delete("/users" + id)
        // alert(id)
        console.log(res)

        if(res.status === 204){
             alert("user deleted..");
      

        }
    }
    // const [screens, setscreens] = useState([])
    // const getAllMyScreens = async() => {

    //     const res = await axios.get("/hording/getHordingsbyuserid/"+localStorage.getItem("id"))
    //     // const res = await axios.get("/hording/getallhording/")
    //     console.log(res.data) //api response...
    //     setscreens(res.data.data)

    // }
    useEffect(() => {
        axios.get(`/users/${id}`).then((res) => {
          setUser(res.data.data)
        })
      }, [id])
    
    //   if (!users) return <div>Loading...</div>

    useEffect(() => {
        
        getAllUsers()
        
    }, [])
    

  return (
    <div style={{textAlign:"center"}}>
        USER LIST
        <table className='table table-striped'>
            <thead className='thead-dark'>
                <tr>
                    <th>ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    {/* <th>STATUS</th> */}
                    <th>EMAIL</th>
                    {/* <th>Longitude</th> */}
                    {/* <th>IMAGE</th> */}
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                   screens?.map((sc)=>{
                    return<tr>

                        <td>{sc._id}</td>
                        <td>{sc.firstName}</td>
                        <td>{sc.lastName}</td>
                        {/* <td>{sc.status}</td> */}
                        <td>{sc.email}</td>
                        {/* <td>{sc.longitude}</td> */}
                        {/* <td>
                            <img  style ={{height:100,width:100}}src={sc?.hordingURL}></img>
                        </td> */}
                        {/* <td>
                            <Link to={`/user/userscreen/${sc._id}`} className ="btn btn-info">ACTION</Link>
                        </td> */}
                        <td>
                                    <button onClick={()=>{deleteUser(sc._id)}} className="btn btn-danger">Delete</button>
                                </td>
                    </tr>
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}


// import React, { useEffect, useState } from 'react'
// import { DataGrid } from "@mui/x-data-grid";
// import axios from 'axios';

// export const Users = () => {

//     const columns = [
//         {field:"_id",headerName:"ID",width:250},
//         {field:"firstName",headerName:"Name",width:150},
//         {field:"lastName",headerName:"Surname",width:150},
//         {field:"status",headerName:"Avalabality_Status",width:150},
//         {field:"email",headerName:"Email",width:250},
//         // {field:"latitude",headerName:"latitude",width:150},
//         // {field:"longitude",headerName:"longitude",width:150},
//     ];
//       const [hording, sethording] = useState([])

//       const getAllUsers = async()=>{
//         const res = await axios.get("/users")
//         sethording(res.data.data)
//       }

//       useEffect(()=>{
//         getAllUsers()
//       },[])
   
     
    
//   return (
//     <div>
//         <DataGrid
//         rows={hording}
//         columns={columns}
//         pageSize={4}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         getRowId={(row)=> row._id}>
//             {/* <button className='btn btn-primary'>Action</button> */}
//         </DataGrid>
//     </div>
//   )
// }