import React, {useContext} from "react";
import {ReactComponent as HidePassword} from '../assets/visible_icon.svg'
import {ReactComponent as ShowPassword} from '../assets/hidden_icon.svg'
import { Context } from "../Context/Context";
import'../App.css'
import useAuth from "../Hooks/useAuth";
const Login=()=>{
  const {formState,updateForm,changePage}=useContext(Context)
    const {toggleSelected,selected,passwordShow,
      togglePasswordShow,passWordRef,toggleHoverIcon,hoverIcon}=useAuth()

    return(
        <div className="Login-Parent ">
            <div className="Login-Form">
                <h1 className="sign-In">Login</h1>
                <h4>Welcome to Take-Note</h4>
                <form className="form-class" autoComplete                                                                                                                           ="off">
                    
                <section>
               <span style={{display: selected==='Email' || formState.email ? 'flex' : 'none'}}>Email</span>
                <input id="emailLogin"  name="email" className="input darkInput" type='email'  onFocus={()=>toggleSelected('Email')} onBlur={()=>toggleSelected('')}
                placeholder={selected==='Email' ? '' : "Email"}  onChange={(e)=>{updateForm(e)}} value={formState.email}/>
               </section>
               <section>
               <span style={{display: selected==='Password' || formState.password ? 'flex' : 'none'}}>Password</span>
               <input id='passwordLogin' name="password" ref={passWordRef}className="input darkInput" type={passwordShow ? 'text':'password'} 
               onFocus={()=>toggleSelected('Password')} onBlur={()=>{
                hoverIcon===false ? toggleSelected('') : toggleSelected('Password')}}
                
               placeholder={selected==='Password' ? '' : "Password"}  onChange={(e)=>{updateForm(e)}}
               value={formState.password}/>


               <small onClick={togglePasswordShow} onMouseEnter={()=>toggleHoverIcon(true)}  
               onMouseLeave={()=>toggleHoverIcon(false)}       
            style={{}}className="show-icon">{passwordShow ? 
               <ShowPassword height={20} width={30}fillOpacity="0.5"/>
               : <HidePassword height={30} width={30} fillOpacity="0.5"/>}</small>
                            
               </section>
              
                     <div className="check-box-div">
                    <input name="staySignedIn"id="checkBoxLogin"className="checkbox"type="checkbox" onChange={(e)=>updateForm(e)}value={formState.staySignedIn}></input>
                    <label for="checkBoxLogin" className="remember-me"> Remember me </label>
                    </div>
                     <div className="login-button"> Login</div>  
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