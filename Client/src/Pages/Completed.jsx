import React,{useContext} from "react";
import Tasks from "../Components/Tasks";
import { Context } from "../Context/Context";
const Completed=()=>{
const {completedTasks}=useContext(Context)


    return(
        <Tasks 
        tasks={completedTasks}
        pageTitle="Completed"
        />
    )

}
export default Completed
