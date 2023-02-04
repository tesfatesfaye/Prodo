import React,{useState} from "react";
import '../dashboard.css'
import { FaCheckDouble } from "react-icons/fa";
import {VscAdd} from 'react-icons/vsc'
import {BiToggleRight} from 'react-icons/bi'
import {BiToggleLeft} from 'react-icons/bi'

const NavBar=()=>{
    const[on,setOn]=useState(false)
    const toggle=()=>{
        setOn(prev=>!prev)
    }
    return(
        <nav className="nav-parent"> 
         <FaCheckDouble color="lightblue" size='1.5em'style={{marginRight:'auto'}}/>
       { on ? <BiToggleLeft onClick={toggle}/> :<BiToggleRight  onClick={toggle}/>}
        <VscAdd color="lightblue"/>
         <div className="profile-menu">
            SD
        </div>
        </nav>
    )
}

export default NavBar