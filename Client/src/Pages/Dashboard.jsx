import React from "react";
import '../dashboard.css'
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { Route,Routes } from "react-router";
import Split from 'react-split'
import AddTaskModal from "../Modals/AddTaskModal";
import Tasks from "../Components/Tasks";
import useDashboardHook from "../Hooks/useDashboardHook";
import General from "./General";
import Completed from "./Completed";
import Overdue from "./Overdue";
import Today from "./Today";
const DashBoard=()=>{
    const{sideBar,toggleDash,dashRef}=useDashboardHook()

    return(
        <div className="dashboard-parent" ref={dashRef}>
    
           <NavBar
          toggleDash={toggleDash}
           />
          
           
            <SideBar
            sideBar={sideBar}
            />
          <Routes>
          <Route path="/dashboard/general" element={<General/>}/>
          <Route path="completed" element={<Completed/>}/>
          {/* <Route path="/overdue" element={<Overdue/>}/> */}
          <Route path='today' element={<Today/>}/>
          </Routes>
         <Today/>

           
           <AddTaskModal/>
          
           
          
           

        </div>
    )

}

export default DashBoard