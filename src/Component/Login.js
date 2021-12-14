import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'
import axios from 'axios'


const Login = (props) => {
  const location = useLocation()


  const [otp, setOtp] = useState()
  const [data, setData] = useState()
  console.log(data)





  const verifyMessage = (props) => {

    const postMessage = {
      otp,
      newuser: data.newData.newuser,
      tempuser: data.newData.tempuser






    };
    axios.post(`http://143.110.244.110/tija/frontuser/registeruser`, postMessage)
      .then(response => {

        console.log(response)


      })

  }

  useEffect(() => {
    setData(location.state)
  }, [])

  const messageChange = (e) => {
    setOtp(e.target.value)
  }



  return (
    <div className="container" style={{ justifyContent: "center", display: "flex" }}>
      <h1>Your Otp is:- {otp}</h1>
      <div className="inp-div">
        <input className="inp-div"  placeholder="OTP" onChange={messageChange}/>
      </div >
      <div className="btn-div">
        <button className="btn" onClick={verifyMessage}>Verify</button>
      </div>
    </div>
  )
}

export default Login
