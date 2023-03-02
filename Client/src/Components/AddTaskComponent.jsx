import React, {useContext} from "react";
import {Context} from '../Context/Context';
import useModal from "../Hooks/useModal";
import {MdSort} from "react-icons/md";
import {FaTasks as General} from 'react-icons/fa'
import {AiTwotoneCalendar as Today} from 'react-icons/ai'
import ModalButtons from "../Components/ModalButtons";
import "../dashboard.css";
 const AddTaskComponent=()=>{
    const{tempHolder,modal,toggleModal,updateTemp}=useContext(Context)
    const {titleRef,toggleSelected,addNewTask,
        descriptionRef,changeHeightValue}=useModal()
    return(
        <>
        <div className="over-lay-styles"></div>
        <div className="add-task-modal">
        <div className="title-description-add-task" >
     <div className="modal-title">
     <input type="text"  className="modal-input-title"
       id="add-task-modal-title" autoFocus={true}
       style={{opacity: tempHolder.title ? "1" : ''}}
       placeholder="Task title"  name="title"  
       value={tempHolder.title}
       onFocus={()=>toggleSelected('Title')}
       onBlur={()=>toggleSelected('')}
       onChange={(event)=>updateTemp(event)}/>

      </div> 
  <div className="modal-description" style={{display:'flex',gap:'10px'}}>
          <textarea ref={descriptionRef}type='text' name="description"className="modal-input-title"
          id="add-task-modal-description" rows={1}
          style={{opacity: tempHolder.description ? "1" : ''}}
             placeholder="Description" 
          value={tempHolder.description}
          onChange={(event)=>{
            updateTemp(event)
            changeHeightValue()
            
        }}
          onFocus={()=>toggleSelected('Description')}
          onBlur={()=>{
            toggleSelected('')
            changeHeightValue(0)
            }}/>
         
  </div>
  <div className="tag-holder">
    <div className="due-date-add-modal">
        <Today color="orange"/> 
        <span>Due-Date</span>
        <span style={{color:"rgba(255,255,255,0.5)",fontWeight:"300"}}>x</span>
    </div>

 </div>
  <span></span>
        <div className="add-holder-button-area">
        <span className="add-general">
        <General color="yellow" size={"0.75rem"} style={{margin:"0"}}/>
        <h6 style={{color:"rgba(255,255,255,0.7)",margin:"0"}}>General</h6>
        </span>
        <ModalButtons  save={addNewTask}/>
        </div>
  </div>
        
        </div>
        </>
    )

 }
 export default AddTaskComponent