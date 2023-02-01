import React ,{useEffect, useState} from "react";
import { useRef } from "react";
import {useNavigate} from "react-router-dom";

function useAuth(){
   const[selected,setSelected]=useState('')
   const[firstName,setFirstName]=useState('')
   const[lastName,setLastName]=useState('')
   const[email, setEmail]=useState('')
   const[password,setPassword]=useState('')
   const[passwordShow,setPasswordShow]=useState(false)
   const passWordRef=useRef(null)
   useEffect(()=>{
      console.log(passwordShow)
      passWordRef.current.focus()
      console.log(passWordRef)
   },[passwordShow])
    const navigate=useNavigate()
    const changePage=(page)=>{
        navigate(page)
    }
  
    const togglePasswordShow=()=>{
      
      console.log(passWordRef)
      setPasswordShow(prev=>!prev)
     }
    const toggleFirstName=(value)=>{
      setFirstName(value)
    }
    
    const toggleLastName=(value)=>{
      setLastName(value)
    }

    const toggleEmail=(value)=>{
      setEmail(value)
    }
   const togglePassword=(value)=>{
      setPassword(value)
   }


    const toggleSelected=(value)=>{
       setSelected(value)
    }

   return{changePage,toggleSelected,
      selected,firstName,lastName,email,password,
      toggleFirstName,
      toggleLastName,togglePassword,toggleEmail,passwordShow,togglePasswordShow,passWordRef}

}

export default useAuth