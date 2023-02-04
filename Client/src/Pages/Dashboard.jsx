import React from "react";
import '../dashboard.css'
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { IconContext } from "react-icons/lib";
import { Route,Routes } from "react-router";
import Split from 'react-split'
import Tasks from "./Tasks";
const DashBoard=()=>{


    return(
        <div className="dashboard-parent">
           <IconContext.Provider value={{size:'1.2em',margin:'0'}}>
           <NavBar/>
          
           
            <SideBar/>
            <Tasks/>
           
          
           
           </IconContext.Provider>
           

        </div>
    )

}

export default DashBoard