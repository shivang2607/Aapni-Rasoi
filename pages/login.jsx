import React, { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Signin.module.css";
import data1 from "../data/data";
import Spinner from 'react-bootstrap/Spinner'


const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login, currentUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    try {
      setLoading(true);
      await login(formData.email, formData.password);
      localStorage.setItem("item", JSON.stringify(data1));
      router.push("/popular");
    } catch (error) {
      setError(error.message.substr(9));
    }
    setLoading(false);
  }

  return (
    <div className={styles.signin}>
      {error && (
        <Alert className={styles.alert} severity="error">
          {error}
        </Alert>
      )}
      <TextField
        className={styles.field}
        type="email"
        value={formData.email}
        name="email"
        id="email"
        label="Email"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        className={styles.field}
        type="password"
        value={formData.password}
        name="password"
        id="password"
        label="Password"
        variant="outlined"
        onChange={handleChange}
      />

     
      {!loading?<Button className={styles.btn} variant="contained" onClick={handleSubmit}>
        LogIn
      </Button>:<Button className={styles.btn} variant="contained" >
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Redirecting...
  </Button>}
    </div>
  );
};

export default Login;
