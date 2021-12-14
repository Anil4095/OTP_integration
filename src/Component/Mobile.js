import React, { useState } from 'react'
import '../App.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Mobile = () => {
    const [mobile, setMobile] = useState([])


    let history = useHistory();



    const handleClick = () => {

        const postNumber = {
            mobile,

        };
        axios.post(`http://143.110.244.110/tija/frontuser/loginuser`, postNumber)
            .then(response => {

                let newData = response.data[0]

                history.push({
                    pathname: './Login',
                    state: { newData }
                })

            })

    }





    const handleChange = (e) => {
        setMobile(e.target.value)
    }
    return (
        <div className="container" style={{ justifyContent: "center", display: "flex" }}>
            <h1>Mobile:</h1>
            <div className="inp-div">
                <input className="inp-div" type="text" placeholder="Phone Number" value={mobile} onChange={handleChange} />
            </div>
            <div className="btn-div">
                <button className="btn" onClick={handleClick} >Login</button>
            </div>

        </div>
    )
}

export default Mobile
