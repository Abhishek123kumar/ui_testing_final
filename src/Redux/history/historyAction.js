import { fetchallHistoryFail,fetchallHistoryLoading,fetchallHistorySuccess } from "./historySlice";

export const fetchHistory=()=>async (dispatch)=>{
    dispatch(fetchallHistoryLoading());
    try{
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/history/getAllHistory`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "token":localStorage.getItem("token")
            },
        })
        result=await result.json();
        if(result.success)
        {
            dispatch(fetchallHistorySuccess(result.allHistory));
        }
    }catch(error)
    {
        console.log(error.message);
        dispatch(fetchallHistoryFail(error.message))
    }
}

export const createHistory=({data,allHistory})=>async (dispatch)=>{
    try{
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/history/create`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "token":localStorage.getItem("token")
            },
            body:JSON.stringify(data)
        })
        result=await result.json();
        if(result.success)
        {
            let newAllHistory=[...allHistory,result.history];
            dispatch(fetchallHistorySuccess(newAllHistory));
        }
    }catch(error)
    {
        console.log(error.message);
        dispatch(fetchallHistoryFail(error.message))
    }
}

export const deleteHistory=({history,allHistory})=>async (dispatch)=>{
    try{
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/history/deleteHistory/${history._id}`,{
            method:"delete",
            headers:{
                "Content-Type":"application/json",
                "token":localStorage.getItem("token")
            }
        })
        result=await result.json();
        if(result.success)
        {
            let newAllHistory=[...allHistory];
            for(let i=0;i<newAllHistory.length;i++)
            {
                if(newAllHistory[i]._id===history._id)
                {
                    newAllHistory.splice(i,1);
                    break;
                }
            }
            dispatch(fetchallHistorySuccess(newAllHistory));
        }
    }catch(error)
    {
        console.log(error.message);
        dispatch(fetchallHistoryFail(error.message))
    }
}

export const clearAll=()=>async (dispatch)=>{
    try{
        
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/history/clearAll`,{
            method:"delete",
            headers:{
                "Content-Type":"application/json",
                "token":localStorage.getItem("token")
            }
        })
        result=await result.json();
        if(result.success)
        {
            dispatch(fetchallHistorySuccess([]));
        }
    }catch(error)
    {
        console.log(error.message);
        dispatch(fetchallHistoryFail(error.message))
    }
}