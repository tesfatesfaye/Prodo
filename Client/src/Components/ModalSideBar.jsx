import React, { useContext } from "react";
import'../dashboard.css'
import {FaTasks as General} from 'react-icons/fa'
import { Context } from "../Context/Context";
const ModalSideBar=()=>{
   const {tempHolder}=useContext(Context)
    return(
        <div className="modal-sidebar">
        <div className="modal-type">
           <span>Type</span>
           <div className="modal-holder">
           <General color="yellow"/> 
           <span>General</span>
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
           <span style={{display:"flex",alignItems:"center"}}>{tempHolder.dateCreated}</span>
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