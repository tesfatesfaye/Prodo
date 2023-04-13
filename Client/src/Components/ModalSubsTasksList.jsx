import React from "react";
import useSubtask from "../Hooks/useSubtask";
import {BsFillTrashFill}from 'react-icons/bs'
import{RiCheckboxBlankLine as CheckBoxIcon,
RiCheckboxLine as CheckBoxIconHover} from 'react-icons/ri'

const ModalSubsTasksList=({value,id,completed})=>{
const {hoveredSubtask,toggleHoveredSubtask,hoveredSubtaskComplete,toggleHoveredSubtaskComplete}=useSubtask()



return(
    <div className="subtask-list" onMouseEnter={()=>toggleHoveredSubtask(id)}
    onMouseLeave={()=>toggleHoveredSubtask(false)} >
     <span style={{display:"flex",alignItems:'center'}} 
     onMouseEnter={()=>toggleHoveredSubtaskComplete(id)}
     onMouseLeave={()=>toggleHoveredSubtaskComplete(false)}>
       {hoveredSubtaskComplete===id ?  <CheckBoxIconHover/> : <CheckBoxIcon/> }
        </span> 
        <span style={{display:"flex",alignItems:'center',marginRight:"auto"}}>{value}</span>
       {hoveredSubtask===id && <BsFillTrashFill size='0.9em' color="grey"style={{cursor:'pointer',marginRight:"7px"}}/>}
    </div>
)

}

export default ModalSubsTasksList