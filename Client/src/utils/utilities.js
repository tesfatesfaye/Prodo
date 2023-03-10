 const startAtEndTextArea=(event)=>{
      const element=event.target
        element.setSelectionRange(element.value.length,element.value.length)
        }
    
const tempHolderModel={id:"",title:"",
description:"",subtask:'',
subtasks:[],comment:''
,comments:[],tag:'',tags:[],
dueDate:"",dateCreated:'',
completed:false}
const subtaskModel={parentId:"",id:"",title:"",completed:false}
  
export {tempHolderModel,startAtEndTextArea}