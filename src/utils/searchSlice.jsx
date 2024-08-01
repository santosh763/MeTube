import { createSlice } from "@reduxjs/toolkit";

const initialState ={
cacheResults:{},
searchKeyWord:""
}

const searchSlice= createSlice({
    name:"search",
    initialState,
    reducers:{
        setCacheResults:(state,action)=>{
            state.cacheResults=Object.assign(state,action.payload)
        },
        setSearchKeyWord:(state,action)=>{
            state.searchKeyWord=action.payload
        },
        clearSearchKeyword:(state,action)=>{
            state.searchKeyWord=''
        }

    }
})

export const {setCacheResults,setSearchKeyWord}= searchSlice.actions
export default searchSlice.reducer;