import React,{useContext, useEffect} from "react";
import '../dashboard.css'
import { Context } from "../Context/Context"
import ReactPortal from '../Context/ReactPortal'
import {FaTasks as General} from 'react-icons/fa'
import {VscChromeClose} from 'react-icons/vsc'
import ModalSideBar from "../Components/ModalSideBar";
import ModalMain from "../Components/ModalMain";
import { tempHolderModel } from "../utils/utilities";
 const TaskModal=()=>{
      
    const{modal,toggleModal,toggleTempHolder}=useContext(Context)
    if(modal!=="TaskModal") return null
       return(
        <ReactPortal wrapperId="portal">
       <> 
        <div className='over-lay-styles'></div>
       <div className="modal-styles">
                   <div className="modal-header">     
            <div style={{display:'flex',gap:'5px',alignItems:'center'}} > 
                    <General color="yellow" size={'0.9em'}/>
                    <span style={{fontWeight:'300',fontSize:'13px'}}>General</span>
                </div>
                <VscChromeClose style={{marginLeft:'auto',cursor:'pointer'}}size={'0.9em'} 
                color="white" onClick={()=>{
                toggleModal('')
                toggleTempHolder({...tempHolderModel,comment:"",tag:"",subtask:""})
                }}/>
                </div>
                <div className="modalParent">
                 <ModalMain/>
                <ModalSideBar/>
                
                </div>       
            </div>
          
               </>
        </ReactPortal>
    )
 }
 export default TaskModal
