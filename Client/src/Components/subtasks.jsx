import React,{useContext} from "react";
import { Context } from "../Context/Context";
const SubTasks=()=>{
const {tempHolder}=useContext(Context)
    



    return(
            <div className="subtasks-holder">
                <span>Subtasks</span>


            </div>


    )
}