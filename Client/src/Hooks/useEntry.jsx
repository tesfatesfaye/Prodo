import {useEffect, useState,useRef} from "react";


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
        return  setSelected(value)
      }
      else if(e.type==='click'){
         return setPasswordShow(prev=>!prev)
      }
      else{
        return setHoverIcon(value)
      }
   }
  
   return{selected,passwordShow,passWordRef,hoverIcon,toggleStyle}
   

}

export default useEntry