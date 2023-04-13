import React,{useState,useContext} from "react";
import ProfileHolder from "./ProfileHolder";
import '../dashboard.css'
import { FaCheckDouble } from "react-icons/fa";
import {VscAdd} from 'react-icons/vsc'
import {ReactComponent as LightToggle} from '../assets/light-mode-toggle-icon.svg'
import {ReactComponent as DarkToggle} from '../assets/dark-mode-toggle-icon.svg'
import { Context } from "../Context/Context";
const NavBar=()=>{
  const {toggleSideBar,toggleModal}=useContext(Context)
    const[on,setOn]=useState(true)
    const toggle=()=>{
        setOn(prev=>!prev)
    }
    return(
            <div className="nav-wrapper">
                 <nav className="nav-parent"> 
        
        <span title="Hide sidebar"style={{marginRight:'auto'}}>
          <FaCheckDouble color="lightblue" size='1.5em'
        onClick={(e)=>toggleSideBar(e,"mainIcon")}/></span>
      { on ? <LightToggle height={30} width={30} fill="yellow" onClick={toggle}/> : 
      <DarkToggle height={15} width={30} fill="white" onClick={toggle}/>}
       
       <VscAdd onClick={()=>toggleModal('AddTaskModal')}  color="lightblue"/>
      <ProfileHolder/>
       </nav>
   
            </div>)
       
}

export default NavBar