import React from "react";
import'../dashboard.css'
import {FaTasks as General} from 'react-icons/fa'
const ModalSideBar=()=>{

    return(
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
      
    )
}
export default ModalSideBar