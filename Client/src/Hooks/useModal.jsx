import {useContext,useState,useLayoutEffect, useRef, useEffect} from "react";
import { Context } from "../Context/Context";
import { uuid4 } from 'uuid4';
import { tempHolderModel } from "../utils/tempHolderModel";

const useModal=()=>{

const titleRef=useRef(null)
const {toggleTasksList,tasks,toggleModal,toggleTempHolder,tempHolder,modal}=useContext(Context)
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
    toggleTasksList([...tasks,{...objectHolder,id:uuid4()}])
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
            toggleShift,focusStyle,addNewTask,titleRef}
}
 export default useModal
