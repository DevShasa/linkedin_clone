import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css";
import linkedin_brand from "../assets/linkedin_text_logo.png";
import { auth } from "../firebase/firebase";
import { login } from "../redux/userSlice";

function Login() {

    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")

    const loginHandler = async(e) =>{
        e.preventDefault()
        try{
            const userAuth = await auth.signInWithEmailAndPassword(email, password);
            dispatch(
                login({
                    email: userAuth.user.email,
                    id: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                })
            )
        }catch(error){
            alert(`If creating a new account click Register Now, below the sign in button, \nelse ${error}`);
        }

    }

    const registerHandler = async()=>{
        if(!name){
            // if there is no name
            return alert("Please enter a full Name")
        }

        try{
            // pass email and passeword and return a user object 
            const userAuth = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            
            await userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoUrl,
            })

            // save user in local state
            dispatch(login({
                email: userAuth.user.email,
                id: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                // displayName: name,
                photoURL: userAuth.user.photoURL
            }));

        }catch(error){
            alert("ERROR>>", error)
        }
    };

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
                    onChange = {(e) => setPhotoUrl(e.target.value)}
                    value={photoUrl}
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
            <p>
                Only email and password if you have an account
            </p>
        </div>
    )
}

export default Login