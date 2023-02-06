import React from "react";
import '../dashboard.css'
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { IconContext } from "react-icons/lib";
import { Route,Routes } from "react-router";
import Split from 'react-split'

import Tasks from "./Tasks";
import useDashboardHook from "../Hooks/useDashboardHook";
const DashBoard=()=>{
    const{sideBar,toggleDash}=useDashboardHook()

    return(
        <div className="dashboard-parent">
           <IconContext.Provider value={{size:'1.2em',margin:'0'}}>
           <NavBar
          toggleDash={toggleDash}
           />
          
           
            <SideBar
            sideBar={sideBar}
            />
          
            <Tasks/>
           
          
           
           </IconContext.Provider>
           

        </div>
    )

}

export default DashBoard