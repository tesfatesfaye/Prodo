import React from "react";
import ProfileHolder from "./ProfileHolder";
import '../dashboard.css'
import useModal from "../Hooks/useModal";
import {MdSort} from "react-icons/md"
import {VscAdd} from 'react-icons/vsc'
const ModalMain=()=>{
    const {selectedValue,tempHolder,updateTemp,toggleSelected}=useModal()
    
    return(
        <div className="modal-main">
        <div className="title-description">
     <div className="modal-title">
      {selectedValue!="Title" && <div className="modal-complete"> </div>}
      <input type='text' id="modal-title" className="modal-input-title"
       placeholder="Title" maxLength={150} name="modalTitle"  
       value={tempHolder.modalTitle}
       onFocus={()=>toggleSelected('Title')}
       onBlur={()=>toggleSelected('')}
       onChange={(event)=>updateTemp(event)}/>

      </div> 
  <div className="modal-description" style={{display:'flex',gap:'10px'}}>
          <MdSort color="white"/>
          <textarea type='text' name="modalDescription"id="modal-title"className="modal-input-title" 
          style={{color:"white", fontSize:"medium",marginBottom:'2px',overflow:'visible'}}
          placeholder="Description" 
          value={tempHolder.modalDescription}
          onChange={(event)=>updateTemp(event)}/>
         
  </div>
  </div>
      <div className="modal-add">
      <VscAdd color="white" size={'1em'}style={{}}/>
      <input placeholder="Add sub-task" 
      style={{fontWeight:'300',fontSize:'13px',background:"transparent"}}
      className="modal-mini-input"
      /> 
      </div>
      <div className="modal-comments" style={{}}>
        <ProfileHolder backgroundColor='rgba(0,0,0,0.1)' marginLeft='20px'/>

   <div className="comments-div" >
      <input className="modal-mini-input" placeholder="comments"
      name="comment" style={{opacity: tempHolder.comment ? "1" : "0.6"}}
      value={tempHolder.comment} onChange={(event)=>updateTemp(event)}
      />
     
   </div>
      </div>
      </div>
    )
}
export default ModalMain