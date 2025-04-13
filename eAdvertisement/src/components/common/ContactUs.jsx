import React from 'react'
import "../../assets/landingPage.css";
import "../../assets/landing/css/style.css";
import "../../assets/landing/css/responsiv.css";
import about2image from "../../assets/landing/images/about-img2.png";
import sliderImage from "../../assets/landing/images/slider-img.png";

export const ContactUs = () => {
  return (
      <div className="login">
     {/* <h5 className="login-card">Contact Us</h5>
     <div className="row"/>
        Corporate Office Start  */}
      {/* <div
        className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md-offset-4 col-lg-offset-3 wow zoomIn slow"
        style={{ visibility: "visible", animationName: "zoomIn" }}
      > */}
    {/* <div className="login" style={{backfaceVisibility:'hidden',backgroundColor:'#8D0B41'}}> */}
     {/* <div className='header_section'>  */}
   
      {/* <img src={sliderImage} alt="" />  */}
    {/* <div className='login' > */}
    <div className="col-md-6">
       <div className="img-box">
           <img src={sliderImage} alt="" />
                 </div>
             </div>
      <div className="login-card">
        <div className="brand">
          {/* <div className="brand-logo"></div> */}
          <h4 className='text-primary'>Call Us, Mail Us, Or Knock On Our Door!</h4>
          <h1>We Would Be Happy To Meet You</h1>
          {/* <p>Enter your credentials to access your account</p> */}
        </div>
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body card-body-pad">
                <h4 className="card-title card-title-pad text-center">
                  {/* Corporate Office, NCR */}
                </h4>
                <div className="media">
                  <div className="media-left">
                     <i className="fa fa-user-o" />
                  </div>
                  <div className="media-body">
                    <p className="">
                   <b> Corporate Office, NCR &nbsp;Address:</b><br></br> 810, Dumas, Surat - 395007, Gujrat, (INDIA){" "}
                      {/* 810, Dumas, Surat - 395007, Gujrat, (INDIA){" "} */}
                    </p>
                  </div>
                  {/* <br /> */}
                </div> 
                <div className="media">
                  <div className="media-left">
                    <i className="fa fa-user-o" />
                  </div>
                  <div className="media-body">
                    <p className="card-text">
                    &nbsp;<b>Address:</b>
                      localhost:5174,
                     810,DariyaKinarewala Hanumanji Mandir,Bhimpore Po-Dumas, Surat - 395007, Gujrat, (INDIA){" "}
                       {/* &nbsp;<b>Address:</b> 360Hoardings.com, 912 and 914 Tower 3
                      NX-byte Plot No 17 Nx-one Techzone 4 Greater Noida West
                      Gautam Budh Nagar. NOIDA, UTTAR PRADESH 201306 (INDIA){" "}  */}
                    </p>
                  </div>
                  <br />
                </div>
                <div className="media">
                  <div className="media-left">
                    <i className="fa fa-envelope-open-o" />
                  </div>
                  <div className="media-body">
                    <p className="card-text">
                      &nbsp;<b>Email:</b> abc@email.com
                    </p>
                  </div>
                  <br />
                </div>
                <div className="media">
                  <div className="media-left">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="media-body">
                    <p className="card-text">
                      &nbsp;&nbsp;<b>Landline:</b> +91-999-999-9999
                    </p>
                  </div>
                  <br />
                </div>
                <div className="media">
                  <div className="media-left">
                    <i className="fa fa-mobile" />
                  </div>
                  <div className="media-body">
                    <p className="card-text">
                      &nbsp;&nbsp;&nbsp;&nbsp;<b>Mobile:</b> +91-8866-0015-07{" "}
                    </p>
                  </div>
                  <br />
                </div>
               {/* <a href='/'>Home</a> */}
              </div>
            </div>
            <a href='/' style={{textAlign:'center'}}> Back to Home</a>
          </div>
        </div>
      </div>
      </div>
      //  </div>
      //  </div>
      //  </div>
      //  </div>
 
  )
}

   
