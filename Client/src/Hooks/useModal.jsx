import React,{useContext,useState,useLayoutEffect} from "react";
import { Context } from "../Context/Context";

const [modalHover,setModalHover]=useState(false)
const {toggleTaskModal}=useContext(Context)

toggleHover=(value)=>{
    setModalHover(value)
}
useLayoutEffect(()=>{

},[modalHover])

