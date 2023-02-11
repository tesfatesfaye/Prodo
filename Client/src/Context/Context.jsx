import React,{useState,useEffect,createContext} from "react";
import {useNavigate} from "react-router-dom";
import { uuid4 } from 'uuid4';
const Context=createContext()
    
    function ContextFunction({children}){
        const [formState,setFormState]=useState(()=>({firstName:'Tesfa',lastName:'Tesfaye',
        email:'',password:'', staySignedIn:false}))
        const [theme,setTheme]=useState(()=>'dark')
        const[taskModal,setTaskModal]=useState(true)
        const [sideBar,setSideBar]=useState(true)
        const [tasks,setTasks]=useState([{id:uuid4(), title:"Test 1", subtasks:[],comments:"This is the first",description:'none',duedate:"",Tags:[]},
        {id:uuid4(), title:"Test 2", subtasks:[],comments:'This is the second',description:'none',duedate:"",Tags:[]},
        {id:uuid4(), title:"Test 3", subtasks:[],comments:'This is the third',description:'none',duedate:"",Tags:[]},
        {id:uuid4(), title:"Test 4", subtasks:[],comments:'This is the fourth',description:'none',Duedate:"",Tags:[]}
        
    ])

        const toggleTasksList=(value)=>{
            setTasks(value)
        }


        const toggleTaskModal=(value)=>{

            setTaskModal(value)
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
        theme,sideBar,toggleSideBar,tasks,taskModal,toggleTaskModal,toggleTasksList}}>
            {children}
        </Context.Provider>
    )}

    export{Context,ContextFunction}


