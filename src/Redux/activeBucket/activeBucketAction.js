import { fetchactiveBucketFail,fetchactiveBucketLoading,fetchactiveBucketSuccess,fetchCards } from "./activeBucketSlice";

export const setActiveBucket = ({activeBucket})=>async (dispatch)=>{
    try{
        dispatch(fetchactiveBucketLoading());
        dispatch(fetchactiveBucketSuccess(activeBucket));
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/getAllcard/${activeBucket._id}`,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        if(result.success)
        {
            dispatch(fetchCards(result.cards));
        }
    }catch(error){
        console.log(error.message);
        dispatch(fetchactiveBucketFail());
    }
}


export const deleteCard = ({card,cards})=>async (dispatch)=>{
    try{
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/deleteCard/${card._id}`,{
            method:"delete",
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        if(result.success)
        {
            const ncards=[...cards];
            for(let i=0;i<ncards.length;i++)
            {
                if(ncards[i]._id===card._id)
                {
                    ncards.splice(i,1);
                    break;
                }
            }
            dispatch(fetchCards(ncards));
        }
    }catch(error){
        console.log(error.message);
        dispatch(fetchactiveBucketFail());
    }
}


export const createCard = ({data,cards,setAdd})=>async (dispatch)=>{
    try{
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/createCard`,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        result = await result.json();
        if(result.success)
        {
            let ncards=[...cards,result.card];
            dispatch(fetchCards(ncards));
            setAdd(false);
        }
    }catch(error){
        console.log(error.message);
        dispatch(fetchactiveBucketFail());
    }
}

export const updataCard = ({data,cards,card,setEdit})=>async (dispatch)=>{
    try{
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/updateCard/${card._id}`,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        result = await result.json();
        
        if(result.success)
        {
            let ncards=[...cards];
            for(let i=0;i<ncards.length;i++)
            {
                if(ncards[i]._id===card._id)
                {
                    ncards[i]=result.card;
                    break;
                }
            }
            setEdit(false);
            dispatch(fetchCards(ncards));
        }
    }catch(error){
        console.log(error.message);
        dispatch(fetchactiveBucketFail());
    }
}

