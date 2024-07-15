import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:"app",
    initialState:{
        isSlideBarOpen: false,
        isSideMenuClose:false
    },
    reducers:{
        toggleSideBar:(state,action)=>{
            state.isSlideBarOpen=!state.isSlideBarOpen
        },
        closeSlideBar:(state,action)=>{
            state.isSideMenuClose=action.payload
        }
    }
})
export const {toggleSideBar,closeSlideBar} = appSlice.actions;
export default appSlice.reducer