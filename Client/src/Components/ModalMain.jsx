import React ,{useContext, useRef}from "react";
import { Context } from "../Context/Context";
import ProfileHolder from "./ProfileHolder";
import '../dashboard.css'
import useModal from "../Hooks/useModal";
import ModalButtons from "./ModalButtons";
import {MdSort} from "react-icons/md"
import {VscAdd} from 'react-icons/vsc'
import{RiCheckboxBlankLine as CheckBoxIcon,RiCheckboxLine as CheckBoxIconHover} from 'react-icons/ri';
import TextareaAutosize from 'react-textarea-autosize';
import { startAtEndTextArea } from "../utils/utilities";
const ModalMain=()=>{
      const titleRef=useRef(null)
    const {selectedValue,toggleSelected,focusStyle,
      toggleModalCompletedHover,modalCompleteHover,clickModalTextArea}=useModal({titleRef})
      const {tempHolder,updateTemp,updateTask,completeTask,toggleModal,openEditModal}=useContext(Context)
    return(
        <div className="modal-main" >
        <div className="title-description-parent" 
        style={focusStyle('Title',"Description")}>
     <div className="modal-title"  
     onMouseDown={(event)=>clickModalTextArea(event,"Title")}
      >
      
    
      {!selectedValue && 
      
      <div title="Complete Task" 
      style={{display:"flex",alignItems:"center"}}
      onMouseEnter={()=>toggleModalCompletedHover(true)}
      onMouseLeave={()=>toggleModalCompletedHover(false)} 
      onMouseDown={(event)=>clickModalTextArea(event,"Description")}>
       
       { modalCompleteHover ? <CheckBoxIconHover/>:<CheckBoxIcon/>} 
        </div>}
         {selectedValue==="Title" ? 
         
         <TextareaAutosize id="modal-title" 
         className='modal-input-title'
         name="title"
         onFocus={(event)=>{startAtEndTextArea(event)}}
         placeholder="Task title" 
         autoFocus
         ref={titleRef}
         onChange={(event)=>updateTemp(event)}
          value={tempHolder.title}
         onBlur={()=>{
      
          toggleSelected('')}}
         
        
      /> :<div className="modal-input-title modal-input-title-not-selected">{tempHolder.title}</div>
       }
      

      </div> 
  <div className="modal-description" 
  onMouseDown={(event)=>clickModalTextArea(event,"Description")}>
   <MdSort color="white"/>
          {selectedValue==="Description" ?

          <TextareaAutosize name="description"id="modal-title-description"
          className="modal-description-textarea" 
          placeholder="Description" 
          autoFocus
          onFocus={(event)=>startAtEndTextArea(event)}
          onBlur={()=>{
             toggleSelected('')}}
         
          
         value={tempHolder.description}
         onChange={(event)=>updateTemp(event)}/>
          : 
            <div className=" modal-description-not-selected">{tempHolder.description} </div>
            }
         
  </div>
  {(selectedValue==="Title" ||selectedValue==="Description") && 
  <ModalButtons updateTask={updateTask} openModal={openEditModal}
   textOne={selectedValue==="Title" ? "Update Title": "Update Description"} toggleSelected={toggleSelected}/> }
  </div>
       <div className="subtasks-parent" style={(focusStyle('Subtask'))}>
       
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
      {selectedValue==="Subtask" && <ModalButtons />}
      </div>
      <div className={`modal-comments`}>
        {selectedValue!=="Comment" && <ProfileHolder backgroundColor='rgba(0,0,0,0.1)' marginLeft='20px' marginBottom="20px"/>}

   <div className={`comments-div ${selectedValue==="Comment" ? "comments-div-focused" : ''}`}>
      <TextareaAutosize className="modal-mini-input" 
      placeholder="comments"
      name="comment"
      value={tempHolder.comment} 
      onChange={(event)=>updateTemp(event)}
      onFocus={()=>toggleSelected('Comment')}
      onBlur={()=>{(selectedValue!=="Title" && selectedValue!=="Description") ? toggleSelected(''): ''}}/>
      
       {selectedValue==="Comment" && <ModalButtons/>}
   </div>
          
      </div>
      
      </div>
    )
}
export default ModalMain