import React ,{useContext, useEffect}from "react";
import { Context } from "../Context/Context";
import '../dashboard.css'
const ProfileHolder=(props)=>{
    const {formState}=useContext(Context)

  
    return(
        <div className="profile-menu" style={props}>
        <span>{formState.firstName[0] ?? ''}
         {formState.lastName[0] ?? ''}</span> 
      </div>
    )
}

export default ProfileHolder