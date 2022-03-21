import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import styles from '../styles/Signin.module.css'

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData(formData=>({
            ...formData,
            [name]:value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
                
            console.log(formData);
        
        
    }

  return (
    <div className={styles.signin}>
        <TextField className={styles.field} type="email" value={formData.email} name="email" id="email" label="Email" variant="outlined" onChange={handleChange}/>
        <TextField className={styles.field} type="password" value={formData.password} name="password" id="password" label="Password" variant="outlined" onChange={handleChange}/>

        <Button className={styles.btn} variant="contained" onClick={handleSubmit}>LogIn</Button>
    </div>
  )
}

export default Login