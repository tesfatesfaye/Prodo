import {useContext,useEffect,useLayoutEffect,useState} from "react";
import { Context } from "../Context/Context";
import { uuid4 } from 'uuid4';
import { tempHolderModel } from "../utils/utilities";
const useModal=()=>{
const {toggleTasksList,tasks,toggleModal,toggleTempHolder,tempHolder}=useContext(Context)
const [selectedValue,setSelectedValue]=useState('')
const [modalCompleteHover,setModalCompleteHover]=useState(false)

useEffect(()=>{
    console.log("useModal useEffect")
    console.log("selectedValue",selectedValue)
},[selectedValue])
const focusStyle=(value,valueTwo="EmptyValue")=>{
    if(value===selectedValue || valueTwo===selectedValue){
        return ({border:'1px solid grey'})
    }
        return({border:''})
    }

const clickModalTextArea=(event, value)=>{
    if(selectedValue!==value){
        event.preventDefault()
        setSelectedValue(value)
    }

}
const toggleModalCompletedHover=(value)=>{
    setModalCompleteHover(value)
}
const addNewTask=()=>{
        let objectHolder={}
        for(let key in tempHolder){
        if(key.toString()!=="comment" && key.toString()!=="tag"){
            if(key.toString()!=="subtask")
      objectHolder[key]=tempHolder[key]
        }
        }
        toggleTasksList([...tasks,{...objectHolder,id:uuid4()}])
        toggleModal('')
        toggleTempHolder(tempHolderModel)
    }
   
const toggleSelected=(value)=>{
    setSelectedValue(value)
}

        return{selectedValue,toggleSelected,
            focusStyle,addNewTask,toggleModalCompletedHover,modalCompleteHover,
            clickModalTextArea}
}
 export default useModal
