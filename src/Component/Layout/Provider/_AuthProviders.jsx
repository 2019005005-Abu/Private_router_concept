import React, { createContext, useEffect } from 'react'
export const AuthContext=createContext(null);
import app from '../../../Firebase/_firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, 
  signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
const auth=getAuth(app);
const Goole_Auth_provider = new GoogleAuthProvider();
const _AuthProviders = ({children}) => {
    const[user,setUser]=React.useState(null);
    const[loading,setLoading]=React.useState(false);
    const createUser=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password);
    }
    const SignIn=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
    }
    //SignOut
    const LogOut=()=>{
      return signOut(auth)
    }
    //observed auth change
     useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,current_user=>{
           console.log('auth state change',current_user);
           setUser(current_user);
           setLoading(false);
        });
        return()=>{
          unsubscribe();
        }
     },[])
    //singInwithGoogle
     const signInWithGoogleProvider=()=>{
        return signInWithPopup(auth,Goole_Auth_provider)
     }
    let auth_info={user,createUser,SignIn,LogOut,loading,
      signInWithGoogleProvider
    }
     
  return (
    <div>
      <AuthContext.Provider value={auth_info}>
          {children}
      </AuthContext.Provider>
    </div>
  )
}

export default _AuthProviders
