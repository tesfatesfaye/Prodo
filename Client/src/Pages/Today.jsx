import React,{useContext} from "react";
import Tasks from "../Components/Tasks";
import { Context } from "../Context/Context";
import { dateInfo } from "../utils/utilities";
const Today=()=>{
const {Today}=useContext(Context)
const currentDay=dateInfo

    return(
        <Tasks 
        tasks={dueToday}
        pageTitle="Today"
        currentDay={currentDay}
        />
    )

}

export default Today
