import React,{useContext, useEffect} from "react";
import '../dashboard.css'
import { Context } from "../Context/Context"
import ReactPortal from '../utils/ReactPortal'
import {FaTasks as General} from 'react-icons/fa'
import {VscChromeClose,VscAdd} from 'react-icons/vsc'
import ProfileHolder from "../Components/ProfileHolder";
import {MdSort} from "react-icons/md"
import useModal from "../Hooks/useModal";

 const TaskModal=()=>{
   const {selectedValue}=useModal()
      
    const{taskModal,toggleTaskModal,formState}=useContext(Context)
    if(taskModal===false) return null
       return(
        <ReactPortal wrapperId="portal">
       <> 
        <div className='over-lay-styles' onClick={()=>toggleTaskModal(false)}></div>
       <div className="modal-styles">
                   <div className="modal-header">     
            <div style={{display:'flex',gap:'5px',alignItems:'center'}} > 
                    <General color="yellow" size={'0.9em'}/>
                    <span style={{fontWeight:'300',fontSize:'13px'}}>General</span>
                </div>
                <VscChromeClose style={{marginLeft:'auto',cursor:'pointer'}}size={'0.9em'} 
                color="white" onClick={()=>toggleTaskModal(false)}/>
                </div>
                <div className="modalParent">
                <div className="modal-main">
                  <div className="title-description">
               <div className="modal-title">
                {!selectedValue && <div className="modal-complete"> </div>}
                <input type='text' id="modal-title"className="modal-input-title"
                 placeholder="Title" maxLength={150}/>

                </div> 
            <div className="modal-description" style={{display:'flex',gap:'10px'}}>
                    <MdSort color="white"/>
                    <textarea type='text' id="modal-title"className="modal-input-title" 
                    style={{color:"white", fontSize:"medium",marginBottom:'2px',overflow:'visible'}}
                    placeholder="Description"/>
                   
            </div>
            </div>
                <div className="modal-add">
                <VscAdd color="white" size={'1em'}style={{}}/>
                <span style={{fontWeight:'300',fontSize:'13px'}}>Add sub-task</span>
                </div>
                <div className="modal-comments" style={{}}>
                  <ProfileHolder backgroundColor='rgba(0,0,0,0.1)' marginLeft='20px'/>

             <div className="comments-div" >
                <span style={{paddingTop:'0px',opacity:'0.6'}}>comments</span>
             </div>
                </div>
                </div>
                <div className="modal-sidebar">
                  <div className="modal-type">
                     <span>Type</span>
                     <div className="modal-holder">
                     <General color="yellow"/> 
                     <span style={{paddingBottom:'5px'}}>General</span>
                     </div>
                     <span></span>
                  </div>
                  <div className="modal-type">
                     <span>Due-date</span>
                     <div className="modal-holder">
                     
                     </div>
                     <span></span>
                  </div>
                  <div className="modal-type">
                     <span>Tags</span>
                     <div className="modal-holder">
                     
                     </div>
                     <span></span>
                  </div>
                  <div className="modal-type">
                     <span>Date-created</span>
                     <div className="modal-holder">
                     
                     </div>
                     <span></span>
                  </div>
                  <div className="modal-type">
                     <span>Location</span>
                     <div className="modal-holder">
                     
                     </div>
                     <span></span>
                  </div>
                </div>
                
                </div>       
            </div>
          
               </>
        </ReactPortal>
    )
 }
 export default TaskModal
