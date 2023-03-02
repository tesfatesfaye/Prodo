import React ,{useContext}from "react";
import { Context } from "../Context/Context";
import ProfileHolder from "./ProfileHolder";
import '../dashboard.css'
import useModal from "../Hooks/useModal";
import ModalButtons from "./ModalButtons";
import {MdSort} from "react-icons/md"
import {VscAdd} from 'react-icons/vsc'
const ModalMain=()=>{
    const {selectedValue,toggleSelected,focusStyle,descriptionRef,changeHeightValue,hoverState,toggleHoverState}=useModal()
      const {tempHolder,updateTemp,modal,updateTask}=useContext(Context)
    return(
        <div className="modal-main">
        <div className="title-description-parent" style={focusStyle('Title',"Description")}>
     <div className="modal-title">
      {!selectedValue && <div className="modal-complete"> </div>}
      <input type='text' id="modal-title" className="modal-input-title"
       placeholder="Task title"  name="title"  
       value={tempHolder.title}
       onFocus={()=>toggleSelected('Title')}
        onBlur={()=>{
            if(hoverState){
            toggleSelected('')
            changeHeightValue(0)
            }
            }}
       onChange={(event)=>updateTemp(event)}/>

      </div> 
  <div className="modal-description" style={{display:'flex',gap:'10px'}}>
          <MdSort color="white"/>
          <textarea type='text' name="description"id="modal-title-description"className="modal-input-title" 
          style={{color:"white", fontSize:"medium"}}
          placeholder="Description" 
          ref= {descriptionRef}
          value={tempHolder.description}
          onChange={(event)=>{
            updateTemp(event)
            changeHeightValue()
            
        }}
          onFocus={()=>toggleSelected('Description')}
          onBlur={()=>{
            if(!hoverState){
            toggleSelected('')
            changeHeightValue(0)
            }
            }}/>
         
  </div>
  {(selectedValue==="Title" ||selectedValue==="Description") && 
  <ModalButtons updateTask={updateTask} textOne="Update Task"/>}
  </div>
       <div className="subtasks-parent" style={(focusStyle('subtask'))}>
       
          { tempHolder.subtasks.length ? 
           <div className="subtasks">
        <span style={{marginLeft:'3px', width:'100%',
         fontWeight:'300',paddingBottom:'3px',
         borderBottom: '1px solid rgba(255, 255, 255,0.3)'}}>Sub-tasks</span>
         </div>
            : ''
          }
             
      <div className="modal-add" >
            <VscAdd color="white" size={'1em'}/>
      <input placeholder="Add sub-task" 
      style={{fontWeight:'300',fontSize:'13px',background:"transparent"}}
      className="modal-mini-input" onFocus={()=>toggleSelected('subtask')}
      onBlur={()=>toggleSelected('')}
      /> 
      </div>
      {selectedValue==="subtask" && <ModalButtons/>}
      </div>
      <div className="modal-comments" >
        {selectedValue!=="Comment" && <ProfileHolder backgroundColor='rgba(0,0,0,0.1)' 
        marginLeft='20px'/>}

   <div className={`comments-div ${selectedValue==="Comment" ? "comments-div-focused" : ''}`} >
      <input className="modal-mini-input" placeholder="comments"
      name="comment" style={{opacity: tempHolder.comment ? "1" : "0.6"}}
      value={tempHolder.comment} onChange={(event)=>updateTemp(event)}
      onFocus={()=>toggleSelected('Comment')}
      onBlur={()=>toggleSelected('')}
      />
       {selectedValue==="Comment" && <ModalButtons/>}
   </div>
          
      </div>
      <ModalButtons updateTask={updateTask} textOne="Update Task"
       toggleSelected={toggleSelected} 
       toggleHoverState={toggleHoverState}
       hoverState={hoverState}/>
      </div>
    )
}
export default ModalMain