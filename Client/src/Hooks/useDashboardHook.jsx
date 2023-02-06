import { useState,useEffect } from "react";


const useDashboardHook=()=>{

    const [sideBar,setSideBar]=useState(true)

    const toggleDash=(e,value)=>{
        value==='mainIcon' ? setSideBar(prev=>!prev) : ''
        console.log(e)
        console.log(value)

    }

    return{sideBar,toggleDash}


    
}

export default useDashboardHook