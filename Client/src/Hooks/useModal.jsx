import React,{useContext,useState,useLayoutEffect, useRef, useEffect} from "react";
import { Context } from "../Context/Context";
import { uuid4 } from 'uuid4';
import { tempHolderModel } from "../utils/tempHolderModel";

const useModal=()=>{

const commentRef=useRef(null)
const {toggleTasksList,tasks,toggleModal,toggleTempHolder,tempHolder}=useContext(Context)
const [selectedValue,setSelectedValue]=useState('')
const focusStyle=(value,valueTwo="EmptyValue")=>{
    if(value===selectedValue || valueTwo===selectedValue){
        return ({border:'1px solid grey'})
    }
    
    return({border:''})
    
}

const addNewTask=()=>{
        let objectHolder={}
        for(let key in tempHolder){
        if(key.toString()!=="comment" && key.toString()!=="tag"){
            if(key.toString()!=="subtask")
      objectHolder[key]=tempHolder[key]
        }
    toggleTasksList([...tasks,{id:uuid4(),...objectHolder}])
        toggleModal('')
        toggleTempHolder(tempHolderModel)
    }
}

const toggleSelected=(value)=>{
    setSelectedValue(value)
}
const toggleShift=(value)=>{
    setSelectedValue(value)
}

        return{tempHolder,selectedValue,toggleSelected,
            toggleShift,focusStyle,addNewTask}
}
 export default useModal
