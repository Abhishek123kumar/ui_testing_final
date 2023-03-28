import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import HistoryCon from '../Components/HistoryCon'


function History() {

  useEffect(()=>{
    if(localStorage.getItem("token")===null)
    {
      navigate("/");
    }
  },[])

  return (
    <div>
      <Navbar/>
      <HistoryCon/>
    </div>
  )
}

export default History
