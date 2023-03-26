import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function AddNewVideo({setAdd}) {
    return (
        <div className='w-[100%] h-[100%]'>
            <div className='flex  justify-center items-center h-[100%] w-[100%] md:w-[70%] mx-auto'>

                <form className="gap-[20px] flex flex-col p-[20px] bg-white rounded-[10px] w-[80%] drop-shadow-lg border-[1px] border-gray-400" >
                    <div className='flex text-center justify-between text-[18px] font-bold'>
                        <span>Add new video</span>
                        <span className='cursor-pointer' onClick={() => { setAdd(false) }}><CloseOutlinedIcon /></span>
                    </div>
                    <input autoComplete="on" required={true} className="py-[4px] outline-none border-b-[1px] border-b-gray-400" type="text" placeholder="Video Name" name="video-name" />
                    <input autoComplete="on" required={true} className="py-[4px] outline-none border-b-[1px] border-b-gray-400" type="url" placeholder="Video URL" name="video-url" />
                    <button className='rounded-md px-3 py-[3px] text-[18px] font-bold  bg-[#ff4343]  text-white' >Save</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewVideo
