import { useState,useEffect,useContext,useRef } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Context } from "../Context/Context";

const useDashboardHook=()=>{
    const{toggleTasksList,tasks,sideBar}=useContext(Context)
    const[taskHoverId,setTaskHoverId]=useState("")
    const [draggable,setDraggable]=useState('')
    const [dashRef,enableAnimations]=useAutoAnimate()
    const toggleTaskHoverId=(value)=>{
        setTaskHoverId(value)
    }
    const toggleDraggable=(value)=>{
        setDraggable(value)
    }

    const modifyTaskOrder=(value)=>{
        if(!value.destination) return'';
        const items=structuredClone(tasks)
        const [holder]=items.splice(value.source.index,1)
        items.splice(value.destination.index,0,holder)
        toggleTasksList(items)
    }


    return{taskHoverId,toggleTaskHoverId,draggable,
        toggleDraggable,modifyTaskOrder,dashRef,enableAnimations}


    
}

export default useDashboardHook