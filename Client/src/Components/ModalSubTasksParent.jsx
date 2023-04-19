import React,{useContext}from "react"
import {VscAdd} from 'react-icons/vsc'
import {AiOutlineArrowDown as DownArrow,AiOutlineArrowRight as RightArrow} from 'react-icons/ai'
import '../dashboard.css'
import TextareaAutosize from 'react-textarea-autosize';
import ModalButtons from "./ModalButtons";
import { Context } from "../Context/Context";
import ModalSubsTasksList from "./ModalSubsTasksList";

const ModalSubsTasks=({focusStyle,selectedValue,toggleSelected,
   toggleModalCompletedHover,modalCompleteHover,showSubTask,toggleShowSubTask})=>{

const {tempHolder,updateTemp,addSubtask}=useContext(Context)

let comp=(<span style={{fontWeight:"300"}}>{`${tempHolder.subtasks.filter(x=>x.completed===true).length}/${tempHolder.subtasks.length}`}</span>)
const subtasks=tempHolder.subtasks.map((item)=>{
   console.log("rerendering")
 
   return( 
      <ModalSubsTasksList
         key={item.id}
         id={item.id}
         value={item.value}
         completed={item.completed}
         toggleModalCompletedHover={toggleModalCompletedHover}
         modalCompleteHover={modalCompleteHover}
         showSubTask={showSubTask}

      />
   )


})

return(
    <div className="modal-subtasks-parent" style={(focusStyle('Subtask'))}>
       
    { tempHolder.subtasks.length > 0 ? 
     <div className="subtasks">
      <span className="subtask-title-parent">
         {showSubTask ? <DownArrow onMouseDown={toggleShowSubTask} color="white" size={'1em'} style={{paddingBottom:"3px",cursor:"pointer"}}/> 
         : <RightArrow onMouseDown={toggleShowSubTask}  color="white" size={'1em'} style={{paddingBottom:"3px",cursor:"pointer"}}/> }
      <span className="subtask-title"> 
         Sub-tasks {comp} </span>
   
         </span>
 
   {subtasks}
   </div>
      : ''
    }
       
<div className="modal-add" style={{display: showSubTask ? "flex" : "none"}}>
      <VscAdd style={{marginTop:"2px",visibility: selectedValue==="Subtask" && tempHolder.subtasks.length > 0 ? "hidden" :"visible" }}
      color="white" size={'1em'}/>

    <TextareaAutosize
 placeholder="Add sub-task" name="subtask"
 style={{fontWeight:'300',fontSize:'13px',
 background:"transparent",overflow:"hidden",
 paddingLeft:'4px',boxSizing:"border-box",
 alignItems:"center"}}
className="modal-mini-input" onFocus={()=>{toggleSelected('Subtask')}}
onChange={(event)=>updateTemp(event)}
value={tempHolder.subtask}
onBlur={()=>{(selectedValue!=="Title" && selectedValue!=="Description") ? toggleSelected(''): ''}}

 /> 

</div>
{selectedValue==="Subtask" && <ModalButtons textOne="Add subtask" addSubtask={addSubtask}/>}
</div>
)

}

export default ModalSubsTasks