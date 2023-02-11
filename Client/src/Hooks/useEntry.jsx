import {useLayoutEffect, useState,useRef,useContext,useEffect} from "react";
import { Context } from "../Context/Context";

const useEntry=() =>{
   const[selected,setSelected]=useState('')
   const[hoverIcon, setHoverIcon]=useState(false)
    const[passwordShow,setPasswordShow]=useState(false)
   const passWordRef=useRef(null)
   const emailRef=useRef(null)
   const {formState}=useContext(Context)
   useLayoutEffect(()=>{
      if(hoverIcon){
      passWordRef.current.focus()
     }
   },[selected,passwordShow])
   useEffect(()=>{
      emailRef.current.style.color='white'

      
   },[formState])

   const toggleStyle=(e,value)=>{

      if(e.type==='blur' || e.type==='focus'){
        return  setSelected(value)
      }
      else if(e.type==='click'){
         return setPasswordShow(prev=>!prev)
      }
      else{
        return setHoverIcon(value)
      }
   }
  
   return{selected,passwordShow,passWordRef,hoverIcon,toggleStyle,emailRef}
   

}

export default useEntry