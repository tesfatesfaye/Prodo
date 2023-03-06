import React,{useContext} from "react";
import Tasks from "../Components/Tasks";
import { Context } from "../Context/Context";
const Overdue=()=>{
const {Overdue}=useContext(Context)


    return(
        <Tasks 
        tasks={Overdue}
        pageTitle="OverDue Tasks"
        />
    )

}

export default Overdue
