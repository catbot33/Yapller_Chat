import {auth, googleProvider} from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = () =>{
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate()
 const signIn = async()=>{
    await createUserWithEmailAndPassword (auth, email, password)
    navigate("/Yapller");
  }
  const signInWithGoogle = async()=>{
    await signInWithPopup(auth, googleProvider)
    navigate("/Yapller");
  }


    return(
        <div>
          <label for="user_email">Email</label>  <input id="user_email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <label for="user_pass">Password</label>  <input id="user_pass" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={signIn}>Sign In</button>
          <button onClick={signInWithGoogle}>Sign In with Google </button>
        </div>
    );
}