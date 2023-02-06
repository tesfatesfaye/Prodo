import React ,{useContext}from "react";
import '../dashboard.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import {VscAdd} from 'react-icons/vsc'
import { DragDropContext,Droppable ,Draggable} from 'react-beautiful-dnd'
import { Context } from "../Context/Context";
import useDashboardHook from "../Hooks/useDashboardHook";
const Tasks=()=>{
    const{tasks,modifyTask}=useContext(Context)
    const{taskHoverId,toggleTaskHoverId}=useDashboardHook()
    return(
        <div className="tasks-wrapper">

    <span className="task-Title">General</span>
    <DragDropContext>
        <Droppable droppableId="tasks-div">
            {(provided)=>( <div className="tasks-div"  {...provided.droppableProps} ref={provided.innerRef}>
       
        {tasks.map((task,index)=>(
            <div className="tasks" id={task.id} onMouseEnter={()=>toggleTaskHoverId(task.id)}
            onMouseLeave={()=>toggleTaskHoverId('')}>
            <RxHamburgerMenu color="white" size="0.9em"style={{visibility: taskHoverId=== task.id ? 'visible' : 'hidden'}} 
            />
            <div className="task-toggler"><div className="task-completed">  

              </div>
                {task.title}  </div>
              
        
            </div>
        ))}
        
            
         
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