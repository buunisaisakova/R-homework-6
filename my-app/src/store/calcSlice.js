import {createSlice} from "@reduxjs/toolkit";



const calcSlice = createSlice({
    name: "calcSlice",
    initialState:{
        inputValueOne:"",
        inputValueTwo:"",
        count:0
    },

    reducers:{
        changeInputOne:(state,action)=>{
            state.inputValueOne = action.payload
        },
        changeInputTwo:(state,action)=>{
            state.inputValueTwo = action.payload
        },
        delNum: (state,action)=>{
            state.count = state.inputValueOne / action.payload
        },
        multNum: (state,action)=>{
            state.count = state.inputValueOne * action.payload
        },
        plusNum: (state,action)=>{
            state.count = +state.inputValueOne + +action.payload
        },
        minNum: (state,action)=>{
            state.count = state.inputValueOne - action.payload
        },
    }
})

export const {changeInputOne,changeInputTwo,delNum,multNum,plusNum,minNum} = calcSlice.actions;

export default calcSlice.reducer