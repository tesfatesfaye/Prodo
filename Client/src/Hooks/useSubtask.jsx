import React,{useState} from "react";

const useSubtask = () => {
const [hoveredSubtask,setHoveredSubtask]=useState(false)
const [hoveredSubtaskComplete,setHoveredSubtaskComplete]=useState(false)
const [tempSubtask,setTempSubtask]=useState('')
const toggleHoveredSubtask=(value)=>{
    setHoveredSubtask(value)
}
const editSubtask=(value)=>{
    setTempSubtask(value)
}
const toggleHoveredSubtaskComplete=(value)=>{
    setHoveredSubtaskComplete(value)
}
    return{hoveredSubtask,toggleHoveredSubtask,
        hoveredSubtaskComplete,toggleHoveredSubtaskComplete,editSubtask,tempSubtask}
}
export default useSubtask