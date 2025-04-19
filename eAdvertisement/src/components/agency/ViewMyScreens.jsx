import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Razorpay } from '../common/Razorpay';

export const ViewMyScreens = () => {
  const [screens, setscreens] = useState([]);
  const [searchId, setSearchId] = useState('');

  // const getCityStateNames = async (cityId, stateId) => {
  //   const [cityRes, stateRes] = await Promise.all([
  //     axios.get(`/city/getcity/${cityId}`),
  //     axios.get(`/state/getstate/${stateId}`),
  //   ]);
  //   return {
  //     city: cityRes.data.data.name,  // assuming city object has `name`
  //     state: stateRes.data.data.name
  //   };
  // };

  // const getAllMyScreens = async () => {
  //   const res = await axios.get('/hording/getallhording/');
  //   const screensWithNames = await Promise.all(
  //     res.data.data.map(async (screen) => {
  //       const { city, state } = await getCityStateNames(screen.cityId, screen.stateId);
  //       return { ...screen, city, state };
  //     })
  //   );
  //   setscreens(screensWithNames);
  // };
  
  const getAllMyScreens = async () => {
    const res = await axios.get('/hording/getallhording/');
    setscreens(res.data.data);
  };

  useEffect(() => {
    getAllMyScreens();
  }, []);

  // Filter screens based on ID
  const filteredScreens = screens.filter((screen) =>
    screen._id.toLowerCase().includes(searchId.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Screens</h2>

      {/* Search Input */}
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search by Screen ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="form-control w-50 mx-auto"
        />
      </div>

      <div className="row">
        {filteredScreens.length > 0 ? (
          filteredScreens.map((sc) => (
            <div className="col-md-4 mb-4" key={sc._id}>
              <div className="card shadow-sm h-100">
                <img
                  src={sc.hordingURL}
                  className="card-img-top"
                  alt="Hoarding"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:'center'}}>{sc.hordingType}</h5><br></br><br/>
                  <p className="card-text">
                    <strong>Dimension:</strong> {sc.hordingDimension} <br />
                    <strong>Rate/hr:</strong> ₹{sc.hourlyRate} <br />
                    <strong>Latitude:</strong> {sc.latitude} <br />
                    <strong>Longitude:</strong> {sc.longitude} <br />
                    {/* <strong>City:</strong> {sc.city} <br />
                    <strong>State:</strong> {sc.state} <br /> */}
                    <strong>ID:</strong> {sc._id}
                  </p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/agency/updateScreen/${sc._id}`} className="btn btn-info btn-sm">
                      Update
                    </Link>
                    {sc.isPaid ? (
                      <span className="badge bg-success align-self-center">Paid</span>
                    ) : (
                      <span className="badge bg-danger align-self-center">Unpaid</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No screens found.</p>
        )}
      </div>
    </div>
  );
};


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Razorpay } from '../common/Razorpay';

// export const ViewMyScreens = () => {
//   const [screens, setscreens] = useState([]);

//   const getAllMyScreens = async () => {
//     const res = await axios.get('/hording/getallhording/');
//     console.log(res.data);
//     setscreens(res.data.data);
//   };

//   useEffect(() => {
//     getAllMyScreens();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4"> Screens</h2>
//       <div className="row">
//         {screens?.map((sc) => (
//           <div className="col-md-4 mb-4" key={sc._id}>
//             <div className="card shadow-sm h-100">
//               <img
//                 src={sc.hordingURL}
//                 className="card-img-top"
//                 alt="Hoarding"
//                 style={{ height: '200px', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{sc.hordingType}</h5> <br />
//                 <p className="card-text">
//                   <strong>Dimension:</strong> {sc.hordingDimension} <br />
//                   <strong>Rate/hr:</strong> ₹{sc.hourlyRate} <br />
//                   <strong>Latitude:</strong> {sc.latitude} <br />
//                   <strong>Longitude:</strong> {sc.longitude} <br/>
//                   <strong>ID:</strong> {sc._id}

//                 </p>
//                 <div className="d-flex justify-content-between">
//                   <Link to={`/agency/updateScreen/${sc._id}`} className="btn btn-info btn-sm">
//                     Update
//                   </Link>
//                   {sc.isPaid ? (
//                     <span className="badge bg-success align-self-center">Paid</span>
//                   ) : (
//                     <span className="badge bg-danger align-self-center">Unpaid</span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Razorpay } from "../common/Razorpay";


// export const ViewMyScreens = () => {

//     const [screens, setscreens] = useState([])
//     const getAllMyScreens = async() => {

//         // const res = await axios.get("/hording/getHordingsbyuserid/"+localStorage.getItem("id"))
//         const res = await axios.get("/hording/getallhording/")
//         console.log(res.data) //api response...
//         setscreens(res.data.data)

//     }

//     useEffect(() => {
        
//         getAllMyScreens()
        
//     }, [])
    

//   return (
//     <div style={{textAlign:"center"}} className="w-25 p-2" >
//         {/* MY SCREENS */}
//         {/* <table className='table table-striped table-dark'> */}
//         <table className='table table-striped'>

//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Dimension</th>
//                     <th>Type</th>
//                     <th>hourlyRate</th>
//                     <th>hordingURL</th>
//                     <th>Latitude</th>
//                     <th>Longitude</th>
//                     <th>IMAGE</th>
//                     <th>ACTION</th>
//                     {/* <th>Pay</th> */}
//                     <th>Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                    screens?.map((sc)=>{
//                     return<tr>
//                         <td>{sc._id}</td>
//                         <td>{sc.hordingDimension}</td>
//                         <td>{sc.hordingType}</td>
//                         <td>{sc.hourlyRate}</td>
//                         <td>{sc.hordingURL}</td>
//                         <td>{sc.latitude}</td>
//                         <td>{sc.longitude}</td>
//                         <td>
//                             <img  style ={{height:50,width:50}}src={sc?.hordingURL}></img>
//                         </td>
//                         <td>
//                             <Link to={`/agency/updateScreen/${sc._id}`} className ="btn btn-info">UPDATE</Link>
//                         </td>
//                         {/* <td><Razorpay/></td> */}
//                         {/* <td>
//                   {
//                     sc.isPaid
//                       ? <button className="btn btn-success" disabled>Paid</button>
//                       : <Razorpay hoardingId={sc._id} amount={sc.hourlyRate} refreshList={getAllMyScreens} />
//                   }
//                 </td> */}
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

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// export const ViewMyScreens = () => {

//     const [screens, setscreens] = useState([])
//     const getAllMyScreens = async() => {

//         // const res = await axios.get("/hording/getHordingsbyuserid/"+localStorage.getItem("id"))
//         const res = await axios.get("/hording/getallhording/")
//         console.log(res.data) //api response...
//         setscreens(res.data.data)

//     }

//     useEffect(() => {
        
//         getAllMyScreens()
        
//     }, [])
    

//   return (
//     <div style={{textAlign:"center"}}>
//         MY SCREENS
//         <table className='table table-dark'>
//             <thead>
//                 <tr>
//                     <th>hoardingDimension</th>
//                     <th>hordingType</th>
//                     <th>hourlyRate</th>
//                     <th>hordingURL</th>
//                     <th>Latitude</th>
//                     <th>Longitude</th>
//                     <th>IMAGE</th>
//                     <th>ACTION</th>
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
//                         <td>{sc.latitude}</td>
//                         <td>{sc.longitude}</td>
//                         <td>
//                             <img  style ={{height:100,width:100}}src={sc?.hordingURL}></img>
//                         </td>
//                         <td>
//                             <Link to={`/agency/updateScreen/${sc._id}`} className ="btn btn-info">UPDATE</Link>
//                         </td>
//                     </tr>
//                    }) 
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }
