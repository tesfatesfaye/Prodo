import { useState,useContext, useEffect, useLayoutEffect } from "react"
import { Context } from "../Context/Context"
import uuid4 from "uuid4"

const useTasks=()=>{
    const{pageTitle,tasks}=useContext(Context)
    const[FilteredTasks,setFilteredTasks]=useState(tasks)
        useLayoutEffect(()=>{
                console.table(tasks)
            if(pageTitle==="General"){
                setFilteredTasks(tasks.filter(task=>task.completed===false))
            }

            else{ 
                setFilteredTasks(tasks.filter(task=>task.completed===true))
            }
   
    },[tasks,pageTitle])

  
        return{FilteredTasks}
}

export default useTasks