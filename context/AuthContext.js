import React, {useEffect, useState} from 'react'
import { auth } from '../config/firebase';
import {  createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const AuthContext = React.createContext();
export function useAuth(){
    return React.useContext(AuthContext)
}





export function AuthProvider({children}){

    // const auth = getAuth();

    const [currentUser,setCurrentUser] = React.useState()
    const [loading , setLoading] = useState(true)

    async function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    async function login(email, password){
        return await signInWithEmailAndPassword(auth, email, password);
    }

    async function logout(){
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

   

    const value = {
        currentUser,
        signup,
        login,
        logout,
    }

  return (
   <AuthContext.Provider value = {value}>
       {!loading && children }
   </AuthContext.Provider>
  )
}
