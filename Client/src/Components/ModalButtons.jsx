import React ,{useContext}from "react";
import { Context } from "../Context/Context";
import { tempHolderModel } from "../utils/utilities";
import '../dashboard.css'
const ModalButtons=(props)=>{
  const {toggleModal,toggleTempHolder,tempHolder}=useContext(Context)

    return(
        <div className="modal-buttons">
          <button className="save-cancel"style={{background:"rgb(42, 170, 138,0.9)"}} 
          onMouseDown={(event)=>{
              if(props.save){
                props.save()
              }
           else if(props.updateTask){
            props.updateTask(event,tempHolder.id)
            props.toggleSelected('')
           
           }
            else if(props.addSubtask){
              props.addSubtask(tempHolder.id)
            }
            
            }
          }
        >
            {props.textOne ? props.textOne : 'Save'}
            </button>
          <button className="save-cancel"style={{background:"rgba(128, 0, 32,0.9)"}}
            onMouseDown={()=>{
             props.toggleSelected('')
              if(props.openModal){
                props.openModal(tempHolder.id,"General")
              }
              else{
                toggleTempHolder({...tempHolderModel,comment:"",tag:"",subtask:""})
                toggleModal('')
              }
              
            
           
          }}
          >
            {props.textTwo ? props.textTwo : 'Cancel'}
            </button>
      </div>
    )
}

export default ModalButtons