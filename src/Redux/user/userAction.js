import {fetchUserLoading,fetchUserSuccess,fetchUserFail} from "./userSlice";
import { fetchBuckets } from "../buckets/bucketAction";
import showToast from "../../showToast";




export const createUser=(data)=>async (dispatch)=>{
    try{
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/register`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        const response=await result.json();
        console.log(response);
        if(response.success)
        {
            showToast({
                msg:"Successfully registered",
                type:"success"
            });
        }
        
    }catch(error){
        console.log(error.message)
    }
}


export const loginUser=(data)=>async (dispatch)=>{
    
    try{
        console.log(data);
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/login`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        const response=await result.json();
        if(response.success)
        {
            showToast({
                msg:"Successfully login",
                type:"success"
            });
            dispatch(fetchUserSuccess(response.user));
            localStorage.setItem("token",response.token);
            dispatch(fetchBuckets());

        }
        
    }catch(error){
        console.log(error.message)
        
    }
}

export const updateUser=()=>async (dispatch)=>{
    
    try{
        dispatch(fetchUserSuccess(null));
    }catch(error){
        console.log(error.message)
        
    }
}

export const fetchUser=()=>async (dispatch)=>{
    
    try{
       dispatch(fetchUserLoading());
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/getUser`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "token":localStorage.getItem("token")
            }
        })
        const response=await result.json();
        if(response.success)
        {
            dispatch(fetchUserSuccess(response.user));
        }
        else
        {
            dispatch(fetchUserFail(response.message));
        }
        
    }catch(error){
        console.log(error.message)
        dispatch(fetchUserFail(error.message))
        
    }
}


