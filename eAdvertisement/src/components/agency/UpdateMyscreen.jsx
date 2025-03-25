import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom"

export const UpdateMyscreen = () => {
    const id = useParams().id
  
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

  const { register, handleSubmit } = useForm({
    defaultValues:async()=>{
        const res = await axios.get("/hording/getHordingById/" +id)
        return res.data.data
    }
});

const navigate = useNavigate();

const submitHandler = async (data) => {
  data.userId = localStorage.getItem("id");
  console.log(data);
  delete data._id; //put _id -->
  // console.log(data);
  const res = await axios.put("/hording/updatehording/"+id, data);
    console.log(res.data);
    navigate("/agency/myscreens")
};

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-4 shadow">
              <h2 className="text-center mb-4">Update Screen</h2>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="mb-3">
                  <label className="form-label">Hoarding Dimension</label>
                  <input type="text" className="form-control" {...register("hordingDimension")} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Hoarding Type</label>
                  <select className="form-select" {...register("hordingType")}>
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
                {/* <div className="mb-3">
                  <label className="form-label">Hoarding URL</label>
                  <input type="text" className="form-control" {...register("hordingURL")} />
                </div> */}
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
                <div className="mb-3">
                    <label className="form-label">Select HORDING URL</label>
                    <input type="file" {...register("image")}></input>
                  </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
