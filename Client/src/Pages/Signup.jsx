import React from "react";
import'../App.css'
import useLogin from "../Hooks/useAuth";
import {ReactComponent as ShowPassword} from '../assets/visible_icon.svg'
import {ReactComponent as HidePassword} from '../assets/hidden_icon.svg'
import { useEffect } from "react";
const SignUp=()=>{

    const {changePage,toggleSelected,selected,firstName,lastName,email,password,
        toggleFirstName,toggleLastName,togglePassword,toggleEmail,passwordShow,
        togglePasswordShow,passWordRef}=useLogin()
        useEffect(()=>{
            console.log(passwordShow)
        })
    return(
        <div className="signUp-Parent dark">
               <h3 className="sign-Up-title">Sign up for Take Note</h3>
            <form className="form-class">
                <section>
                <span style={{display: selected==='FirstName'||firstName ? 'flex' : 'none'}}>FirstName</span>
                <input id="FirstName" className="input darkInput" type="text" 
                onFocus={()=>toggleSelected('FirstName')}
                onChange={(e)=>toggleFirstName(e.target.value)} value={firstName}
                onBlur={()=>toggleSelected('')}placeholder={selected==="FirstName" ? '':"First Name"}/>
                </section>
                    <section>
                    <span style={{display: selected==='LastName' || lastName? 'flex' : 'none'}}>LastName</span>
                <input id="LastName" className="input darkInput" type="text"  onFocus={(e)=>toggleSelected('LastName')} 
                onBlur={()=>{toggleSelected('')}}
                placeholder={selected==="LastName" ? '' : 'Last Name'}  onChange={(e)=>{toggleLastName(e.target.value)}} value={lastName}/>
                    </section>
               <section>
               <span style={{display: selected==='Email' || email ? 'flex' : 'none'}}>Email</span>
                <input id="signUpEmail"   className="input darkInput" type='email' onFocus={()=>toggleSelected('Email')} onBlur={()=>toggleSelected('')}
                placeholder={selected==='Email' ? '' : "Email"}  onChange={(e)=>toggleEmail(e.target.value)} value={email}/>
               </section>
               <section>
               <span style={{display: selected==='Password' || password? 'flex' : 'none'}}>Password</span>
               <input id='emailPassword' ref={passWordRef}className="input darkInput" type='password' 
               onFocus={()=>toggleSelected('Password')}onBlur={()=>toggleSelected('')}
               placeholder={selected==='Password'? '' : "Password"}  onChange={(e)=>togglePassword(e.target.value)} 
               value={password}/>


               <small onClick={togglePasswordShow}          
            style={{}}className="show-icon">{passwordShow ? 
               <ShowPassword height={30} width={30}fillOpacity="0.5"/>
               : <HidePassword height={20} width={30} fillOpacity="0.5"/>}</small>
               
               
               </section>
              
                <div className="check-box-div">
                    <input id="checkBox"className="checkbox"type="checkbox"></input>
                    <label for="checkBox" className="remember-me"> Remember me </label>
                    </div>
                     <div tabIndex='0' className="login-button"> Sign up</div>  
                    <div>
                    <small className="create-signUp"> Already have an account?</small>
                    <small tabIndex='0      ' onClick={(e)=>{
                        console.log(e)
                        changePage('/login')}}className="sign-up">Login</small>
                    </div>
            </form>
            
            <div>

            </div>
        </div>
    )



}

export default SignUp