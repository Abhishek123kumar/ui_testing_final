import React from 'react'
import { useState } from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import Bucket from './Bucket';

function MainSidebar() {
    const [add, setAdd] = useState(false);
    return (
        <div className='flex flex-col shadow-md h-[100%] relative'>
            <div className='text-gray-500 text-[18px] font-medium py-4 pl-[12px] cursor-pointer  border-b-[2px] border-gray-400 drop-shadow-md' onClick={() => { setAdd(true) }}>
                <span>Add new Category</span>
                <AddOutlinedIcon />
            </div>

            {add && <div className='flex justify-center items-center absolute top-0 py-[13px] pl-[12px] text-[15px] left-0 right-0 bg-white'>
                <div className=''>
                    <input type="text" className='outline-none border-b-[1px] border-gray-400 mt-2' placeholder='Category name' />
                </div>
                <div className='flex gap-1 justify-center items-center ml-[10px]'>
                    <button className='bg-[#ff4343] text-[12px] text-white h-[25px] px-[3px] rounded-sm'>Add</button>
                    <button className='bg-[#ff4343] text-[12px] text-white h-[25px] px-[3px] rounded-sm' onClick={() => { setAdd(false) }}>Cancel</button>
                </div>
            </div>}

            <div className='overflow-auto'>
                <Bucket text="Education Video"/>
            </div>
        </div>
    )
}

export default MainSidebar
