import React from 'react'
import { useNavigate } from 'react-router-dom'
import { updateUser } from '../Redux/user/userAction';
import { useDispatch } from 'react-redux';



const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className='bg-white w-[100%] fixed top-0 z-10 shadow-md '>
            <div className='container w-[100%] px-[30px] py-4 mx-auto flex items-center justify-between'>
                <div className='text-[26px]  font-bold  flex justify-center item-center'>
                    <span className='cursor-pointer' onClick={() => { navigate("/");}}>YMusic</span>
                </div>
                <div className=' flex justify-center item-center'>
                    {localStorage.getItem("token") !== null ? <button className='rounded-md px-3 py-[3px] text-[18px] font-bold  bg-[#ff4343]  text-white' onClick={()=>{localStorage.removeItem("token");navigate("/");dispatch(updateUser()) }} >LogOut</button> :
                        <button className='rounded-md px-3 py-[3px] text-[18px] font-bold  bg-[#ff4343]  text-white' onClick={() => { navigate("/auth") }}>Get Started</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar