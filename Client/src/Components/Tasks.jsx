import React ,{useContext, useState}from "react";
import useTasks from "../Hooks/useTasks";
import '../dashboard.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import{RiCheckboxBlankLine as CheckBoxIcon,RiCheckboxLine as CheckBoxIconHover} from 'react-icons/ri'
import TaskModal from "../Modals/TaskModal";
import {BsTrash} from 'react-icons/bs'
import {VscAdd} from 'react-icons/vsc'
import { DragDropContext,Droppable ,Draggable} from 'react-beautiful-dnd'
import { Context } from "../Context/Context";
import {FaCommentAlt} from 'react-icons/fa'
import {MdTitle} from 'react-icons/md'
import useDashboardHook from "../Hooks/useDashboardHook"

const Tasks=({tasks,pageTitle,currentDay})=>{
  console.log(currentDay)
    const {toggleCompletedHover,completeHover}=useTasks() 
    const{toggleModal,deleteTask,
        completeTask}=useContext(Context)
    const{taskHoverId,toggleTaskHoverId,draggable,toggleDraggable,modifyTaskOrder
        ,openEditModal}=useDashboardHook(pageTitle)
      
     return(
        <div className="tasks-wrapper">
        <div className="task-Title">
            <span>{pageTitle} </span>
        { currentDay && <span className="currentDay">{currentDay}</span>}
        </div>
    <DragDropContext onDragEnd={modifyTaskOrder}>
        <Droppable droppableId="tasks-div">
            {(provided)=>( <ul className="tasks-div"  {...provided.droppableProps} ref={provided.innerRef}>
            
        {tasks.map((task,index)=>(
            <Draggable key={task.id} draggableId={task.id} index={index} isDragDisabled={draggable ? false : true}>
               {(prov)=>( 
               <li className={`tasks ${(pageTitle.toLowerCase())}`}
                id={task.id} onMouseEnter={()=>toggleTaskHoverId(task.id) } 
               onClick={()=>{
                openEditModal(task.id,pageTitle)
                toggleModal('TaskModal')
                
               }}
            onMouseLeave={()=>toggleTaskHoverId('')} {...prov.draggableProps} {...prov.dragHandleProps} ref={prov.innerRef} >
            <RxHamburgerMenu color="white" size="0.9em"style={{visibility: taskHoverId=== task.id ? 'visible' : 'hidden'}}
            onMouseEnter={()=>toggleDraggable(true)} onMouseLeave={()=>toggleDraggable(false)}/>
            
            <div className="task-toggler" > <div className="task-completer" 
            onMouseEnter={()=>toggleCompletedHover(task.id)} 
              onMouseLeave={()=>toggleCompletedHover('')} onClick={(event)=>{
                completeTask(event,task.id)
            }}>  <CheckBoxIconHover style={{display: completeHover===task.id ||pageTitle==='Completed'? "" : "none", 
            color:pageTitle==='Completed' ? "green" :''}}/> 
                <CheckBoxIcon style={{display: completeHover===task.id  ||pageTitle==='Completed'? "none" : ""}}/> 
                </div>
                <span>{task.title}</span>
                <MdTitle 
                   style={{visibility: taskHoverId=== task.id && !draggable ? 'visible' : 'hidden',
                   opacity:'0.4', marginLeft:'auto'}}
                   /> 
                <BsTrash style={{visibility: taskHoverId=== task.id && !draggable ? 'visible' : 'hidden',
                opacity:'0.4'}} onClick={(event)=>deleteTask(event,task.id)}/>
                 <FaCommentAlt 
                  style={{visibility: taskHoverId=== task.id && !draggable ? 'visible' : 'hidden',
                  opacity:'0.4', marginRight:'5px'}}
                 />
                  
                

                </div>
                
                
            </li>)}
            </Draggable>
        ))}
        
        {provided.placeholder}
       
       {pageTitle==="General" && 
        <span style={{display:'flex',alignItems:'center',gap:'12px',marginLeft:"22px"}} 
        onClick={()=>toggleModal('AddTaskModal')}>
            <VscAdd color="ff0706" size='1em' className="add-task-button"/> 
            <small className="add-task-button">Add task</small>

        </span>}
        </ul>
            )}
        </Droppable>
        </DragDropContext>
               
        <TaskModal/>
        </div>
    )
}

export default Tasks 