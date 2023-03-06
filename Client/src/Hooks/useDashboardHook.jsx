import { useState,useEffect,useContext,useRef } from "react";
import { Context } from "../Context/Context";

const useDashboardHook=(pageTitle)=>{
    const{toggleTasksList,tasks,toggleTempHolder,
        completedTasks}=useContext(Context)
    const[taskHoverId,setTaskHoverId]=useState("")
    const [draggable,setDraggable]=useState('')

    const toggleTaskHoverId=(value)=>{
        setTaskHoverId(value)
    }
    const toggleDraggable=(value)=>{
        setDraggable(value)
    }
    const openEditModal=(id,page)=>{
        if(page==='General'){
            const task=tasks.find(x=> x.id===id)
            toggleTempHolder({...task,comment:"",tag:"",subtask:""})
      }
       else if(page==='Completed'){
            const task=completedTasks.find(x=> x.id===id)
           toggleTempHolder({...task,comment:"",tag:"",subtask:""})
       }
       
       
    }
    const modifyTaskOrder=(value)=>{
        if(pageTitle==="General"){
            if(!value.destination) return'';
            const items=structuredClone(tasks)
            const [holder]=items.splice(value.source.index,1)
            items.splice(value.destination.index,0,holder)
            toggleTasksList(items)
        }
       else if(pageTitle==="Completed"){
        if(!value.destination) return'';
            const items=structuredClone(completedTasks)
            const [holder]=items.splice(value.source.index,1)
            items.splice(value.destination.index,0,holder)
            toggleTasksList(completedTasks)
       }
    }


    return{taskHoverId,toggleTaskHoverId,draggable,
        toggleDraggable,modifyTaskOrder,openEditModal}


    
}

export default useDashboardHook