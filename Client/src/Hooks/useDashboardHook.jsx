import { useState,useEffect } from "react";


const useDashboardHook=()=>{
    const[taskHoverId,setTaskHoverId]=useState("")
    const [draggable,setDraggable]=useState('')
    const toggleTaskHoverId=(value)=>{
        setTaskHoverId(value)
    }
    const toggleDraggable=(value)=>{
        setDraggable(value)
    }

    return{taskHoverId,toggleTaskHoverId,draggable,toggleDraggable}


    
}

export default useDashboardHook