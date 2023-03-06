import React,{useContext} from "react";
import Tasks from "../Components/Tasks";
import { Context } from "../Context/Context";
const Overdue=()=>{
const {overDue}=useContext(Context)


    return(
        <Tasks 
        tasks={overDue}
        pageTitle="OverDue Tasks"
        />
    )

}

export default Overdue
