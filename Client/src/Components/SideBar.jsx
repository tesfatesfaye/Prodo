import React ,{useContext}from "react";
import '../dashboard.css'
import {FaTasks as General} from 'react-icons/fa'

import {BsCheck2All as Completed,BsAlarm as Overdue,
BsFilterLeft as Tags,BsFillTrash2Fill as Deleted} from'react-icons/bs'
import {AiTwotoneCalendar as Today} from 'react-icons/ai'
import { Context } from "../Context/Context";
    const SideBar=()=>{
        const {sideBar}=useContext(Context)
        
        return(
         
            
           <nav className="side-bar"   style={{display:sideBar ? 'flex' : 'none' }}>
                <div className="general-tasks"  > 
                    
                    <General color="yellow"/>
                    <span>General</span>
                </div>
            <div className="completed-tasks">
                <Completed color="green" />
                <span>Completed</span>
            </div>
            <div className="tags-labels">
                <Tags/>
                <span>Tags</span>
            </div>
             <div className="today">
                <Today color="orange"/>
                <span>Today</span>
                </div>  

            <div className="over-due">
                <Overdue color="lightblue"/>
               <span>Overdue</span>
                </div> 

            <div className="recycling-bin" >
                <Deleted color="brown"/>
                <span> Deleted</span>
            </div>
            </nav>
            
        )
    }

    export default SideBar