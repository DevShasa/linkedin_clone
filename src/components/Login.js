import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css";
import linkedin_brand from "../assets/linkedin_text_logo.png";

function Login() {

    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const [profilePicture, setProfilePicture] = useState("")

    const loginHandler = () =>{
        console.log("loginstuff happening")
    }

    const registerHandler = ()=>{
        console.log("registerstuff happening")
    }

    return (
        <div className="login">
            <img src={linkedin_brand} alt="Linkeding logo" />
            <form>

                <input 
                    type="text" 
                    placeholder="Full Name (required if registering)"
                    onChange = {(e) => setName(e.target.value)}
                    value={name}
                />

                <input 
                    type="text" 
                    placeholder="Profile Pic URL (optional)"
                    onChange = {(e) => setProfilePicture(e.target.value)}
                    value={profilePicture}
                />

                <input 
                    type="text" 
                    placeholder="Email"
                    onChange = {(e) => setEmail(e.target.value)}
                    value={email}
                />

                <input 
                    type="password" 
                    placeholder="Password"
                    onChange = {(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button type="submit" onClick={loginHandler}>
                    Sign in
                </button>
            </form>

            <p>
                Not a member? {" "}
                <span className="login__register" onClick={registerHandler}>
                    Register Now
                </span>  
            </p>

        </div>
    )
}

export default Login