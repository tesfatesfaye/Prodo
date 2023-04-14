import React, { useContext } from "react";
import { Context } from "../Context/Context";
import useSubtask from "../Hooks/useSubtask";
import {BsFillTrashFill}from 'react-icons/bs'
import{RiCheckboxBlankLine as CheckBoxIcon,
RiCheckboxLine as CheckBoxIconHover} from 'react-icons/ri'

const ModalSubsTasksList=({value,id,completed})=>{
const {deleteSubtask,tempHolder,completeSubtask}=useContext(Context)
const {hoveredSubtask,toggleHoveredSubtask,hoveredSubtaskComplete,
  toggleHoveredSubtaskComplete}=useSubtask()



return(
    <div className="subtask-list" 
    onMouseEnter={()=>toggleHoveredSubtask(id)}
    onMouseDown={(event)=>completeSubtask(event,tempHolder.id,id,!completed)}
    onMouseLeave={()=>toggleHoveredSubtask(false)} >
     <span style={{display:"flex",alignItems:'center'}} 
     onMouseEnter={()=>toggleHoveredSubtaskComplete(id)}
     onMouseLeave={()=>toggleHoveredSubtaskComplete(false)}>
       {hoveredSubtaskComplete===id || completed===true ?  <CheckBoxIconHover/> : <CheckBoxIcon/> }
        </span> 
        <span style={{display:"flex",alignItems:'center',marginRight:"auto"}}>{value}</span>
       {hoveredSubtask===id && <BsFillTrashFill size='0.9em' color="grey"
       style={{cursor:'pointer'}} onMouseDown={(event)=>deleteSubtask(event,tempHolder.id,id)}/>}
    </div>
)

}

export default ModalSubsTasksList