import React,{useState,useEffect,createContext} from "react";
import {useNavigate} from "react-router-dom";
import { uuid4 } from 'uuid4';
const Context=createContext()
    
    function ContextFunction({children}){
        const [formState,setFormState]=useState(()=>({firstName:'Tesfa',lastName:'Tesfaye',
        email:'',password:'', staySignedIn:false}))
        const [theme,setTheme]=useState(()=>'dark')
        const [sideBar,setSideBar]=useState(true)
        const [tasks,setTasks]=useState([{id:uuid4(), title:"Test 1", subtasks:[]},
        {id:uuid4(), title:"Test 2", subtasks:[],comments:'This is the second'},
        {id:uuid4(), title:"Test 3", subtasks:[],comments:'This is the third'},
        {id:uuid4(), title:"Test 4", subtasks:[],comments:'This is the fourth'}
        
    ])
        const modifyTaskOrder=(value)=>{
            if(!value.destination) return'';
            const items=Array.from(tasks)
            const [holder]=items.splice(value.source.index,1)
            items.splice(value.destination.index,0,holder)
            setTasks(items)
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
        <Context.Provider value={{formState,updateForm,changePage,theme,sideBar,toggleSideBar,tasks,modifyTaskOrder}}>
            {children}
        </Context.Provider>
    )}

    export{Context,ContextFunction}


