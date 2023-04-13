import React from "react";
import{RiCheckboxBlankLine as CheckBoxIcon,
RiCheckboxLine as CheckBoxIconHover} from 'react-icons/ri'

const ModalSubsTasksList=({value})=>{




return(
    <div className="subtask-list" >
     <CheckBoxIcon/>  <span style={{display:"flex",alignItems:'center'}}>{value}</span>
    </div>
)

}

export default ModalSubsTasksList