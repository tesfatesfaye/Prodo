import {useContext,useState,useLayoutEffect, useRef, useEffect} from "react";
import { Context } from "../Context/Context";
import { uuid4 } from 'uuid4';
import { tempHolderModel } from "../utils/tempHolderModel";
const useModal=()=>{
const titleRef=useRef(null)
let descriptionRef=useRef(null)
const {toggleTasksList,tasks,toggleModal,toggleTempHolder,tempHolder,modal}=useContext(Context)
const [selectedValue,setSelectedValue]=useState('')



useEffect(()=>{
    console.log(`${selectedValue} selected`)
})
useLayoutEffect(()=>{
 
    if(descriptionRef.current){
        console.log(descriptionRef.current.style.height)
       descriptionRef.current.style.height="19px"
        const scrollH=descriptionRef.current.scrollHeight;
        descriptionRef.current.style.height=scrollH+"px"     
        console.log(descriptionRef.current.style.height)
    }
    else{
        console.log("No joy")
    }
     return()=>{
          
        console.log('cleanedUp')
        descriptionRef=null
          
     }
},[tempHolder])


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
        }
        toggleTasksList([...tasks,{...objectHolder,id:uuid4()}])
        toggleModal('')
        toggleTempHolder(tempHolderModel)
    }
   
const toggleSelected=(value)=>{
    setSelectedValue(value)
}
const toggleShift=(value)=>{
    setSelectedValue(value)
}

        return{selectedValue,toggleSelected,
            toggleShift,focusStyle,addNewTask,descriptionRef}
}
 export default useModal
