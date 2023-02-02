import React,{useState,useEffect,createContext} from "react";
import {useNavigate} from "react-router-dom";

const Context=createContext()
    
    function ContextFunction({children}){
        const [formState,setFormState]=useState(()=>({firstName:'',lastName:'',
        email:'',password:'', staySignedIn:false}))
        
        const navigate=useNavigate()
        useEffect(()=>{
         console.log(formState.staySignedIn)   
        },[formState])
        
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
        <Context.Provider value={{formState,updateForm,changePage}}>
            {children}
        </Context.Provider>
    )}

    export{Context,ContextFunction}


