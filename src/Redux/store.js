import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice"
import bucketReducer from "./buckets/bucketSlice"
import activeBucketReducer from "./activeBucket/activeBucketSlice";
import historyReducer from "./history/historySlice"

const store=configureStore({
    reducer:{
        user:userSlice,
        buckets:bucketReducer,
        activeBucket:activeBucketReducer,
        allHistory:historyReducer
    }
})

export default store;