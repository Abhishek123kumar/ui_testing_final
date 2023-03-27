import React from 'react'
import MainSidebar from './MainSidebar'
import Card from './Card'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddNewVideo from './AddNewVideo';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Main() {
    
    const { activeBucket, cards } = useSelector(store => { return store.activeBucket });
    const [add, setAdd] = useState(false);
    return (
        <div className='mt-[72px] flex'>
            <div className='hidden md:block w-[20%] bg-[#f1f1f1] fixed p-0 m-0 h-[90%]'>
                <MainSidebar />
            </div>
            <div className='w-[80%] md:ml-[20%] mx-auto flex flex-col'>
                <div className='px-[30px] py-2  text-gray-400 font-bold text-[20px] flex justify-between'>
                    <div>
                        {activeBucket ? activeBucket.name : ""}
                    </div>
                    <div className='w-[30px] h-[30px] bg-[#ff4343] text-white flex justify-center items-center rounded-[50%] cursor-pointer' onClick={() => { setAdd(true) }}>
                        <AddOutlinedIcon />
                    </div>
                </div>
                {
                    activeBucket === null ?
                        <div className='text-center text-gray-400 font-bold text-[30px]'>
                            Welcome to YMusic
                        </div> :
                        cards.length === 0 ?
                            <div className='px-[30px] py-2  text-gray-400 font-bold text-[16px]'>
                                Create new cards
                            </div> :
                            <div className='px-[10px] py-[10px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]'>
                                {cards.map((c) => {
                                    return <Card key={c._id} card={c} />
                                })}
                           </div>
                }
            </div>
            {add && <div className='fixed top-0 left-0 w-[100%] h-[100%]  z-50 bg-[#535151a2]'>
                <AddNewVideo setAdd={setAdd} />
            </div>
            }
        </div>
    )
}

export default Main
