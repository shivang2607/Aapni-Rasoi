import React, {useEffect, useState} from 'react'
import { auth, db } from '../config/firebase';
import {addDoc, collection, query, where, doc, deleteDoc, getDocs, onSnapshot} from 'firebase/firestore'
import {  createUserWithEmailAndPassword,onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const AuthContext = React.createContext();
export function useAuth(){
    return React.useContext(AuthContext)
}





export function AuthProvider({children}){

    // const auth = getAuth();

    const [currentUser,setCurrentUser] = useState()
    const [loading , setLoading] = useState(true)
    const [isFav, setIsFav] = useState(false)
    const [data, setData] = useState([])

    useEffect(()=>
        currentUser && onSnapshot(collection(db, "apni-rasoi", currentUser.email , "favourites"), (snapshot) => 
             setData(snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id})))
             
        ),
        [isFav, currentUser]
    );

    
    // const rId = data.map(item => {return item.recipyId})

    // console.log("recipy id =>", rId);


    async function signup(email, password, name){
        await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {
            displayName: name
        } )
        

        
    }

    async function login(email, password){

         await signInWithEmailAndPassword(auth, email, password);
      
    }

    async function addFavourite(dish){
        setIsFav(true)
        await addDoc(collection(db, "apni-rasoi", `${currentUser.email}`, "favourites"), {
            recipyId: dish.id,
            recipy: dish,
          });

         
          
    }

    async function dropFavourite(dish){
        setIsFav(false)
        const qry = query(collection(db, "apni-rasoi", `${currentUser.email}`, "favourites"), where("recipyId", "==", dish.id ));
        const snapshot = await getDocs(qry);
        const results = snapshot.docs.map(doc=>({
            ...doc.data(),
             id: doc.id,
        }))


        results.forEach(async result=>{
            const docRef = doc(db, "apni-rasoi", `${currentUser.email}`, "favourites", result.id);
            await deleteDoc(docRef);
        })

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

   
    // console.table("this is table", data)
    const value = {
        currentUser,
        data,
        signup,
        login,
        addFavourite,
        dropFavourite,
        logout,
    }

  return (
   <AuthContext.Provider value = {value}>
       {!loading && children }
   </AuthContext.Provider>
  )
}
