import React,{useContext} from "react";
import Tasks from "../Components/Tasks";
import { Context } from "../Context/Context";
import { dateInfoTitle } from "../utils/utilities";
const Today=()=>{
const {dueToday}=useContext(Context)
const currentDay=dateInfoTitle

    return(
        <Tasks 
        tasks={dueToday}
        pageTitle="Today"
        currentDay={currentDay}
        />
    )

}

export default Today
