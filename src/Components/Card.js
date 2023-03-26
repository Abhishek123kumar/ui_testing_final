import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EditCard from './EditCard';
import { useState } from 'react';

function Card() {
    const [edit, setEdit] = useState(false);
    return (
        <div className='flex justify-center'>
            <div className='w-[90%] h-[150px] border-[1px] shadow-lg rounded-md flex flex-col p-2 '>
                <div className=' text-center text-[20px] font-medium text-gray-500'>
                    Physics
                </div>
                <div className='flex mt-[20px] justify-between w-[80%] mx-auto'>
                    <div className='cursor-pointer text-[#ff4343] hover:font-bold'>
                        Watch Video
                    </div>
                    <div className='cursor-pointer text-[#ff4343] hover:font-bold'>
                        Copy Link
                    </div>
                </div>
                <div className='flex mt-[20px] justify-between w-[80%] mx-auto text-[#ff4343]'>
                    <div className='cursor-pointer'>
                        <ArrowForwardOutlinedIcon />
                    </div>
                    <div className='flex gap-3'>
                        <div className='cursor-pointer' onClick={()=>{setEdit(true)}}>
                            <EditRoundedIcon />
                        </div>
                        <div className='cursor-pointer'>
                            <DeleteRoundedIcon />
                        </div>
                    </div>
                </div>
            </div>
        {edit&&<div className='fixed top-0 left-0 w-[100%] h-[100%]  z-100 bg-[#535151a2]'>
                <EditCard setEdit={setEdit}   />
            </div>
            }
        </div>
    )
}

export default Card
