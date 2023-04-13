import React,{useContext}from "react"
import {VscAdd} from 'react-icons/vsc'
import TextareaAutosize from 'react-textarea-autosize';
import ModalButtons from "./ModalButtons";
import { Context } from "../Context/Context";
import ModalSubsTasks from "./ModalSubsTasks";
const ModalSubsTasks=({focusStyle,selectedValue,toggleSelected})=>{

const {tempHolder,updateTemp,addSubtask}=useContext(Context)
const subtasks=tempHolder.subtasks.map((item)=>{
   return( 
      <ModalSubsTasks
         key={item.id}
         id={item.id}
         value={item.value}
         completed={item.completed}
      />
   )


})

return(
    <div className="modal-subtasks-parent" style={(focusStyle('Subtask'))}>
       
    { tempHolder.subtasks.length > 0 ? 
     <div className="subtasks">
  <span style={{marginLeft:'3px', width:'100%',
   fontWeight:'300',paddingBottom:'3px',
   borderBottom: '1px solid rgba(255, 255, 255,0.3)'}}>Sub-tasks</span>
   
   {subtasks}
   </div>
      : ''
    }
       
<div className="modal-add" >
      <VscAdd style={{marginTop:"2px"}}color="white" size={'1em'}/>

    <TextareaAutosize
 placeholder="Add sub-task" name="subtask"
 style={{fontWeight:'300',fontSize:'13px',
 background:"transparent",overflow:"hidden",
 paddingLeft:'4px',boxSizing:"border-box",
 alignItems:"center"}}
className="modal-mini-input" onFocus={()=>{toggleSelected('Subtask')}}
onChange={(event)=>updateTemp(event)}
onBlur={()=>{(selectedValue!=="Title" && selectedValue!=="Description") ? toggleSelected(''): ''}}

 /> 

</div>
{selectedValue==="Subtask" && <ModalButtons textOne="Add subtask" addSubtask={addSubtask}/>}
</div>
)

}

export default ModalSubsTasks