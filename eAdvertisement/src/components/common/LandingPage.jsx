import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/landingPage.css";
import "../../assets/landing/css/style.css";
import "../../assets/landing/css/responsiv.css";
import about2image from "../../assets/landing/images/about-img2.png";
import sliderImage from "../../assets/landing/images/slider-img.png";
import { Link } from "react-router-dom";
import { Bar, Pie, Scatter } from "react-chartjs-2";
import { data } from "react-router-dom";
import { ArcElement, BarElement, CategoryScale, Chart, LinearScale, PointElement } from "chart.js";
import axios from "axios";


Chart.register(CategoryScale,LinearScale,BarElement,ArcElement,PointElement)
const LandingPage = () => {
  
  
  
  
  
  
  
  const [chartData, setchartData] = useState({
    labels:[],
    datasets:[
        {
            label:"Loading...",
            data:[],
            borderColor:"blue",
            borderWidth:2,
            backgroundColor:["red","blue","green"]
            // generateColors:(res.data.data.length)

        }
    ]
})



useEffect(()=>{
    getUserData()
},[])

const  getUserData = async()=>{

    // const res = await axios.get("https://node5.onrender.com/user/user")
    const res = await axios.get("http://localhost:3000/hording/getallhording")
    console.log(res.data.data)
    const hordingData = res.data.data;
const labels = hordingData.map((user) => user.hordingType?.replace(/_/g, " ").toUpperCase() || "N/A");
const hourlyRates = hordingData.map((user) => user.hourlyRate || 0);
const colors = hourlyRates.map((_, i) => `hsl(${(i * 60) % 360}, 70%, 60%)`);
    // setchartData({
    //     labels:res.data.data?.map((user)=>user.hordingType || "N/A"),
    //     datasets:[
    //         {
    //             label:"User",
    //             data:res.data.data?.map((user)=>user.hourlyRate || 0),
    //             borderColor:"blue",
    //             borderWidth:2,
    //             backgroundColor:["red","green","blue","yellow"]
    //         }
    //     ]
    // })
    setchartData({
      labels: labels,
      datasets: [
        {
          label: "Hourly Rate by Hording Type",
          data: hourlyRates,
          borderColor: "rgba(0,0,255,0.5)",
          borderWidth: 2,
          backgroundColor: colors,
        },
      ],
    
        },
    );

}
  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>
                E-Advertisement
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="s-1"> </span>
              <span className="s-2"> </span>
              <span className="s-3"> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  {/* <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                {" "}
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="service.html">
                {" "}
                Services{" "}
              </a>
            </li> */}
                  {/* <li className="nav-item">
              <a className="nav-link" href="#contactLink">
                Contact Us
              </a>
            </li> */}
                </ul>
              </div>
              <div className="quote_btn-container ">
                <div className="btn-box">
                  <Link to="/login" className="btn-1">
                    Login
                  </Link>
                  <Link to="/signup" className="btn-2">
                    Signup
                  </Link>
                </div>
                <form className="form-inline">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className=" slider_section ">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active carousel-item-left">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>E-ADVERTISEMENT</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking
                      </p>
                      <div className="btn-box">
                        <a href="contactus" className="btn-1">
                          Contact Us
                        </a>
                        {/* <a href="" className="btn-2">
                          Get A Quote
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      {/* <img src={sliderImage} alt="" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-item-next carousel-item-left">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>The best marketing</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>The best marketing</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-container">
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              {/* <span className="sr-only">Previous</span> */}
            </a>
            <a
              className="carousel-control-next"
              href="signup"
              role="button"
              data-slide="next"
            >
              {/* <span className="sr-only">Next</span> */}
            </a>
          </div>
        </div>
      </section>
      <section className="about_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={about2image} alt="" />
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <div className="">
                <p>We are a creative and results-driven advertising agency dedicated to helping businesses grow through innovative marketing strategies. Our team specializes in crafting compelling campaigns that engage audiences and drive success.
                </p>
                <p>
                Our mission is to connect brands with their ideal customers through impactful advertisements. Whether it’s digital marketing, social media campaigns, or traditional advertising, we ensure every message reaches the right people at the right time.
                </p>
                <p>
                <b>Join Us on the Journey:</b> 
                  We believe in the power of storytelling and strategic branding. Let’s bring your vision to life and make an impact together!
                </p><br/>
                <p>1. Our Vision :
                 "To revolutionize the way businesses advertise by offering a seamless, tech-driven platform that connects advertisers with their ideal audience in real-time."</p>

                <p>2. What We Do :<br/>
                Provide a dynamic platform for businesses to book digital hoardings and banners.<br/>

                 Offer tailored ad placement based on location, audience demographics, and analytics.<br/>

                 Track advertisement performance using data visualization (as seen in your charts).</p>

                <p>3. Why Choose Us :<br/>
                🌐 Digital First: Our platform is built for modern businesses looking to reach wider audiences.<br/>
                📊 Data-Driven Insights: Real-time analytics to track your ad’s performance.<br/>

                🤝 Transparency & Control: Businesses can choose ad slots, see rates, and manage schedules.<br/>

                ⏱ Time-Saving: No more back-and-forth with vendors—we bring everything into one platform.</p>
                </div>
                <a href="signup">Explore Our Service</a>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    
  
      {/* <div style={{display:'flex'}}>
      <div className="login-card" style={{ textAlign: "center" }}>
    <h1>SUCSESS CHART </h1>
    <Bar data={chartData}></Bar>
    <Bar
  data={chartData}
  options={{
    plugins: {
      title: {
        display: true,
        text: "Hourly Rate Distribution (Bar Chart)",
        font: { size: 18 },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Hourly Rate (₹)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Hording Type",
        },
      },
    },
  }}
/>

  </div>
  <div className="login-card" style={{ textAlign: "center" }}>
    <h1>SUCSESS CHART </h1>
    <Pie data={chartData}></Pie>
  </div>
  <div className="login-card" style={{ textAlign: "center" }}>
    <h1>SUCSESS CHART </h1>
    <Scatter data={chartData}></Scatter>
  </div>
  </div>
    </div> */}
    {/* <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '20px',
  padding: '40px'
}}>
  <div className="login-card" style={{ textAlign: "center" }}>
    <h2>Bar Chart</h2>
    <Bar data={chartData} options={{ plugins: { title: { display: true, text: "Hourly Rates - Bar" }, legend: { display: false } }, scales: { y: { beginAtZero: true } } }} />
  </div>
  <div className="login-card" style={{ textAlign: "center" }}>
    <h2>Pie Chart</h2>
    <Pie data={chartData} options={{ plugins: { title: { display: true, text: "Hourly Rates - Pie" } } }} />
  </div>
  <div className="login-card" style={{ textAlign: "center" }}>
    <h2>Scatter Chart</h2>
    <Scatter data={chartData} options={{ plugins: { title: { display: true, text: "Hourly Rates - Scatter" } }, scales: { x: { title: { display: true, text: "Hording Index" } }, y: { title: { display: true, text: "Hourly Rate (₹)" }, beginAtZero: true } } }} />
  </div> */}
</div>
// </div>
);
};

export default LandingPage;