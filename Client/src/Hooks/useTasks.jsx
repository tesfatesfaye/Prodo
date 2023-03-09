import { useState,useContext, useEffect, useLayoutEffect } from "react"
import { Context } from "../Context/Context"

const useTasks=(pageTitle)=>{
    const{tasks,completedTasks,toggleTasksList,toggleCompletedTasksList}=useContext(Context)
     const[completeHover,setCompleteHover]=useState("")
    const modifyTaskOrder=(value)=>{
        console.log(`modify ${pageTitle}`)
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
            toggleCompletedTasksList(items)
       }
    }

   

    const toggleCompletedHover=(id)=>{

        setCompleteHover(id)
    }
    
        return{toggleCompletedHover,completeHover,modifyTaskOrder}
}

export default useTasks