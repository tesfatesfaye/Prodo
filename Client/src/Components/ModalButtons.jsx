import React ,{useContext}from "react";
import { Context } from "../Context/Context";
import { tempHolderModel } from "../utils/utilities";
import '../dashboard.css'
const ModalButtons=(props)=>{
  const {toggleModal,toggleTempHolder,tempHolder}=useContext(Context)

    return(
        <div className="modal-buttons">
          <button className="save-cancel"style={{background:"rgb(42, 170, 138,0.9)"}} 
          onMouseDown={(event)=>props.save ? props.save() : 
            (props.updateTask(event,tempHolder.id)&&props.toggleSelected('')&&props.openEditModal) }
        >
            {props.textOne? props.textOne : 'Save'}
            </button>
          <button className="save-cancel"style={{background:"rgba(128, 0, 32,0.9)"}}
            onMouseDown={()=>{
              {props.openEditModal && props.openEditModal}
            // toggleTempHolder({...tempHolderModel,comment:"",tag:"",subtask:""})
            props.toggleSelected ? props.toggleSelected(''):''
          }}
          >
            {props.textTwo ? props.textTwo : 'Cancel'}
            </button>
      </div>
    )
}

export default ModalButtons