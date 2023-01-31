import React ,{useState} from "react";
import {useNavigate} from "react-router-dom";

function useAuth(){
   const[selected,setSelected]=useState('')
 
    const navigate=useNavigate()
    const changePage=(page)=>{
        navigate(page)
    }
    const toggleSelected=(value)=>{
       setSelected(value)
    }

   return{changePage,toggleSelected,selected}

}

export default useAuth