import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice"
import bucketReducer from "./buckets/bucketSlice"
import activeBucketReducer from "./activeBucket/activeBucketSlice";

const store=configureStore({
    reducer:{
        user:userSlice,
        buckets:bucketReducer,
        activeBucket:activeBucketReducer
    }
})

export default store;