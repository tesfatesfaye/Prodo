import React,{useState,useEffect,createContext} from "react";
import {useNavigate} from "react-router-dom";
import {u}
const Context=createContext()
    
    function ContextFunction({children}){
        const [formState,setFormState]=useState(()=>({firstName:'',lastName:'',
        email:'',password:'', staySignedIn:false}))
        const [theme,setTheme]=useState(()=>'dark')
        const [notes,setNotes]=useState([{}])
    
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
       return(
        <Context.Provider value={{formState,updateForm,changePage,theme}}>
            {children}
        </Context.Provider>
    )}

    export{Context,ContextFunction}


