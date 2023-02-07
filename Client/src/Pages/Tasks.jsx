import React ,{useContext}from "react";
import '../dashboard.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsTrash} from 'react-icons/bs'
import {VscAdd} from 'react-icons/vsc'
import { DragDropContext,Droppable ,Draggable} from 'react-beautiful-dnd'
import { Context } from "../Context/Context";

import useDashboardHook from "../Hooks/useDashboardHook"

const Tasks=()=>{
    const{tasks,modifyTaskOrder}=useContext(Context)
    const{taskHoverId,toggleTaskHoverId,draggable,toggleDraggable}=useDashboardHook()
    return(
        <div className="tasks-wrapper">

    <span className="task-Title">General</span>
    <DragDropContext onDragEnd={modifyTaskOrder}>
        <Droppable droppableId="tasks-div">
            {(provided)=>( <div className="tasks-div"  {...provided.droppableProps} ref={provided.innerRef}>
       
        {tasks.map((task,index)=>(
            <Draggable key={task.id} draggableId={task.id} index={index} isDragDisabled={draggable ? false : true}>
               {(prov)=>( 
               <div className="tasks" id={task.id} onMouseEnter={()=>toggleTaskHoverId(task.id) }
            onMouseLeave={()=>toggleTaskHoverId('')} {...prov.draggableProps} {...prov.dragHandleProps} ref={prov.innerRef} >
            <RxHamburgerMenu color="white" size="0.9em"style={{visibility: taskHoverId=== task.id ? 'visible' : 'hidden'}}
            onMouseEnter={()=>toggleDraggable(true)} onMouseLeave={()=>toggleDraggable(false)}/>
            
            <div className="task-toggler"><div className="task-completed">  

              </div>
                <span>{task.title}</span>
                <BsTrash style={{visibility: taskHoverId=== task.id ? 'visible' : 'hidden',
                 marginLeft:'auto',opacity:'0.4'}}/>

                </div>
                
        
            </div>)}
            </Draggable>
        ))}
        
        {provided.placeholder}
            
       
        <span style={{display:'flex',alignItems:'center',gap:'12px'}}>
            <VscAdd color="ff0706" size='1em' className="add-task-button"/> <small className="add-task-button">Add task</small>

        </span>
        </div>
            )}
        </Droppable>
        </DragDropContext>
        </div>
    )
}

export default Tasks 