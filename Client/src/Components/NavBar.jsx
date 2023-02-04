import React,{useState} from "react";
import '../dashboard.css'
import { FaCheckDouble } from "react-icons/fa";
import {VscAdd} from 'react-icons/vsc'
import {ReactComponent as LightToggle} from '../assets/light-mode-toggle-icon.svg'
import {ReactComponent as DarkToggle} from '../assets/dark-mode-toggle-icon.svg'
const NavBar=()=>{
    const[on,setOn]=useState(true)
    const toggle=()=>{
        setOn(prev=>!prev)
    }
    return(
        <nav className="nav-parent"> 
         <FaCheckDouble color="lightblue" size='1.5em'style={{marginRight:'auto'}}/>
       { on ? <LightToggle height={30} width={30} fill="yellow" onClick={toggle}/> : 
       <DarkToggle height={15} width={30} fill="white" onClick={toggle}/>}
        
        <VscAdd color="lightblue"/>
         <div className="profile-menu">
           <span>SD</span> 
        </div>
        </nav>
    )
}

export default NavBar