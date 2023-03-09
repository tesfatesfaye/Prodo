import React from "react";
import '../dashboard.css'
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { Outlet, Route,Routes } from "react-router";
import AddTaskModal from "../Modals/AddTaskModal";
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
            <Outlet/>

           
           <AddTaskModal/>
          
           
          
           

        </div>
    )

}

export default DashBoard