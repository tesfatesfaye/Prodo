import React,{useContext,useState,useLayoutEffect, useRef} from "react";
import { Context } from "../Context/Context";

const useModal=()=>{
const[tempHolder,setTemHolder]=useState(()=>({modalTitle:"",modalDescription:""
,subtask:'',subtasks:[],comment:'',comments:[],tag:'',tags:[]}))
const commentRef=useRef(null)
const [selectedValue,setSelectedValue]=useState('')
const focusStyle=(value)=>{
    if(value===selectedValue){
        return ({border:'1px solid grey'})
    }
    
    return({border:''})
    
}


const toggleSelected=(value)=>{
    setSelectedValue(value)
}
const toggleShift=(value)=>{
    setSelectedValue(value)
}
const updateTemp=(event)=>{
    const{name,value}=event.target
    setTemHolder(prev=>{
        return {...prev, [name]:value}
    })
}
useLayoutEffect(()=>{
    
},[tempHolder])
        return{tempHolder,selectedValue,toggleSelected,
            updateTemp,toggleShift,focusStyle}
}
 export default useModal