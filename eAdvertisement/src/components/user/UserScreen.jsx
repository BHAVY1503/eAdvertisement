import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Razorpay } from "../common/Razorpay";

export const UserScreen = () => {
  const [screens, setscreens] = useState([]);

  const getAllMyScreens = async () => {
    const res = await axios.get("/hording/getHordingsbyuserid/" + localStorage.getItem("id"));
    console.log(res.data); // API response...
    setscreens(res.data.data);
  };

  useEffect(() => {
    getAllMyScreens();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">My Screens</h2>
      <div className="row">
        {screens?.map((sc) => (
          <div className="col-md-4 mb-4" key={sc._id}>
            <div className="card shadow-sm h-100">
              <img
                src={sc.hordingURL}
                className="card-img-top"
                alt="Hoarding"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body" ><br/>
                <h5 className="card-title">{sc.hordingType}</h5><br></br><br/>
                <p className="card-text" >
                  <strong>Dimension:</strong> {sc.hordingDimension} <br />
                  <strong>Hourly Rate:</strong> ₹{sc.hourlyRate} <br />
                  <strong>Hoarding URL:</strong> {sc.hordingURL} <br />
                </p>
                <div className="d-flex justify-content-between">
                  <Link to={`/agency/updateScreen/${sc._id}`} className="btn btn-info btn-sm">
                    Update
                  </Link>
                  <div>
                    {sc.isPaid ? (
                      <button className="btn btn-success" disabled>
                        Paid
                      </button>
                    ) : (
                      <Razorpay hoardingId={sc._id} amount={sc.hourlyRate} refreshList={getAllMyScreens} />
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  {sc.isPaid ? (
                    <span className="badge bg-success">Paid</span>
                  ) : (
                    <span className="badge bg-danger">Unpaid</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Razorpay } from "../common/Razorpay";


// export const UserScreen = () => {

//     const [screens, setscreens] = useState([])
//     const getAllMyScreens = async() => {

//         const res = await axios.get("/hording/getHordingsbyuserid/"+localStorage.getItem("id"))
//         // const res = await axios.get("/hording/getallhording/")
//         console.log(res.data) //api response...
//         setscreens(res.data.data)

//     }

//     useEffect(() => {
        
//         getAllMyScreens()
        
//     }, [])
    

//   return (
//     <div style={{textAlign:"center"}} className="min-vh-100">
    
//         <table className='table table-striped'>
//             <thead>
//                 <tr>
//                     <th>Dimension</th>
//                     <th>Type</th>
//                     <th>hourlyRate</th>
//                     <th>hordingURL</th>
//                     {/* <th>Latitude</th> */}
//                     {/* <th>Longitude</th> */}
//                     <th>IMAGE</th>
//                     <th>ACTION</th>
//                     <th>Pay</th>
//                     <th>STATUS</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                    screens?.map((sc)=>{
//                     return<tr>

//                         <td>{sc.hordingDimension}</td>
//                         <td>{sc.hordingType}</td>
//                         <td>{sc.hourlyRate}</td>
//                         <td>{sc.hordingURL}</td>
//                         {/* <td>{sc.latitude}</td> */}
//                         {/* <td>{sc.longitude}</td> */}
//                         <td>
//                             <img  style ={{height:100,width:100}}src={sc?.hordingURL}></img>
//                         </td>
//                         <td>
//                             <Link to={`/agency/updateScreen/${sc._id}`} className ="btn btn-info">UPDATE</Link>
//                         </td>
//                         {/* <td><Razorpay/></td> */}
//                         <td>
//                   {
//                     sc.isPaid
//                       ? <button className="btn btn-success" disabled>Paid</button>
//                       : <Razorpay hoardingId={sc._id} amount={sc.hourlyRate} refreshList={getAllMyScreens} />
//                   }
//                 </td>
//                         <td>
//                   {sc.isPaid ? <span className="badge bg-success">Paid</span> : <span className="badge bg-danger">Unpaid</span>}
//                 </td>
//                     </tr>
                    
//                    }) 
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }