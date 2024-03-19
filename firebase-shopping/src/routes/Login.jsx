import React, { useState,useContext } from 'react'

import { GoogleAuthProvider,getAuth ,signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";
import toast from 'react-hot-toast';
import { AppContext } from '../App';

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const {setUser}=useContext(AppContext);

    const hazLoginGoogle=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log('token',token);
            console.log(user);
            toast.success(`Inicio de Sesion valido`);
            setUser(user);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    const hazLoginConEmail=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            setUser(user);
            toast.success(`Inicio de Sesion valido`);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`Usuario de sesion Incorrecto`);
        });
    }
        return (
            <div>
                <h1 className='text-xl font-semibold text-sky-700 mb-8'>
                    Este es el login
                </h1>
                {/* <p className='text-sm mb-8'>Haz click en el Siguiente boton para hacer login</p> */}
                <div className='flex flex-col items-center'>
                    <form onSubmit={hazLoginConEmail}className='flex flex-col gap-2 max-w-sm'>
                        <input className='border border-gray-500 rounded py-1 px-2 outline-none' type='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                        <input className='border border-gray-500 rounded py-1 px-2 outline-none' type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                        <button className='bg-sky-400 py-1 text-white rounded shadow'>Login In</button>
                    </form>
                    <button onClick={hazLoginGoogle}>... o haz Login con Google </button>
                </div>
                
            </div>
        )
}
