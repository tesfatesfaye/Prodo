import React,{useContext} from "react";
import Tasks from "../Components/Tasks";
import { Context } from "../Context/Context";
const General=()=>{
const {tasks}=useContext(Context)


    return(
    
      
        <Tasks 
        tasks={tasks}
        pageTitle="General"
        />
    
        
    )

}

export default General
