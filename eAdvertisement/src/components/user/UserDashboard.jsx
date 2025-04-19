import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [screenCount, setScreenCount] = useState(0);
  const [activeHoardings, setActiveHoardings] = useState(0);
  const [allHoardings, setAllHoardings] = useState([]); // ⬅️ to store all hoardings

  useEffect(() => {
    axios.get("/hording/getHoardingStats")
      .then((res) => {
        setScreenCount(res.data.totalScreens);
        setActiveHoardings(res.data.activeScreens);
      })
      .catch((err) => {
        console.error("Error fetching hoarding stats:", err);
      });

    // ✅ Fetch all hoardings
    axios.get("/hording/getallhording")
      .then((res) => {
        setAllHoardings(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching all hoardings:", err);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome Back 👋</h2>
      <p>Use the sidebar to add screens, manage your hoardings, and more.</p>
      <img
  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600&h=300"
  alt="dashboard"
  style={{ width: "100%", borderRadius: "12px" }}
/>

      <div className="row">
        <div className="col-md-3 card p-3 m-2 shadow">
          <h5>Total Screens</h5>
          <h2>{screenCount}</h2>
        </div>
        <div className="col-md-3 card p-3 m-2 shadow">
          <h5>Active Hoardings</h5>
          <h2>{activeHoardings}</h2>
        </div>
      </div>

      {/* ✅ Show all screens below */}
      <div className="mt-5">
        <h4>All Screens Added by Users</h4>
        <div className="row">
          {allHoardings.map((hoarding, index) => (
            <div className="col-md-4" key={index}>
              <div className="card p-3 m-2 shadow-sm">
                <img src={hoarding.hordingURL} alt="Hoarding" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <h5 className="mt-2">{hoarding.hordingType} - {hoarding.hordingDimension}</h5>
                <p>Rate: ₹{hoarding.hourlyRate}/hr</p>
                <p>Status: {hoarding.isPaid ? "Active" : "Inactive"}</p>
                <p>By User: {hoarding.userId?.firstName} {hoarding.userId?.lastName || "Unknown"}</p>

                {/* <p>By User: {hoarding.userId?.name || "Unknown"}</p>
                 */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { DashBoard } from '../layouts/DashBoard';

// const UserDashboard = () => {

//   const [screenCount, setScreenCount] = useState(0);
//   const [activeHoardings, setActiveHoardings] = useState(0);

//   const userId = localStorage.getItem("userId"); // assuming you're storing it after login

//   // useEffect(() => {
//   //   // Fetch screen data
//   //   axios.get(`/userscreens/${userId}`)
//   //     .then((res) => {
//   //       const allScreens = res.data;
//   //       setScreenCount(allScreens.length);

//   //       const active = allScreens.filter(screen => screen.status === 'active'); // adjust 'status' key if different
//   //       setActiveHoardings(active.length);
//   //     })
//   //     .catch((err) => {
//   //       console.error("Error fetching screens:", err);
//   //     });
//   // }, [userId]);
//   useEffect(() => {
//     axios.get("/hording/getHoardingStats")
//       .then((res) => {
//         setScreenCount(res.data.totalScreens);
//         setActiveHoardings(res.data.activeScreens);
//       })
//       .catch((err) => {
//         console.error("Error fetching hoarding stats:", err);
//       });
//   }, []);
  
  
  

//   const chartData = {
//     labels: ['Screen A', 'Screen B', 'Screen C'],
//     datasets: [{
//       label: 'Ad Engagement',
//       data: [30, 45, 70],
//       backgroundColor: ['#007bff', '#28a745', '#ffc107']
//     }]
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>Welcome Back 👋</h2>
//       <p>Use the sidebar to add screens, manage your hoardings, and more.</p>
//       <img
//   src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600&h=300"
//   alt="dashboard"
//   style={{ width: "100%", borderRadius: "12px" }}
// />
// {/* <img
//   src="https://picsum.photos/600/300"
//   alt="dashboard"
//   style={{ width: "100%", borderRadius: "12px" }}
// /> */}





//       <div className="row">
//     <div className="col-md-3 card p-3 m-2 shadow">
//       <h5>Total Screens Added By Users</h5>
//       <h2>{screenCount}</h2>
//       {/* <h2>8</h2> */}
//     </div>
//     <div className="col-md-3 card p-3 m-2 shadow">
//       <h5>Active Hoardings</h5>
//       <h2>{activeHoardings}</h2>
//       {/* <h2>5</h2> */}
//     </div>
//   </div>
//     </div>
   
//     // <div className="container mt-4">
//     //   <h2>Welcome Back!</h2>
//     //   <p>Here's an overview of your advertisement screens and stats.</p>

//     //   <div className="card p-3 shadow-sm mb-4">
//     //     <h5>Engagement Overview</h5>
//     //     <Bar data={chartData} />
//     //   </div>

//     //   <div className="row">
//     //     <div className="col-md-6">
//     //       <div className="card p-3 shadow-sm">
//     //         <h5>Your Screens</h5>
//     //         <ul>
//     //           <li>Screen A - Location: XYZ</li>
//     //           <li>Screen B - Location: ABC</li>
//     //           <li>Screen C - Location: DEF</li>
//     //         </ul>
//     //       </div>
//     //     </div>
//     //     <div className="col-md-6">
//     //       <div className="card p-3 shadow-sm">
//     //         <h5>Upcoming Bookings</h5>
//     //         <p>No bookings yet.</p>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//   );
// };
// <DashBoard />


// export default UserDashboard;
