import { useState,useEffect } from "react";


const useDashboardHook=()=>{
    const[taskHoverId,setTaskHoverId]=useState("")
    const toggleTaskHoverId=(value)=>{
        setTaskHoverId(value)
    }

    return{taskHoverId,toggleTaskHoverId}


    
}

export default useDashboardHook