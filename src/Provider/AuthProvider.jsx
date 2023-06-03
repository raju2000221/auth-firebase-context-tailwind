import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContex = createContext(null);

const auth = getAuth(app)
 
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
       return signOut(auth)
    }

    useEffect(()=>{
      const unsubcribe =  onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setuser(currentUser)
            setloading(false);
        })
        return () =>{
            unsubcribe();
        }
    },[]);

   
   
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut
   }
    
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;