import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeInputOne,changeInputTwo,delNum,multNum,minNum,plusNum} from "../../store/calcSlice";


function CalcPage() {
    const dispatch = useDispatch()

    const {inputValueOne,inputValueTwo,count} = useSelector(state => state.calcReducer)

    const changeInputFuncOne =(event)=>{
        dispatch(changeInputOne(event.target.value))
    }
    const changeInputFuncTwo =(event)=>{
        dispatch(changeInputTwo(event.target.value))
    }

    const delNumFunc = ()=>{
        dispatch(delNum(+inputValueTwo))
    }

    const minNumFunc = ()=>{
        dispatch(minNum(+inputValueTwo))
    }

    const plusNumFunc = ()=>{
        dispatch(plusNum(+inputValueTwo))
    }

    const mulNumFunc = ()=>{
        dispatch(multNum(+inputValueTwo))
    }




    return (
        <>
            <br/>
            <br/>
            <br/>

            <input
                value={inputValueOne}
                onChange={changeInputFuncOne}
                type ="number"
            />

            <input
                value={inputValueTwo}
                onChange={changeInputFuncTwo}
                type ="number"
            />

            <button onClick={delNumFunc}>/</button>
            <button onClick={mulNumFunc}>*</button>
            <button onClick={plusNumFunc}>+</button>
            <button onClick={minNumFunc}>-</button>
            <h1>{count}</h1>


        </>


    );
}

export default CalcPage;