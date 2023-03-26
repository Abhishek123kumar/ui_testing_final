import React from 'react'

function Login({setPot}) {
    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center'>
            <div className="flex gap-1  flex-col justify-center items-center mt-[20px] w-[100%] sm:w-[50%]">
                <div className='text-center text-[18px] font-bold'>Login</div>
                <form className="gap-[20px] flex flex-col p-[20px] bg-white rounded-[10px] w-[80%] drop-shadow-lg border-[1px] border-gray-400" >
                    <input autoComplete="on" required={true} className="py-[4px] outline-none border-b-[1px] border-b-gray-400" type="email" placeholder="Email" name="email" />
                    <input autoComplete="on" minLength="6" required={true} className="py-[4px] outline-none border-b-[1px] border-b-gray-400" type="password" placeholder="Password" name="password" />
                    <button className='rounded-md px-3 py-[3px] text-[18px] font-bold  bg-[#ff4343]  text-white' >Continue</button>
                    <div className='text-center flex justify-center items-center flex-col md:flex-row md:gap-1'><span>Not registered?</span> <span className='text-[#ff4343] cursor-pointer font-medium' onClick={()=>{setPot(2)}}>Sign Up</span></div>
                </form>
            </div>
        </div>
    )
}

export default Login
