import React ,{useContext}from "react";
import { Context } from "../Context/Context";
import '../dashboard.css'
const ModalButtons=(props)=>{
  const {toggleModal}=useContext(Context)

    return(
        <div className="modal-buttons">
          <button className="save-cancel"style={{background:"rgba(0, 106, 78,0.9)"}} 
          onClick={()=>{
            props.addNewTask ? props.addNewTask() : ''
          }}
        >
            {props.textOne? props.textOne : 'Save'}
            </button>
          <button className="save-cancel"style={{background:"rgba(128, 0, 32,0.9)"}}
            onClick={()=>
            
              toggleModal('')
              }
          >
            {props.textTwo ? props.textTwo : 'Cancel'}
            </button>
      </div>
    )
}

export default ModalButtons