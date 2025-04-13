import React from 'react'
// import Card from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import sliderImage from "../../assets/landing/images/slider-img.png"
import unipole from "../../assets/landing/images/unipole-hoarding.webp"
import billboard from "../../assets/landing/images/billboardhording.jpeg"
import gantry from "../../assets/landing/images/\gantryHording.jpeg"
import digital from "../../assets/landing/images/\digitalhording.jpeg"
import { requirePropFactory } from '@mui/material';
import about2image from "../../assets/landing/images/work-img.png";
import { Link } from 'react-router-dom';


 
 



export const DashBoard = () => {
    const divStyle = {
        backgroundImage: `url(${about2image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      };
  return (
    <div style={{}}>
      <div style={{backgroundColor:'',textAlign:'center',color:'#F53F52'}} >
         <h2> ADD YOUR HORDING</h2>
         </div>
         <Row xs={1} md={2} className="g-4" style={{justifyContent:'center',marginTop:'10px',}}>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={unipole} style={{ border:'4px solid white'}} />
            <Card.Body>
              <Card.Title style={{color:'#F53F52'}}>UNIPOLE HORDING</Card.Title><br></br>
              <Card.Text><br/>
              involves large, single-pole structures that elevate advertisements high above ground level, typically in high-traffic areas, to maximize visibility and capture attention from passersby and commuters. 
              </Card.Text>
              <Link to='/user/userprofile'>
              <button className="btn btn-danger">ADD</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row><br/>

    <Row xs={1} md={2} className="g-4" style={{justifyContent:'center'}}>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={billboard} style={{ border:'4px solid white'}} />
            <Card.Body>
              <Card.Title style={{color:'#F53F52'}}>BILLBOARD HORDING</Card.Title><br/>
              <Card.Text><br/>
              a large, public outdoor advertising structure, often found on roadsides or buildings, used to display advertisements or posters. 
              </Card.Text>
              <Link to='/user/userprofile'>
              <button className="btn btn-danger">ADD</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row><br/>
    <Row xs={1} md={2} className="g-4" style={{justifyContent:'center'}}>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={gantry} style={{ border:'4px solid white'}} />
            <Card.Body>
              <Card.Title style={{color:'#F53F52'}}>GANTRY HORDING</Card.Title><br/>
              <Card.Text><br/>
              a bridge-like overhead structure used to support equipment such as cranes, signals, or cameras.
              </Card.Text>
              <Link to='/user/userprofile'>
              <button className="btn btn-danger">ADD</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row><br/>
    <Row xs={1} md={2} className="g-4" style={{justifyContent:'center'}}>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={digital} style={{ border:'4px solid white'}} />
            <Card.Body>
              <Card.Title style={{color:'#F53F52'}}>DIGITAL HORDING</Card.Title><br/>
              <Card.Text><br/>
              excessive collection and retention of digital data, such as emails, documents, photos, and videos, leading to disorganization and stress.
              </Card.Text>
              <Link to='/user/userprofile'>
              <button className="btn btn-danger">ADD</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  

    </div>
        
  

  )
}
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Bar, Pie, Scatter } from "react-chartjs-2";
// import { data } from "react-router-dom";
// import { ArcElement, BarElement, CategoryScale, Chart, LinearScale, PointElement } from "chart.js";

// Chart.register(CategoryScale,LinearScale,BarElement,ArcElement,PointElement)

// export const DashBoard = () => {

//     const [chartData, setchartData] = useState({
//         labels:[],
//         datasets:[
//             {
//                 label:"Loading...",
//                 data:[],
//                 borderColor:"blue",
//                 borderWidth:2,
//                 backgroundColor:["red","blue","green"]

//             }
//         ]
//     })

//     useEffect(()=>{
//         getUserData()
//     },[])

//     const getUserData = async()=>{

//         const res = await axios.get("hording/getHordingsbyuserid/")
//         console.log(res.data.data)
//         setchartData({
//             labels:res.data.data?.map((user)=>user.hordingType || "N/A"),
//             datasets:[
//                 {
//                     label:"Users",
//                     data:res.data.data?.map((user)=>user.hourlyRate || 0),
//                     borderColor:"blue",
//                     borderWidth:2,
//                     backgroundColor:["red","green","blue","yellow"]
//                 }
//             ]
//         })

//     }



//   return <div style={{ textAlign: "center" }}>
//     <h1>CHART DEMO </h1>
//     <Bar data={chartData}></Bar>
//     <Pie data={chartData}></Pie>
//     <Scatter data={chartData}></Scatter>
//   </div>;
// };