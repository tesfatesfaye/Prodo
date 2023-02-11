import { useState,useEffect,useContext } from "react";
import { Context } from "../Context/Context";

const useDashboardHook=()=>{
    const{toggleTasksList,tasks}=useContext(Context)
    const[taskHoverId,setTaskHoverId]=useState("")
    const [draggable,setDraggable]=useState('')
    const toggleTaskHoverId=(value)=>{
        setTaskHoverId(value)
    }
    const toggleDraggable=(value)=>{
        setDraggable(value)
    }

    const modifyTaskOrder=(value)=>{
        if(!value.destination) return'';
        const items=Array.from(tasks)
        const [holder]=items.splice(value.source.index,1)
        items.splice(value.destination.index,0,holder)
        toggleTasksList(items)
    }


    return{taskHoverId,toggleTaskHoverId,draggable,toggleDraggable,modifyTaskOrder}


    
}

export default useDashboardHook