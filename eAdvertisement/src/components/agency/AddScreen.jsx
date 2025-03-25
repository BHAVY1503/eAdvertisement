import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export const AddScreen = () => {
  
  const [states, setstates] = useState([])
  const [cities, setcities] = useState([])
  const [aeras, setaeras] = useState([])
  const getAllStates = async(data)=>{
    const res = await axios.get("/state/getallstates")
    console.log(res.data)
    setstates(res.data.data)
  }

  useEffect(() => {
    getAllStates();
  }, []);

  const getCityByStateId = async (id) => {
    //api...
    const res = await axios.get("city/getcitybystate/" + id);
    console.log("city response...", res.data);
    setcities(res.data.data);
  };

  const getAreaByCityId = async(id)=>{
    const res= await axios.get("area/getareabycity/" + id)
    setaeras(res.data.data)
  }

 

  const {register, handleSubmit} = useForm();

  const submitHandler = async(data) => {
 console.log(data)

  }
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card p-4 shadow">
          <h2 className="text-center mb-4">Add Screen</h2>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3">
              <label className="form-label">Hoarding Dimension</label>
              <input type="text" className="form-control" {...register("hoardingDimension")} />
            </div>
            <div className="mb-3">
              <label className="form-label">Hoarding Type</label>
              <select className="form-select" {...register("hoardingType")}>
                <option value="Unipole">Unipole</option>
                <option value="Billboard">Billboard</option>
                <option value="Gantry">Gantry</option>
                <option value="Digital">Digital</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Hourly Rate</label>
              <input type="number" className="form-control" {...register("hourlyRate")} />
            </div>
            <div className="mb-3">
              <label className="form-label">Hoarding URL</label>
              <input type="text" className="form-control" {...register("hordingURL")} />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Latitude</label>
                <input type="text" className="form-control" {...register("latitude")} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Longitude</label>
                <input type="text" className="form-control" {...register("longitude")} />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Select State</label>
              <select
                className="form-select"
                {...register("stateId")}
                onChange={(event) => getCityByStateId(event.target.value)}
              >
                <option>SELECT STATE</option>
                {states?.map((state) => (
                  <option key={state._id} value={state._id}>{state.Name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Select City</label>
              <select
                className="form-select"
                {...register("cityId")}
                onChange={(event) => getAreaByCityId(event.target.value)}
              >
                <option>SELECT CITY</option>
                {cities?.map((city) => (
                  <option key={city._id} value={city._id}>{city.Name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Select Area</label>
              <select className="form-select" {...register("areaId")}>
                <option>SELECT AREA</option>
                {aeras?.map((area) => (
                  <option key={area._id} value={area._id}>{area.name}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};
//     <div style={{textAlign:'center'}} class="p-3 mb-2 bg-info text-dark"> 
//       <h1>ADD SCREEN</h1>
//       <form onSubmit={handleSubmit(submitHandler)} >

//         <div  class="row mb-3">
//           <label class="col-sm-2 col-form-label" >HordingDimension:</label>
//           <div class="col-sm-8">
//           <input type="text" {...register("hordingdimension")} class="form-control" ></input>
//           </div>
//         </div>

//         <div class="row mb-3">
//           <lable class="col-sm-2 col-form-label">HordingTypes:</lable>
//           <div class="col-sm-8"> 
//           <select {...register("hordingdimension")}  class="form-select">
//             <option value={"Unipol"}>Unipole</option>
//             <option value={"Billbord"}>Billbord</option>
//             <option value={"Ganatry"}>Ganatry</option>
//             <option value={"Digital"}>Digital</option>
//           </select>
//           </div>
//         </div>

//         <div class="row mb-3">
//           <label  class="col-sm-2 col-form-label">HourlyRate:</label>
//           <div class="col-sm-8">
//           <input type="number" {...register("hourlyRate")} class="form-control"></input>
//           </div>
//         </div>

//         <div class="row mb-3">
//           <label  class="col-sm-2 col-form-label">HordingURL:</label>
//           <div  class="col-sm-8">
//           <input type="hordingURL" {...register("hordingURL")}  class="form-control"></input>
//           </div>
//         </div>

//         <div class="form-group row mb-3">
//           <label class="col-sm-2 col-form-label">LATITUDE:</label>
//           <div class="col-sm-8">
//           <input type="text" {...register("latitude")} class="form-control"></input>
//           </div>
//         </div>

//         <div  class="form-group row mb-3">
//           <label class="col-sm-2 col-form-label">LONGITUDE:</label>
//           <div class="col-sm-8">
//           <input type="text" {...register("longitude")} class="form-control" ></input>
//           </div>
//         </div>

//         <div  class="row mb-3">
//           <lable class="col-sm-2 col-form-label">SELECT STATE:</lable>
//           <div class="col-sm-8">
//           <select {...register("stateId")} class="form-select" onChange={(event)=>{
//              getCityByStateId(event.target.value)
//           }}>
//             <option>Select State....</option>
//             {states?.map((state)=>{
//               return <option value={state._id}>{state.Name}</option>
//             })

//             }
//           </select>
//           </div>
//         </div>

//         <div class="row mb-3">
//           <lable class="col-sm-2 col-form-label">SELECT CITY:</lable>
//           <div class="col-sm-8">
//           <select {...register("cityId")} class="form-select"  onChange={(event)=>{
//             getAreaByCityId(event.target.value)
//           }}>
//             <option>Select City...</option>
//             {cities?.map((city)=>{
//               return <option value={city._id}>{city.Name}</option>
//             })}
//           </select>
//           </div>
//         </div>

//         <div class="row mb-3">
//           <lable  class="col-sm-2 col-form-label">SELECT AREA:</lable>
//           <div class="col-sm-8">
//           <select {...register("areaId")} class="form-select" >
//             <option>Select Area...</option>
//             {aeras?.map((area)=>{
//               return <option value={area._id}>{area.name}</option>
//             })}
//           </select>
//           </div>

//         </div>
//         <div>
//           <input type="submit" class="btn btn-primary"></input>
//         </div>
//       </form>
//     </div>
//   )
// }
