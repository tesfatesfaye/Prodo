import React,{useState} from "react";

const useSubtask = () => {
const [hoveredSubtask,setHoveredSubtask]=useState(false)
const [hoveredSubtaskComplete,setHoveredSubtaskComplete]=useState(false)
const toggleHoveredSubtask=(value)=>{
    setHoveredSubtask(value)
}

const toggleHoveredSubtaskComplete=(value)=>{
    setHoveredSubtaskComplete(value)
}
    return{hoveredSubtask,toggleHoveredSubtask,
        hoveredSubtaskComplete,toggleHoveredSubtaskComplete}
}
export default useSubtask