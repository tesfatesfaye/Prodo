import React ,{useContext}from "react";
import '../dashboard.css'
import {FaTasks as General} from 'react-icons/fa'
import useSideBar from "../Hooks/useSidebar";
import {BsCheck2All as Completed,BsAlarm as Overdue,
BsFilterLeft as Tags,BsFillTrash2Fill as Deleted} from'react-icons/bs'
import {AiTwotoneCalendar as Today} from 'react-icons/ai'
import { Context } from "../Context/Context";
    const SideBar=()=>{
        const {togglePageTitle,tasks,completedTasks}=useContext(Context)
        const {sideBarRef}=useSideBar()     
        return(
                <nav ref={sideBarRef} id="sideBar"className='side-bar '>
                <div className="general-tasks"  onClick={()=>togglePageTitle('General')} > 
                    <General color="yellow"/>
                    <span>General</span>
                    <span className="side-bar-tasks-length"style={{}}>{tasks.length}</span>
                </div>
            <div className="completed-tasks" onClick={()=>togglePageTitle('Completed')}>
                <Completed color="green" />
                <span>Completed</span>
                <span className="side-bar-tasks-length"style={{}}>{completedTasks.length}</span>
            </div>
            <div className="tags-labels">
                <Tags/>
                <span>Tags</span>
            </div>
             <div className="today" onClick={()=>togglePageTitle('Today')}>
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