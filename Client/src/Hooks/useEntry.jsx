import {useEffect, useState,useRef} from "react";
import {useNavigate} from "react-router-dom";

const useEntry=() =>{
   const[selected,setSelected]=useState('')
   const[hoverIcon, setHoverIcon]=useState(false)
    const[passwordShow,setPasswordShow]=useState(false)
   const passWordRef=useRef(null)
   useEffect(()=>{
      if(hoverIcon){
      passWordRef.current.focus()
     }
   },[selected,passwordShow])

   const toggleStyle=(e,value)=>{

      if(e.type==='blur' || e.type==='focus'){
         setSelected(value)
      }
      else if(e.type==='click'){
         setPasswordShow(prev=>!prev)
      }
      else{
         setHoverIcon(value)
      }
   }
  
   return{selected,passwordShow,passWordRef,hoverIcon,toggleStyle}
   

}

export default useEntry