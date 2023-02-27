import React from "react";
import '../dashboard.css'
const ModalButtons=(props)=>{


    return(
        <div className="modal-buttons">
          <button style={{background:"#1dac64"}}>Save</button>
          <button style={{background:"#dd0706"}}>Cancel</button>
      </div>
    )
}

export default ModalButtons