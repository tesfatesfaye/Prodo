import React,{useContext}from "react"
import {VscAdd} from 'react-icons/vsc'
import TextareaAutosize from 'react-textarea-autosize';
import ModalButtons from "./ModalButtons";
import useModal from "../Hooks/useModal";
import { Context } from "../Context/Context";

const ModalSubsTasks=()=>{
const{toggleSelected,selectedValue,focusStyle}=useModal()
const {tempHolder,updateTemp,updateTask,completeTask,toggleModal,openEditModal}=useContext(Context)

return(
    <div className="modal-subtasks-parent" style={(focusStyle('Subtask'))}>
       
    { tempHolder.subtasks.length > 0 ? 
     <div className="subtasks">
  <span style={{marginLeft:'3px', width:'100%',
   fontWeight:'300',paddingBottom:'3px',
   borderBottom: '1px solid rgba(255, 255, 255,0.3)'}}>Sub-tasks</span>
   </div>
      : ''
    }
       
<div className="modal-add" >
      <VscAdd style={{marginTop:"2px"}}color="white" size={'1em'}/>

    <TextareaAutosize
 placeholder="Add sub-task" style={{fontWeight:'300',fontSize:'13px',
 background:"transparent",overflow:"hidden",paddingLeft:'4px',boxSizing:"border-box",alignItems:"center"}}
className="modal-mini-input" onFocus={()=>{toggleSelected('Subtask')}}
onBlur={()=>{(selectedValue!=="Title" && selectedValue!=="Description") ? toggleSelected(''): ''}}

 /> 

</div>
{selectedValue==="Subtask" && <ModalButtons textOne="Add subtask"/>}
</div>
)

}

export default ModalSubsTasks