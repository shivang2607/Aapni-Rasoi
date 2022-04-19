import React, { useState } from 'react'
import {useRouter} from 'next/router'
import { TextField, Button, Alert, Link } from '@mui/material'
import { useAuth } from '../context/AuthContext'
import styles from '../styles/Signin.module.css'

const Signin = () => {

    const router = useRouter();
   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const {signup, currentUser} = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword:"",
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData(formData=>({
            ...formData,
            [name]:value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if(formData.password !== formData.confirmPassword){    
            setError("Passwords do not Match")        
            return console.log("passwords do not match");
        }
                    
            console.log(formData);
           
             try{
                 setLoading(true)
                await signup(formData.email, formData.password);
                router.push('/popular');
           
             } catch (error){
                setError(error)
             }
             setLoading(false)
        
        
    }

  return (
    <div className={styles.signin}>
        {/* <h2>{}</h2> */}
        {error && <Alert className={styles.alert} severity="error" >{error}</Alert>}
        <TextField className={styles.field} type="email" value={formData.email} name="email" id="email" label="Email" variant="outlined" onChange={handleChange}/>
        <TextField className={styles.field} type="password" value={formData.password} name="password" id="password" label="Password" variant="outlined" onChange={handleChange}/>
        <TextField className={styles.field} type="password" value={formData.confirmPassword} name="confirmPassword" id="confirmPassword" label="Confirm Password" variant="outlined" onChange={handleChange}/>

        {/* <div className={styles.already}>Already  Registered? <Link href="/login">Log In</Link></div> */}

        <Button disabled = {loading} className={styles.btn} variant="contained" onClick={handleSubmit}>Sign In</Button>
    </div>
  )
}

export default Signin