import React, {useContext} from "react";
import {ReactComponent as HidePassword} from '../assets/visible_icon.svg'
import {ReactComponent as ShowPassword} from '../assets/hidden_icon.svg'
import { Context } from "../Context/Context";
import { FaCheckDouble } from "react-icons/fa";
import'../App.css'
import useEntry from "../Hooks/useEntry";
const Login=()=>{
  const {selected,passwordShow,passWordRef,hoverIcon,toggleStyle}=useEntry()

        const {formState,updateForm,changePage}=useContext(Context)
    return(
        <div className="Login-Parent ">
            <div className="Login-Form">
                <h1 className="sign-In" style={{color:'lightblue'}}>Login</h1>
                <FaCheckDouble color="lightblue" size='1.5em'/>
                <h4 style={{color:'lightblue'}}>Welcome to Take-Note</h4>
                <form className="form-class" >                                                                                                                          
                    
                <section>
               <span style={{display: selected==='Email' || formState.email ? 'flex' : 'none'}}>Email</span>
                <input id="email"  name="email" className="input darkInput" type='email'  onFocus={(e)=>toggleStyle(e,'Email')} onBlur={(e)=>toggleStyle(e,'')}
                placeholder={selected==='Email' ? '' : "Email"}  onChange={(e)=>{updateForm(e)}} value={formState.email}/>
               </section>
               <section>
               <span style={{display: selected==='Password' || formState.password ? 'flex' : 'none'}}>Password</span>
               <input id='password' name="password" ref={passWordRef}className="input darkInput" type={passwordShow ? 'text':'password'} 
               onFocus={(e)=>toggleStyle(e,'Password')} onBlur={(e)=>{
                hoverIcon===false ? toggleStyle(e,'') : toggleStyle(e,'Password')}}
                
               placeholder={selected==='Password' ? '' : "Password"}  onChange={(e)=>{updateForm(e)}}
               value={formState.password}/>


               <small onClick={(e)=>toggleStyle(e)} onMouseEnter={(e)=>toggleStyle(e,true)}  
               onMouseLeave={(e)=>toggleStyle(e,false)}       
            style={{}}className="show-icon">{passwordShow ? 
               <ShowPassword height={20} width={30}fillOpacity="0.5"/>
               : <HidePassword height={30} width={30} fillOpacity="0.5"/>}</small>
               
               
               </section>
                     <div className="check-box-div">
                    <input name="staySignedIn"id="checkBoxLogin"className="checkbox"type="checkbox" onChange={(e)=>updateForm(e)}value={formState.staySignedIn}></input>
                    <label for="checkBoxLogin" className="remember-me"> Remember me </label>
                    </div>
                     <div className="login-button" onClick={()=>changePage('/')}> Login</div>  
                    <div>
                    <small className="create-signUp"> Need an account?</small>
                  <small onClick={()=>{changePage('/signup')}} className="sign-up">Sign up</small> 
                    </div>
                   
                             
                </form>

            </div>

        </div>
    )

}

export default Login