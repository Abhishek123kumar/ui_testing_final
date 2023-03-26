import React from 'react'
import { useState } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import "./Bucket.css"

function Bucket({ text }) {
    const [txt, setTxt] = useState(text);
    const [editMode,setEditMode] = useState(false);
    return (
        <div id='bucketContainer' className='flex justify-between items-center text-gray-500 text-[18px] hover:bg-[#ff4343]  z-10 border-b-[1px] border-gray-400 '>
            <input onChange={(e)=>{setTxt(e.target.value)}}   type="text" bg- value={txt} disabled={editMode===false?true:false} className={editMode===false?`outline-none  py-3 pl-[12px]  z-1`:`outline-none  py-3 pl-[12px]   border-[2px] rounded-md`}  />
            <div className='py-3 pr-[12px] flex gap-3 cursor-pointer'>
                {editMode===false&&<div className='icon'  onClick={()=>{setEditMode(true)}}><EditRoundedIcon  /></div>}
                {editMode===true&&<div className='icon'  onClick={()=>{setEditMode(false)}}><CheckRoundedIcon  /></div>}
                <div className='icon'><DeleteRoundedIcon /></div>
            </div>
        </div>
    )
}

export default Bucket
