import React from "react";
import '../dashboard.css'
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { Route,Routes } from "react-router";
import Split from 'react-split'
import AddTaskModal from "../Modals/AddTaskModal";
import Tasks from "../Components/GeneralTasks";
import useDashboardHook from "../Hooks/useDashboardHook";
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
          
            <Tasks/>
           <AddTaskModal/>
          
           
          
           

        </div>
    )

}

export default DashBoard