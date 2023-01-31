import React, {useState} from "react";
import useLogin from "../Hooks/useAuth";
import'../App.css'
const Login=()=>{
  const{changePage,toggleSelected,selected}=useLogin()
 

    return(
        <div className="Login-Parent ">
            <div className="Login-Form">
                <h1 className="sign-In">Login</h1>
                <h4>Welcome to Take-Note</h4>
                <form className="form-class">
                    <input id="login" className="input darkInput" type="email" onFocus={()=>toggleSelected('Email')} onBlur={()=>toggleSelected('')} placeholder={selected==='Email' ? '' : "Email"} ></input>
                    <input id="password"className="input darkInput"type='password' onFocus={()=>toggleSelected('Password')} onBlur={()=>toggleSelected('')}placeholder={selected==='Password' ? '' : "Password"}></input>
                    <div className="check-box-div">
                    <input id="checkBox"className="checkbox"type="checkbox"></input>
                    <label for="checkBox" className="remember-me"> Remember me </label>
                    </div>
                     <div className="login-button"> Login</div>  
                    <div>
                    <small className="create-signUp"> Need an account?</small>
                  <small onClick={()=>{changePage('/signup')}} className="sign-up">SIGN UP</small> 
                    </div>
                   
                             
                </form>

            </div>

        </div>
    )

}

export default Login