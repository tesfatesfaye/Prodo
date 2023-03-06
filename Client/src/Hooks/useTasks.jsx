import { useState,useContext, useEffect, useLayoutEffect } from "react"
import { Context } from "../Context/Context"

const useTasks=()=>{
    const{pageTitle,tasks,completedTasks}=useContext(Context)
    const[FilteredTasks,setFilteredTasks]=useState(tasks)
    const[completeHover,setCompleteHover]=useState("")
            useLayoutEffect(()=>{
               
            if(pageTitle==="General"){
                setFilteredTasks(tasks)
            }

            else if(pageTitle==="Completed"){ 
                setFilteredTasks(completedTasks)
            }
            else if(pageTitle==="Today"){
                setFilteredTasks([])
            }
   
    },[tasks,pageTitle])

    const toggleCompletedHover=(id)=>{

        setCompleteHover(id)
    }
    
        return{FilteredTasks,toggleCompletedHover,completeHover}
}

export default useTasks