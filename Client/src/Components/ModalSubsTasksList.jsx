import React, { useContext } from "react";
import { Context } from "../Context/Context";
import useSubtask from "../Hooks/useSubtask";
import {BsFillTrashFill}from 'react-icons/bs'
import{RiCheckboxBlankLine as CheckBoxIcon,
RiCheckboxLine as CheckBoxIconHover} from 'react-icons/ri'
import TextareaAutosize from 'react-textarea-autosize';
import { startAtEndTextArea } from "../utils/utilities";

const ModalSubsTasksList=({value,id,completed,showSubTask})=>{
const {deleteSubtask,tempHolder,completeSubtask}=useContext(Context)
const {hoveredSubtask,toggleHoveredSubtask,hoveredSubtaskComplete,
  toggleHoveredSubtaskComplete}=useSubtask()



return(
    <div className="subtask-list"style={{display: showSubTask ? "flex" : "none"}} 
    onMouseEnter={()=>toggleHoveredSubtask(id)}

    onMouseLeave={()=>toggleHoveredSubtask(false)} >
     <span style={{display:"flex",alignItems:'center'}}
      onMouseDown={(event)=>completeSubtask(event,tempHolder.id,id,!completed)} 
     onMouseEnter={()=>toggleHoveredSubtaskComplete(id)}
     onMouseLeave={()=>toggleHoveredSubtaskComplete(false)}>
       {hoveredSubtaskComplete===id || completed===true ?  <CheckBoxIconHover title="Complete subtask" color={completed===true && "green"} /> :
        <CheckBoxIcon  title="Complete subtask"/> }
        </span> 
        {<span style={{display:"flex",alignItems:'center',marginRight:"auto", textDecorationLine:completed ? "line-through" : "none"}}>{value}</span>}
       {hoveredSubtask===id && <BsFillTrashFill size='0.9em' color="grey"
       style={{cursor:'pointer'}} onMouseDown={(event)=>deleteSubtask(event,tempHolder.id,id)}/>}
    </div>
)

}

export default ModalSubsTasksList