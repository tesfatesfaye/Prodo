import React ,{useContext}from "react";
import '../dashboard.css'
import {FaTasks} from 'react-icons/fa'
import {BsCheck2All,BsAlarm,BsFilterLeft,BsFillTrash2Fill} from'react-icons/bs'
import {AiTwotoneCalendar} from 'react-icons/ai'
import { Context } from "../Context/Context";
    const SideBar=()=>{
        const {sideBar}=useContext(Context)
        return(
         
            
           <nav className="side-bar"   style={{display:sideBar ? 'flex' : 'none' }}>
                <div className="general-tasks"  > 
                    <FaTasks color="yellow"/>
                    <span>General</span>
                </div>
            <div className="completed-tasks">
                <BsCheck2All color="green" />
                <span>Completed</span>
            </div>
            <div className="tags-labels">
                <BsFilterLeft/>
                <span>Tags</span>
            </div>
             <div className="today">
                <AiTwotoneCalendar color="orange"/>
                <span>Today</span>
                </div>  

            <div className="over-due">
                <BsAlarm color="lightblue"/>
               <span>Overdue</span>
                </div> 

            <div className="recycling-bin" >
                <BsFillTrash2Fill color="brown"/>
                <span> Deleted</span>
            </div>
            </nav>
            
        )
    }

    export default SideBar