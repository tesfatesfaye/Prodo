import { useState,useEffect,useContext,useRef } from "react";
import { Context } from "../Context/Context";

const useDashboardHook=()=>{
    const{toggleTasksList,tasks,toggleTempHolder,toggleClickedTask}=useContext(Context)
    const[taskHoverId,setTaskHoverId]=useState("")
    const [draggable,setDraggable]=useState('')

    const toggleTaskHoverId=(value)=>{
        setTaskHoverId(value)
    }
    const toggleDraggable=(value)=>{
        setDraggable(value)
    }
    const openEditModal=(id)=>{
        const task=tasks.find(x=> x.id===id)
       toggleTempHolder({...task,comment:"",tag:"",subtask:""})
       toggleClickedTask(id)
       
    }
    const modifyTaskOrder=(value)=>{
        if(!value.destination) return'';
        const items=structuredClone(tasks)
        const [holder]=items.splice(value.source.index,1)
        items.splice(value.destination.index,0,holder)
        toggleTasksList(items)
    }


    return{taskHoverId,toggleTaskHoverId,draggable,
        toggleDraggable,modifyTaskOrder,openEditModal}


    
}

export default useDashboardHook