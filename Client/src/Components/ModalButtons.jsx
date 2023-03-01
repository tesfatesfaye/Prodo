import React ,{useContext}from "react";
import { Context } from "../Context/Context";
import { tempHolderModel } from "../utils/tempHolderModel";
import '../dashboard.css'
const ModalButtons=(props)=>{
  const {toggleModal,toggleTempHolder}=useContext(Context)

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
            onClick={()=>{
            toggleModal('')
            toggleTempHolder({...tempHolderModel,comment:"",tag:"",subtask:""})
              }}
          >
            {props.textTwo ? props.textTwo : 'Cancel'}
            </button>
      </div>
    )
}

export default ModalButtons