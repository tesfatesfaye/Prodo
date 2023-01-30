import React from "react";
import'../App.css'
import { Link } from "react-router-dom";
import useLogin from "../Hooks/useAuth";
const SignUp=()=>{

    const {emailIsClicked,passwordIsClicked,toggleEmail,togglePassword,firstNameIsClicked,lastNameIsClicked,toggleFirstName,toggleLastName,changePage}=useLogin()
    return(
        <div className="signUp-Parent dark">
               <h3 className="sign-Up-title">Sign up for Take Note</h3>
            <form className="form-class">
               
                <input id="FirstName" className="input darkInput" type="text" onFocus={toggleFirstName} onBlur={toggleFirstName}placeholder={firstNameIsClicked}/>
                <input id="LastName" className="input darkInput" type="text"  onFocus={toggleLastName} onBlur={toggleLastName}placeholder={lastNameIsClicked}/>
                
                <input id="signUpEmail" className="input darkInput" type='email' onFocus={toggleEmail} onBlur={toggleEmail}placeholder={emailIsClicked}/>
                <input id='emailPassword' className="input darkInput" type='password' onFocus={togglePassword} onBlur={togglePassword}placeholder={passwordIsClicked}/>
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