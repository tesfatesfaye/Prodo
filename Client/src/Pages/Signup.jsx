import React,{useContext} from "react";
import'../App.css'
import useLogin from "../Hooks/useAuth";
import {ReactComponent as HidePassword} from '../assets/visible_icon.svg'
import {ReactComponent as ShowPassword} from '../assets/hidden_icon.svg'
import { Context } from "../Context/Context";
const SignUp=()=>{

    const {toggleSelected,selected,passwordShow,
        togglePasswordShow,passWordRef,toggleHoverIcon,hoverIcon}=useLogin()

        const {formState,updateForm,changePage}=useContext(Context)
        
    return(
        <div id='signUpParent'className="signUp-Parent  dark">
               <h3 className="sign-Up-title">Sign up for Take Note</h3>
            <form className="form-class " autoComplete="off">
                <section>
                <span style={{display: selected==='FirstName'||formState.firstName ? 'flex' : 'none'}}>FirstName</span>
                <input id="firstName" name="firstName"className="input darkInput" type="text" 
                onFocus={()=>toggleSelected('FirstName')}
                onChange={(e)=>updateForm(e)} value={formState.firstName}
                onBlur={()=>toggleSelected('')}placeholder={selected==="FirstName" ? '':"First Name"}/>
                </section>
                    <section>
                    <span style={{display: selected==='LastName' || formState.lastName? 'flex' : 'none'}}>LastName</span>
                <input id="lastName" name="lastName"className="input darkInput" type="text" onFocus={(e)=>toggleSelected('LastName')} 
                onBlur={()=>{toggleSelected('')}}
                placeholder={selected==="LastName" ? '' : 'Last Name'}  onChange={(e)=>{updateForm(e)}} value={formState.lastName}/>
                    </section>
               <section>
               <span style={{display: selected==='Email' || formState.email ? 'flex' : 'none'}}>Email</span>
                <input id="email"  name="email" className="input darkInput" type='email'  onFocus={()=>toggleSelected('Email')} onBlur={()=>toggleSelected('')}
                placeholder={selected==='Email' ? '' : "Email"}  onChange={(e)=>{updateForm(e)}} value={formState.email}/>
               </section>
               <section>
               <span style={{display: selected==='Password' || formState.password ? 'flex' : 'none'}}>Password</span>
               <input id='password' name="password" ref={passWordRef}className="input darkInput" type={passwordShow ? 'text':'password'} 
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
                    <input name="staySignedIn"id="checkBoxSignUP"className="checkbox"type="checkbox" onChange={(e)=>updateForm(e)}value={formState.staySignedIn}></input>
                    <label for="checkBoxSignUP" className="remember-me"> Remember me </label>
                    </div>
                     <div tabIndex='0' className="login-button"> Sign up</div>  
                    <div>
                    <small className="create-signUp"> Already have an account?</small>
                    <small tabIndex='0' onClick={(e)=>changePage('/login')}className="sign-up">Login</small>
                    </div>
            </form>
            
            <div>

            </div>
        </div>
    )



}

export default SignUp