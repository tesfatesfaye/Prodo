import { useState,useEffect,useContext} from "react";
import { Context } from "../Context/Context";

const useDashboardHook=()=>{
    const{tasks,completedTasks,toggleCompletedTasksList,changePage}=useContext(Context)
    const[taskHoverId,setTaskHoverId]=useState("")
    const [draggable,setDraggable]=useState('')
     
   

    const toggleTaskHoverId=(value)=>{
        setTaskHoverId(value)
    }
    const toggleDraggable=(value)=>{
        setDraggable(value)
    }
 
    
    return{taskHoverId,toggleTaskHoverId,draggable,
        toggleDraggable}


    
}

export default useDashboardHook