import React,{useContext} from "react";
import'../App.css'
import useEntry from "../Hooks/useEntry";
import {ReactComponent as HidePassword} from '../assets/visible_icon.svg'
import {ReactComponent as ShowPassword} from '../assets/hidden_icon.svg'
import { Context } from "../Context/Context";
import { FaCheckDouble } from "react-icons/fa";

const SignUp=()=>{

    const {selected,passwordShow,passWordRef,emailRef,toggleStyle,}=useEntry()
    const {formState,updateForm,changePage}=useContext(Context)
        
    return(
        <div id='signUpParent'className="signUp-Parent  dark">
               <h1 className="sign-Up-title" style={{color:'lightblue'}}>Register</h1>
               <FaCheckDouble color="lightblue" size='1.5em' />
               <h4 style={{color:'lightblue'}}>Create a Prodo account</h4>
            <form className="form-class " >
                <section>
                <span style={{display: selected==='FirstName'||formState.firstName ? 'flex' : 'none'}}>FirstName</span>
                <input id="firstName" name="firstName"className="input darkInput" type="text" 
                onFocus={(e)=>toggleStyle(e,'FirstName')}
                onChange={(e)=>updateForm(e)} value={formState.firstName}
                onBlur={(e)=>toggleStyle(e,'')}placeholder={selected==="FirstName" ? '':"First Name"}/>
                </section>
                    <section>
                    <span style={{display: selected==='LastName' || formState.lastName? 'flex' : 'none'}}>LastName</span>
                <input id="lastName" name="lastName"className="input darkInput" type="text" onFocus={(e)=>toggleStyle(e,'LastName')} 
                onBlur={(e)=>{toggleStyle(e,'')}}
                placeholder={selected==="LastName" ? '' : 'Last Name'}  onChange={(e)=>{updateForm(e)}} value={formState.lastName}/>
                    </section>
               <section>
               <span style={{display: selected==='Email' || formState.email ? 'flex' : 'none'}}>Email</span>
                <input id="email"  name="email" className="input darkInput" type='email'  onFocus={(e)=>toggleStyle(e,'Email')} onBlur={(e)=>toggleStyle(e,'')}
                placeholder={selected==='Email' ? '' : "Email"} ref={emailRef}  onChange={(e)=>{updateForm(e)}} value={formState.email}/>
               </section>
               <section>
               <span style={{display: selected==='Password' || formState.password ? 'flex' : 'none'}}>Password</span>
               <input id='password' name="password" ref={passWordRef}className="input darkInput" type={passwordShow ? 'text':'password'} 
               onFocus={(e)=>toggleStyle(e,'Password')} onBlur={(e)=>{
              toggleStyle(e,'') }}
                
               placeholder={selected==='Password' ? '' : "Password"}  onChange={(e)=>{updateForm(e)}}
               value={formState.password}/>


               <small onClick={(e)=>toggleStyle(e)} onMouseEnter={(e)=>toggleStyle(e,true)}  
               onMouseLeave={(e)=>toggleStyle(e,false)}       
            style={{}}className="show-icon">{passwordShow ? 
               <ShowPassword height={20} width={30}fillOpacity="0.5"/>
               : <HidePassword height={30} width={30} fillOpacity="0.5"/>}</small>
               
               
               </section>
               <div className="check-box-div">
                    <input name="staySignedIn"id="checkBoxSignUP"className="checkbox"type="checkbox"
                    onChange={(e)=>updateForm(e)}value={formState.staySignedIn}></input>
                    <label for="checkBoxSignUP" className="remember-me"> Remember me </label>
                    </div>
                     <div tabIndex='0' className="login-button"> Sign up</div>  
                    <div>
                    <small className="create-signUp"> Already have an account?</small>
                    <small tabIndex='0' onClick={()=>changePage('/login')}className="sign-up">Login</small>
                    </div>
            </form>
            
            <div>

            </div>
        </div>
    )



}

export default SignUp