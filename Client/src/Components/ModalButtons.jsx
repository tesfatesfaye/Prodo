import React from "react";
import '../dashboard.css'
const ModalButtons=(props)=>{


    return(
        <div className="modal-buttons">
          <button className="save-cancel"style={{background:"rgba(40, 60, 80,0.9)"}}>Save</button>
          <button className="save-cancel"style={{background:"rgba(200, 60, 80,0.9)"}}>Cancel</button>
      </div>
    )
}

export default ModalButtons