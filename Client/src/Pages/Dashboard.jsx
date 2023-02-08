import React from "react";
import '../dashboard.css'
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { Route,Routes } from "react-router";
import Split from 'react-split'

import Tasks from "./Tasks";
import useDashboardHook from "../Hooks/useDashboardHook";
const DashBoard=()=>{
    const{sideBar,toggleDash}=useDashboardHook()

    return(
        <div className="dashboard-parent">
          
           <NavBar
          toggleDash={toggleDash}
           />
          
           
            <SideBar
            sideBar={sideBar}
            />
          
            <Tasks/>
           
          
           
          
           

        </div>
    )

}

export default DashBoard