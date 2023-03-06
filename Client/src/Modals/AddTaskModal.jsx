import React, {useContext} from "react";
import {Context} from '../Context/Context';
import ReactPortal from "../Context/ReactPortal";
import AddTaskComponent from "../Components/AddTaskComponent";
import "../dashboard.css"
const AddTaskModal=()=>{
    const{modal}=useContext(Context)
      
    if(modal!=="AddTaskModal") return null
    
       return(
       <ReactPortal wrapperId="add-portal">
        
       <AddTaskComponent/>
 
          </ReactPortal>
    )

}
export default AddTaskModal