import React, { useContext } from "react";
import { Context } from "../Context/Context";
import useSubtask from "../Hooks/useSubtask";
import {BsFillTrashFill}from 'react-icons/bs'
import useModal from "../Hooks/useModal";
import{RiCheckboxBlankLine as CheckBoxIcon,
RiCheckboxLine as CheckBoxIconHover} from 'react-icons/ri'
import TextareaAutosize from 'react-textarea-autosize';
import { startAtEndTextArea } from "../utils/utilities";

const ModalSubsTasksList=({value,id,completed,showSubTask,toggleSelected,selectedValue,clickModalTextArea})=>{
const {deleteSubtask,tempHolder,completeSubtask,updateTemp}=useContext(Context)
const {hoveredSubtask,toggleHoveredSubtask,hoveredSubtaskComplete,
  toggleHoveredSubtaskComplete,editSubtask,tempSubtask}=useSubtask()



return(
    <div className="subtask-list"style={{display: showSubTask ? "flex" : "none",gap:selectedValue===id ? "0px" :"5px"}} 
    onMouseEnter={()=>toggleHoveredSubtask(id)}
    onMouseDown={(event)=>clickModalTextArea(event,id)} 

    onMouseLeave={()=>toggleHoveredSubtask(false)} >
     <span style={{display:"flex",alignItems:'center'}}
      onMouseDown={(event)=>completeSubtask(event,tempHolder.id,id,!completed)} 
     onMouseEnter={()=>toggleHoveredSubtaskComplete(id)}
     onMouseLeave={()=>toggleHoveredSubtaskComplete(false)}>
       {hoveredSubtaskComplete===id || completed===true ?  <CheckBoxIconHover title="Readd subtask" color={completed===true && "green"} style={{display: selectedValue===id ? "none":""}}/> :
        <CheckBoxIcon  style={{display: selectedValue===id ? "none":""}} title="Complete subtask"/> }
        </span> 
        {selectedValue===id ? <TextareaAutosize name="subtask"   className="modal-mini-input" style={{
   background:"transparent",overflow:"hidden",
boxSizing:"border-box",
fontSize:"medium",
  alignItems:"center"}}

  onFocus={(event)=>{
    startAtEndTextArea(event)
  }}
  onChange={(event)=>updateTemp(event)}
  value={value} 
    autoFocus  
onBlur={()=>{toggleSelected('')}}/> : 
<span style={{display:"flex",alignItems:'center',marginRight:"auto", textDecorationLine:completed ? "line-through" : "none"}}>{value}</span>}
       {hoveredSubtask===id && <BsFillTrashFill size='0.9em' color="grey"
       style={{cursor:'pointer'}} onMouseDown={(event)=>deleteSubtask(event,tempHolder.id,id)}/>}
    </div>
)

}

export default ModalSubsTasksList