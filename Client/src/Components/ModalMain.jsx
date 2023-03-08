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
      toggleModalCompletedHover,modalCompleteHover,titleRef,commentRef,addSubTaskRef,toggleHoverInput,hoverInput}=useModal()
      const {tempHolder,updateTemp,modal,updateTask,completeTask,toggleModal,openEditModal,changePage}=useContext(Context)
    return(
        <div className="modal-main" >
        <div className="title-description-parent" style={focusStyle('Title',"Description")}>
     <div className="modal-title"  onClick={()=>toggleSelected('Title')} onMouseEnter={()=>toggleHoverInput(true)} 
      onMouseLeave={()=>toggleHoverInput(false)}>
      {!selectedValue && 
      
      <div title="Complete Task" onMouseEnter={()=>toggleModalCompletedHover(true)}
      style={{display:"flex",alignItems:"center"}} onMouseLeave={()=>toggleModalCompletedHover(false)} 
      onClick={(event)=>{
         completeTask(event,tempHolder.id)
         toggleModal('')
        }}>
       { modalCompleteHover ? <CheckBoxIconHover/>:<CheckBoxIcon/>} 
        </div>}
         {selectedValue==="Title" ? <textarea  id="modal-title" className={`modal-input-title  ${selectedValue!=="Title" && 'modal-input-title-not-selected'}`}
       placeholder="Task title" 
       style={{paddingTop:"",boxSizing:"border-box"}}  
       value={tempHolder.title}
       onBlur={()=>{
        hoverInput===false ? toggleSelected('') : ""
     }}
       onChange={(event)=>updateTemp(event)}
       ref={titleRef}
       autoFocus={true}
       onClick={()=>toggleSelected('Title')}
       />    :
        <div className="modal-input-title modal-input-title-not-selected">{tempHolder.title} </div>
       }
      

      </div> 
  <div className="modal-description" style={{display:'flex',gap:'10px'}} onMouseEnter={()=>toggleHoverInput(true)}
   onClick={()=>{
      selectedValue!=="Description" && toggleSelected('Description')
      
  }}>
          <MdSort color="white"/>
          {selectedValue==="Description" ?
          <textarea type='text' name="description"id="modal-title-description"
          className="modal-input-title" 
          style={{color:"white", fontSize:"medium"}}
          placeholder="Description" 
          ref= {descriptionRef}
          autoFocus
          onBlur={()=>{
            hoverInput===false ? toggleSelected('') : ""
         }}
          value={tempHolder.description}
          onChange={(event)=>{
            updateTemp(event)
            
            
        }}
          onFocus={()=>toggleSelected('Description')}
          /> : 
            <div className="modal-input-title modal-input-title-not-selected" style={{WebkitLineClamp:3,fontSize:"small"}}
          >{tempHolder.description} </div>
            }
         
  </div>
  {(selectedValue==="Title" ||selectedValue==="Description") && 
  <ModalButtons updateTask={updateTask} openModal={openEditModal}
   textOne={selectedValue==="Title" ? "Update Title": "Update Description"} toggleSelected={toggleSelected}/> }
  </div>
       <div className="subtasks-parent" style={(focusStyle('subtask'))} onMouseEnter={()=>toggleHoverInput(true)} 
       onMouseLeave={()=>toggleHoverInput(false)}>
       
          { tempHolder.subtasks.length > 0 ? 
           <div className="subtasks">
        <span style={{marginLeft:'3px', width:'100%',
         fontWeight:'300',paddingBottom:'3px',
         borderBottom: '1px solid rgba(255, 255, 255,0.3)'}}>Sub-tasks</span>
         </div>
            : ''
          }
             
      <div className="modal-add"  onMouseEnter={()=>toggleHoverInput(true)} onMouseLeave={()=>toggleHoverInput(false)}>
            <VscAdd color="white" size={'1em'}/>
      <textarea placeholder="Add sub-task" 
      style={{fontWeight:'300',fontSize:'13px',background:"transparent",
      paddingTop:"2px", boxSizing:"border-box" }}
      className="modal-mini-input" onFocus={()=>toggleSelected('subtask')}
      ref={addSubTaskRef}
      onBlur={()=>{
        hoverInput===false ? toggleSelected('') : ""
     }}
      
      /> 
      </div>
      {selectedValue==="subtask" && <ModalButtons />}
      </div>
      <div className="modal-comments"  onMouseEnter={()=>toggleHoverInput(true)} onMouseLeave={()=>toggleHoverInput(false)}>
        {selectedValue!=="Comment" && <ProfileHolder backgroundColor='rgba(0,0,0,0.1)' 
        marginLeft='20px'/>}

   <div className={`comments-div ${selectedValue==="Comment" ? "comments-div-focused" : ''}`}
    onMouseEnter={()=>toggleHoverInput(true)}
   onMouseLeave={()=>toggleHoverInput(false)} >
      <textarea className="modal-mini-input" placeholder="comments"
      name="comment" style={{opacity: tempHolder.comment ? "1" : "0.6"}}
      value={tempHolder.comment} onChange={(event)=>updateTemp(event)}
      onFocus={()=>toggleSelected('Comment')}
      onBlur={()=>{
         hoverInput===false ? toggleSelected('') : ""
      }}
      ref={commentRef}/>
       {selectedValue==="Comment" && <ModalButtons/>}
   </div>
          
      </div>
      
      </div>
    )
}
export default ModalMain