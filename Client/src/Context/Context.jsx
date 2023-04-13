import React,{useState,useEffect,createContext} from "react";
import {useNavigate} from "react-router-dom";
import { uuid4 } from 'uuid4';
import { tempHolderModel } from "../utils/utilities";
import { dateCreated } from "../utils/dateHandler";
const Context=createContext()
    
    function ContextFunction({children}){
        const [formState,setFormState]=useState(()=>({firstName:'Tesfa',
        lastName:'Tesfaye', email:'',password:'', staySignedIn:false}))
        const[tempHolder,setTempHolder]=useState(tempHolderModel)
        const [theme,setTheme]=useState(()=>'dark')
        const[modal,setModal]=useState('')
        const [sideBar,setSideBar]=useState(true)
         const [tasks,setTasks]=useState([{id:uuid4(), title:"Test 1", subtasks:[],comments:["This is the first"],
        description:'none',dueDate:"",tags:[],dateCreated:dateCreated(),completed:false},
        {id:uuid4(), title:"Test 2", subtasks:[],
        comments:['This is the second'],description:'none',dueDate:"",tags:[],dateCreated:dateCreated(),completed:false},
        {id:uuid4(), title:"Test 3", 
        subtasks:[],comments:['This is the third'],description:'kanye was right',
        dueDate:"",tags:[],dateCreated:dateCreated(),completed:false},
        {id:uuid4(), title:"Test 4", 
        subtasks:[],comments:['This is the fourth'],description:'none',dueDate:"",tags:[],dateCreated:dateCreated(),completed:false}
              
    ])

        const [completedTasks, setCompletedTasks]=useState([{id:uuid4(), title:"Test 5", 
        subtasks:[],comments:['This is the third'],description:'kanye was right',dueDate:"",tags:[],dateCreated:"",completed:true},
        {id:uuid4(), title:"Test 6", 
        subtasks:[],comments:['This is the third'],description:'kanye was right',dueDate:"",tags:[],dateCreated:"",completed:true},
        {id:uuid4(), title:"Test 7", 
        subtasks:[],comments:['This is the fourth'],description:'none',dueDate:"",tags:[],dateCreated:"",completed:true},
        {id:uuid4(), title:"Test 8", 
        subtasks:[],comments:['This is the fourth'],description:'none',dueDate:"",tags:[],dateCreated:"",completed:true},{id:uuid4(), title:"Test 5", 
        subtasks:[],comments:['This is the third'],description:'kanye was right',dueDate:"",tags:[],dateCreated:"",completed:true}])
        const [overDue,setOverDueTasks]=useState([])
        const [dueToday,setDueToday]=useState([])
        useEffect(()=>{
               console.log(tempHolder.subtasks)
        },)
        const completeTask=(event,id,closeModal)=>{
            event.stopPropagation()
            const [filteredTask]=tasks.filter(task=>task.id===id)
            .map(task=>({...task,completed:true}))

            setTasks(prev=>prev.filter(task=>task.id!==id))
            setCompletedTasks(tasks=>[...tasks,filteredTask])
            closeModal && closeModal()
            }

            const addSubtask=(id)=>{
                let objectHolder=structuredClone(tempHolder)
                let objectHolder2=structuredClone(tempHolder)
                objectHolder.subtasks.push({id:uuid4(),value:objectHolder.subtask,
                    complete:false})
                objectHolder.subtask=""
                setTempHolder(objectHolder)
               
                for(let key in objectHolder){
                    if(key.toString()!=="comment" && key.toString()!=="tag"){
                        if(key.toString()!=="subtask"){
                            objectHolder2[key]=objectHolder[key]
                        }
                          }
                    }
                    setTasks(prev=>{
                    return prev.map(task=>{
                        return (task.id ===id ? objectHolder2 : task)
                    })
                  })



            
            }
     const updateTask= (event,id)=>{
           
            let objectHolder={}
            for(let key in tempHolder){
            if(key.toString()!=="comment" && key.toString()!=="tag"){
                if(key.toString()!=="subtask"){
                    objectHolder[key]=tempHolder[key]
                }
                  }
            }
                   setTasks(prev=>{
            return prev.map(task=>{
                return (task.id ===id ? objectHolder : task)
            })
          })
            // setModal('')
            // setTempHolder(tempHolderModel)
          
        }
        const openEditModal=(id,page)=>{
            if(page==='General'){
                const task=tasks.find(x=> x.id===id)
                toggleTempHolder({...task,comment:"",tag:"",subtask:""})
          }
           else if(page==='Completed'){
                const task=completedTasks.find(x=> x.id===id)
               toggleTempHolder({...task,comment:"",tag:"",subtask:""})
           }
           
             }
        const deleteTask=(event,id)=>{
           event.stopPropagation()
            setTasks(prev=>{
             return prev.filter(tasks=>{
               return( tasks.id !==id)
             })
            })
        }
        const toggleTempHolder=(value)=>{
            setTempHolder(value)
        }
        const toggleTasksList=(value)=>{
            setTasks(value)
        }
        const toggleCompletedTasksList=(value)=>{
            setCompletedTasks(value)
        }
        const updateTemp=(event)=>{
           
            const{name,value}=event.target
            setTempHolder(prev=>{
                return {...prev, [name]:value}
            })
        }
        const toggleModal=(value)=>{
            setModal(value)
        }
           
        const navigate=useNavigate()
              
        const updateForm=(event)=>{
            const{name,value,type,checked}=event.target
            setFormState(prev=>{
                return{
                    ...prev,
                    [name]: type ==="checkbox" ? checked : value
                }
            })
        }
    
        const changePage=(page)=>{
            navigate(page)
            
        }

     

              const toggleSideBar=(e,value)=>{
            value==='mainIcon' ? setSideBar(prev=>!prev) : ''
        }
       return(
        <Context.Provider value={{formState,updateForm,changePage,
        theme,sideBar,toggleSideBar,tasks,modal,toggleModal,toggleTasksList,
        toggleTempHolder,updateTemp,tempHolder,deleteTask,updateTask,
        completedTasks,completeTask,overDue,dueToday,openEditModal,toggleCompletedTasksList,addSubtask}}>
            {children}
        </Context.Provider>
    )}

    export{Context,ContextFunction}


