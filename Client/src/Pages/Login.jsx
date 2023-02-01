import React, {useState} from "react";
import useLogin from "../Hooks/useAuth";
import'../App.css'
const Login=()=>{
  const{changePage,toggleSelected,selected,email,toggleEmail,togglePassword,password,togglePasswordShow}=useLogin()
 

    return(
        <div className="Login-Parent ">
            <div className="Login-Form">
                <h1 className="sign-In">Login</h1>
                <h4>Welcome to Take-Note</h4>
                <form className="form-class">
                    
                <section>
               <span style={{display: selected==='Email' ? 'flex' : 'none'}}>Email</span>
                <input id="signUpEmail" className="input darkInput" type='email' 
                onFocus={()=>toggleSelected('Email')} onBlur={()=>toggleSelected('')}
                placeholder={selected==='Email' ? '' : "Email"}  onChange={(e)=>toggleEmail(e.target.value)} value={email}/>
               </section>
               
               <section>
               <span style={{display: selected==='Password' ? 'flex' : 'none'}}>Password</span>
               <input id='emailPassword' className="input darkInput" type='password' 
               onFocus={()=>toggleSelected('Password')}onBlur={()=>toggleSelected('')}
               placeholder={selected==='Password'? '' : "Password"}  onChange={(e)=>togglePassword(e.target.value)} value={password}/>
               </section>

                    <div className="check-box-div">
                    <input id="checkBox"className="checkbox"type="checkbox"></input>
                    <label for="checkBox" className="remember-me"> Remember me </label>
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