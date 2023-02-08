import React,{useContext, useEffect} from "react";
import '../dashboard.css'
import { Context } from "../Context/Context"
import ReactPortal from './ReactPortal'
import {FaTasks} from 'react-icons/fa'
import {VscChromeClose} from 'react-icons/vsc'
import {MdSort} from "react-icons/md"
 const TaskModal=()=>{
    const{taskModal,toggleTaskModal}=useContext(Context)
    if(taskModal===false) return null
   
    return(
        <ReactPortal wrapperId="portal">

    
        <> 
        <div className='over-lay-styles'>
     
        </div>

       <div className="modal-styles">

    
     
        <div className="modal-header">     
            <div style={{display:'flex',gap:'5px',alignItems:'center'}} > 
                    <FaTasks color="yellow" size={'0.9em'}/>
                    <span style={{fontWeight:'300',fontSize:'13px'}}>General</span>
                </div>
                <VscChromeClose style={{marginLeft:'auto',cursor:'pointer'}}size={'0.9em'} 
                color="white" onClick={()=>toggleTaskModal(false)}/>
        
        </div>
               <div className="modal-title">
                <div className="modal-complete">

                </div>
                <h4>Test-1</h4>
                </div> 
            <div className="modal-description">
                    <MdSort color="white"/>
            </div>
       </div>
       
        </>
        </ReactPortal>
    )


 }
 export default TaskModal
