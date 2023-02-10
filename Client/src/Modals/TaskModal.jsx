import React,{useContext, useEffect} from "react";
import '../dashboard.css'
import { Context } from "../Context/Context"
import ReactPortal from '../utils/ReactPortal'
import {FaTasks as General} from 'react-icons/fa'
import {VscChromeClose,VscAdd} from 'react-icons/vsc'
import ProfileHolder from "../Components/ProfileHolder";
import {MdSort} from "react-icons/md"

 const TaskModal=()=>{
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
               <div className="modal-title">
                <div className="modal-complete">
                            </div>
                <h4 style={{marginBottom:'0',marginTop:'0'}}>Test-1</h4>
                </div> 
            <div className="modal-description">
                    <MdSort color="white"/>
                    <span style={{color:"white", marginLeft:'3px',fontWeight:"300",marginBottom:'2px'}}>Description</span>
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
                     <span>Tag</span>
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
