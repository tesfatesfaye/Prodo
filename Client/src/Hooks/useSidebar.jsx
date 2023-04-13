import { useRef,useLayoutEffect, useContext,useEffect } from "react";

import { Context } from "../Context/Context";
const useSideBar=()=>{
    const {sideBar}=useContext(Context)
    const sideBarRef=useRef(null)

    useEffect(()=>{
      
                 sideBar ? sideBarRef.current.style.display='flex' 
                 :sideBarRef.current.style.display='none'
    
    },[sideBar])

    return {sideBarRef}

}
export default useSideBar