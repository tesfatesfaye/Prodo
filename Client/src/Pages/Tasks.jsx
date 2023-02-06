import React from "react";
import '../dashboard.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import {VscAdd} from 'react-icons/vsc'
import { DragDropContext,Droppable ,Draggable} from 'react-beautiful-dnd'
const Tasks=()=>{
    

    return(
        <div className="tasks-wrapper">

    <span className="task-Title">General</span>
    <DragDropContext>
        <div className="tasks-div">
        
        <div className="tasks">
            <RxHamburgerMenu color="white" id="1"size="0.9em"style={{position:'absolute',left:'-22px'}}/>
            <div className="task-completed">  

            </div>
            
            Ghost
            </div>
            
            <div className="tasks">
            <RxHamburgerMenu color="white" id="2"size="0.9em"style={{position:'absolute',left:'-22px'}}/>
            <div className="task-completed">  

            </div>
            
            Ghost
            </div>
        <span style={{display:'flex',alignItems:'center',gap:'12px'}}>
            <VscAdd color="ff0706" size='1em' className="add-task-button"/> <small className="add-task-button">Add task</small>

        </span>
        </div>
        </DragDropContext>
        </div>
    )
}

export default Tasks 