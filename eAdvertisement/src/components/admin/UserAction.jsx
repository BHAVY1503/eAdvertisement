import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const UserAction = () => {

    const [screens, setscreens] = useState([])
    const navigate = useNavigate(); 
    const getAllMyScreens = async() => {

        const res = await axios.get("/hording/getHordingsbyuserid/"+localStorage.getItem("id"))
        // const res = await axios.get("/hording/getallhording/")
        console.log(res.data) //api response...
        setscreens(res.data.data)

    }

    useEffect(() => {
        
        getAllMyScreens()
        
    }, [])

    const goToScreen = (id) => {
        navigate(`/user/screen/${id}`); //  navigate to UserScreen
      };
    

  return (
    <div style={{textAlign:"center"}}>
        {/* MY SCREENS */}
        <table className='table'>
            <thead className='thead-dark'>
                <tr>
                    <th>ID</th>
                    <th>hoardingDimension</th>
                    <th>hordingType</th>
                    <th>hourlyRate</th>
                    <th>hordingURL</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>IMAGE</th>
                    <th>ACTION</th>

                </tr>
            </thead>
            <tbody>
                {
                   screens?.map((sc)=>{
                    return<tr>
                        <td>{sc._id}</td>
                        <td>{sc.hordingDimension}</td>
                        <td>{sc.hordingType}</td>
                        <td>{sc.hourlyRate}</td>
                        <td>{sc.hordingURL}</td>
                        <td>{sc.latitude}</td>
                        <td>{sc.longitude}</td>

                        <td>
                            <img  style ={{height:100,width:100}}src={sc?.hordingURL}></img>
                        </td>
                        {/* <td>
                            <Link to={`/agency/updateScreen/${sc._id}`} className ="btn btn-info">UPDATE</Link>
                        </td> */}
                         <td>
                      <button className="btn btn-warning" onClick={() => goToScreen(sc._id)}>
                        ACTION
                      </button>
                     </td>
                    </tr>
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}