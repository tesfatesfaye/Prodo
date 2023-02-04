import {useEffect, useState,useRef} from "react";
import {useNavigate} from "react-router-dom";

function useAuth(){
   const[selected,setSelected]=useState('')
   const[hoverIcon, setHoverIcon]=useState(false)
    const[passwordShow,setPasswordShow]=useState(false)
   const passWordRef=useRef(null)
   useEffect(()=>{
      if(hoverIcon){
      passWordRef.current.focus()
     }
   },[selected,passwordShow])

   
    const navigate=useNavigate()
    const changePage=(page)=>{
        navigate(page)
    }
 
    const toggleHoverIcon=(value)=>{
         setHoverIcon(value)
    }
    const togglePasswordShow=()=>{
      
    setPasswordShow(prev=>!prev)
      
     }
     const toggleSelected=(value)=>{
       setSelected(value)
    }

   return{changePage,toggleSelected,selected,passwordShow,togglePasswordShow,passWordRef,hoverIcon,toggleHoverIcon}
   

}

export default useAuth