import { useState,useContext, useEffect, useLayoutEffect } from "react"
import { Context } from "../Context/Context"
import uuid4 from "uuid4"

const useTasks=()=>{
    const{pageTitle,tasks,completedTasks}=useContext(Context)
    const[FilteredTasks,setFilteredTasks]=useState(tasks)
    const[completeHover,setCompleteHover]=useState("")
    
        useLayoutEffect(()=>{
               
            if(pageTitle==="General"){
                setFilteredTasks(tasks)
            }

            else{ 
                setFilteredTasks(completedTasks)
            }
   
    },[tasks,pageTitle])

    const toggleCompletedHover=(id)=>{

        setCompleteHover(id)
    }
    
        return{FilteredTasks,toggleCompletedHover,completeHover}
}

export default useTasks