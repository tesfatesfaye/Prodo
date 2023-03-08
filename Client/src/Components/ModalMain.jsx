import React ,{useContext}from "react";
import { Context } from "../Context/Context";
import ProfileHolder from "./ProfileHolder";
import '../dashboard.css'
import useModal from "../Hooks/useModal";
import ModalButtons from "./ModalButtons";
import {MdSort} from "react-icons/md"
import {VscAdd} from 'react-icons/vsc'
import{RiCheckboxBlankLine as CheckBoxIcon,RiCheckboxLine as CheckBoxIconHover} from 'react-icons/ri';
const ModalMain=()=>{
    const {selectedValue,toggleSelected,focusStyle,descriptionRef,
      toggleModalCompletedHover,modalCompleteHover,titleRef,commentRef,addSubTaskRef}=useModal()
      const {tempHolder,updateTemp,modal,updateTask,completeTask,toggleModal,openEditModal,changePage}=useContext(Context)
    return(
        <div className="modal-main">
        <div className="title-description-parent" style={focusStyle('Title',"Description")}>
     <div className="modal-title">
      {!selectedValue && 
      
      <div title="Complete Task" onMouseEnter={()=>toggleModalCompletedHover(true)}
      style={{display:"flex",alignItems:"center"}} onMouseLeave={()=>toggleModalCompletedHover(false)} 
      onClick={(event)=>{
         completeTask(event,tempHolder.id)
         toggleModal('')
        }}>
       { modalCompleteHover ? <CheckBoxIconHover/>:<CheckBoxIcon/>} 
        </div>}
      <textarea  id="modal-title" className="modal-input-title"
       placeholder="Task title"  name="title"
       style={{paddingTop:"",boxSizing:"border-box"}}  
       value={tempHolder.title}
       onFocus={()=>toggleSelected('Title')}
       onBlur={()=>toggleSelected('')}
       onChange={(event)=>updateTemp(event)}
       ref={titleRef}
       />
      

      </div> 
  <div className="modal-description" style={{display:'flex',gap:'10px'}}>
          <MdSort color="white"/>
          <textarea type='text' name="description"id="modal-title-description"
          className="modal-input-title" 
          style={{color:"white", fontSize:"medium"}}
          placeholder="Description" 
          ref= {descriptionRef}
          value={tempHolder.description}
          onChange={(event)=>{
            updateTemp(event)
            
            
        }}
          onFocus={()=>toggleSelected('Description')}
          onBlur={()=>{
            toggleSelected('')
           
            }}/>
         
  </div>
  {(selectedValue==="Title" ||selectedValue==="Description") && 
  <ModalButtons updateTask={updateTask} openModal={openEditModal}
   textOne="Update Task" toggleSelected={toggleSelected}/> }
  </div>
       <div className="subtasks-parent" style={(focusStyle('subtask'))}>
       
          { tempHolder.subtasks.length > 0 ? 
           <div className="subtasks">
        <span style={{marginLeft:'3px', width:'100%',
         fontWeight:'300',paddingBottom:'3px',
         borderBottom: '1px solid rgba(255, 255, 255,0.3)'}}>Sub-tasks</span>
         </div>
            : ''
          }
             
      <div className="modal-add" >
            <VscAdd color="white" size={'1em'}/>
      <textarea placeholder="Add sub-task" 
      style={{fontWeight:'300',fontSize:'13px',background:"transparent",
      paddingTop:"", boxSizing:"border-box" }}
      className="modal-mini-input" onFocus={()=>toggleSelected('subtask')}
      onBlur={()=>toggleSelected('')}
      ref={addSubTaskRef}
      
      /> 
      </div>
      {selectedValue==="subtask" && <ModalButtons/>}
      </div>
      <div className="modal-comments" >
        {selectedValue!=="Comment" && <ProfileHolder backgroundColor='rgba(0,0,0,0.1)' 
        marginLeft='20px'/>}

   <div className={`comments-div ${selectedValue==="Comment" ? "comments-div-focused" : ''}`} >
      <textarea className="modal-mini-input" placeholder="comments"
      name="comment" style={{opacity: tempHolder.comment ? "1" : "0.6"}}
      value={tempHolder.comment} onChange={(event)=>updateTemp(event)}
      onFocus={()=>toggleSelected('Comment')}
      onBlur={()=>toggleSelected('')}
      ref={commentRef}/>
       {selectedValue==="Comment" && <ModalButtons/>}
   </div>
          
      </div>
      
      </div>
    )
}
export default ModalMain