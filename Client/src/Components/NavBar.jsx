import React,{useState,useContext} from "react";
import ProfileHolder from "./ProfileHolder";
import '../dashboard.css'
import { FaCheckDouble } from "react-icons/fa";
import {VscAdd} from 'react-icons/vsc'
import {ReactComponent as LightToggle} from '../assets/light-mode-toggle-icon.svg'
import {ReactComponent as DarkToggle} from '../assets/dark-mode-toggle-icon.svg'
import { Context } from "../Context/Context";
const NavBar=()=>{
  const {toggleSideBar,formState}=useContext(Context)
    const[on,setOn]=useState(true)
    const toggle=()=>{
        setOn(prev=>!prev)
    }
    return(
            <div className="nav-wrapper">
                 <nav className="nav-parent"> 
        
        <FaCheckDouble color="lightblue" size='1.5em'style={{marginRight:'auto'}} 
        onClick={(e)=>toggleSideBar(e,"mainIcon")}/>
      { on ? <LightToggle height={30} width={30} fill="yellow" onClick={toggle}/> : 
      <DarkToggle height={15} width={30} fill="white" onClick={toggle}/>}
       
       <VscAdd color="lightblue"/>
      <ProfileHolder/>
       </nav>
   
            </div>)
       
}

export default NavBar