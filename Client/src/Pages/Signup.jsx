import React from "react";
import'../App.css'
import useLogin from "../Hooks/useAuth";
const SignUp=()=>{

    const {changePage,toggleSelected,selected}=useLogin()
    return(
        <div className="signUp-Parent dark">
               <h3 className="sign-Up-title">Sign up for Take Note</h3>
            <form className="form-class">
               
                <input id="FirstName" className="input darkInput" type="text" onFocus={()=>toggleSelected('FirstName')} onBlur={()=>toggleSelected('')}placeholder={selected==="FirstName" ? '':"First Name"}/>
                <input id="LastName" className="input darkInput" type="text"  onFocus={()=>toggleSelected('LastName')} onBlur={()=>toggleSelected('')}placeholder={selected==="LastName" ? '' : 'Last Name'}/>
                
                <input id="signUpEmail" className="input darkInput" type='email' onFocus={()=>toggleSelected('Email')} onBlur={()=>toggleSelected('')}placeholder={selected==='Email' ? '' : "Email"}/>
                <input id='emailPassword' className="input darkInput" type='password' onFocus={()=>toggleSelected('Password')}onBlur={()=>toggleSelected('')}placeholder={selected==='Password'? '' : "Password"}/>
                <div className="check-box-div">
                    <input id="checkBox"className="checkbox"type="checkbox"></input>
                    <label for="checkBox" className="remember-me"> Remember me </label>
                    </div>
                     <div className="login-button"> Sign up</div>  
                    <div>
                    <small className="create-signUp"> Already have an account?</small>
                    <small onClick={()=>{changePage('/login')}}className="sign-up">Login</small>
                    </div>
            </form>
            
            <div>

            </div>
        </div>
    )



}

export default SignUp