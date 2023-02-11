import React,{useContext,useState,useLayoutEffect} from "react";
import { Context } from "../Context/Context";

const useModal=()=>{
const[tempHolder,setTemHolder]=useState(()=>({title:"",description:"",subtasks:"",comments:[],
tags:[],setTemHolder:""}))
const [selectedValue,setSelectedValue]=useState('')
const toggleSelected=(value)=>{
    selectedValue(value)
}
const tempTasks=(value)=>{

}
useLayoutEffect(()=>{

},[tempHolder])
        return{tempHolder,selectedValue,toggleSelected}
}
 export default useModal