import React, {useContext} from "react";
import {Context} from '../Context/Context'
import ReactPortal from "../utils/ReactPortal";
import useModal from "../Hooks/useModal";
import {MdSort} from "react-icons/md";
import {FaTasks as General} from 'react-icons/fa'
import {AiTwotoneCalendar as Today} from 'react-icons/ai'
import ModalButtons from "../Components/ModalButtons";
import "../dashboard.css"
const AddTaskModal=()=>{
    const{modal,toggleModal}=useContext(Context)
    if(modal!=="AddTaskModal") return null
    const {selectedValue,tempHolder,updateTemp,
        toggleSelected,focusStyle}=useModal()
    

    return(
       <ReactPortal wrapperId="portal">
        <>
        <div className="over-lay-styles" ></div>
        <div className="add-task-modal">
        <div className="title-description-add-task" >
     <div className="modal-title">
     <input type='text' className="modal-input-title"
       id="add-task-modal-title" 
       placeholder="Task title"  name="modalTitle"  
       value={tempHolder.modalTitle}
       onFocus={()=>toggleSelected('Title')}
       onBlur={()=>toggleSelected('')}
       onChange={(event)=>updateTemp(event)}/>

      </div> 
  <div className="modal-description" style={{display:'flex',gap:'10px'}}>
          <input type='text' name="modalDescription"className="modal-input-title"
          id="add-task-modal-description" 
             placeholder="Description" 
          value={tempHolder.modalDescription}
          onChange={(event)=>updateTemp(event)}
          onFocus={()=>toggleSelected('Description')}
          onBlur={()=>toggleSelected('')}/>
         
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
        <ModalButtons/>
        </div>
  </div>
        
        </div>
           

        
        
        
        </>
          </ReactPortal>
    )

}
export default AddTaskModal