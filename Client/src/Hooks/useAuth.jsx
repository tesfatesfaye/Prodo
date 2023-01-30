import React ,{useState} from "react";
import {useNavigate} from "react-router-dom";

function useAuth(){
    const[emailIsClicked,setEmailIsClicked]=useState("Email")
    const[passwordIsClicked,setPasswordIsClicked]=useState("Password")
    const[firstNameIsClicked,setFirstNameIsClicked]=useState("First Name")
    const[lastNameIsClicked,setLastNameIsClicked]=useState("Last Name")
    const navigate=useNavigate()
    const changePage=(page)=>{
        navigate(page)
    }
    const toggleEmail=()=>{
        setEmailIsClicked(prev=>prev==="Email" ? "" : "Email")
    }
    
   const togglePassword=()=>{
    setPasswordIsClicked(prev=>prev==="Password" ? "" : "Password")
   }

   const toggleFirstName=()=>{
    setFirstNameIsClicked(prev=>prev==="First Name" ? "" : "First Name")
   }
   const toggleLastName=()=>{
    setLastNameIsClicked(prev=> prev==="Last Name" ? "" : "Last Name")
   }

   return{emailIsClicked,passwordIsClicked,toggleEmail,togglePassword,firstNameIsClicked,lastNameIsClicked,toggleFirstName,toggleLastName,changePage}

}

export default useAuth