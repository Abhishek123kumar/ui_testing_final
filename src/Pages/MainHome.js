import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'


function MainHome() {

    useEffect(()=>{
        if(localStorage.getItem("token")===null)
        {
          navigate("/");
        }
      },[])

    return (
        <div>
            <Navbar />
            <Main />
        </div>
    )
}

export default MainHome
