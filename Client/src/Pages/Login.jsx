import React, {useState} from "react";
import'../App.css'
const Login=()=>{
  

    return(
        <div className="Login-Parent dark">
            <div className="Login-Form">
                <h1 className="sign-In">Login</h1>
                <h4>Welcome</h4>
                <form className="form-class">
                    <input id="login" className="input" type="email" placeholder="Login" ></input>
                    <input id="password"className="input"type='password' placeholder="Password"></input>
                    <div className="check-box-div">
                    <input id="checkBox"className="checkbox"type="checkbox"></input>
                    <label for="checkBox"> Remember me </label>
                    </div>
                     <div className="login-button"> Login</div>  
                    <div>
                    <small className="create-signUp"> Need an account?</small>
                    <small className="sign-up">SIGN UP</small>
                    </div>
                   
                             
                </form>

            </div>

        </div>
    )

}

export default Login