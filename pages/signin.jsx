import React, { useState } from "react";
import { useRouter } from "next/router";
import { TextField, Button, Alert, Link } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import data1 from "../data/data";
import styles from "../styles/Signin.module.css";
import Spinner from 'react-bootstrap/Spinner'

const Signin = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not Match");
      return console.log("passwords do not match");
    }

    if(!formData.userName)
    return setError("Please enter Display Name");

    console.log(formData);

    try {
      setLoading(true);
      await signup(formData.email, formData.password, formData.userName);      
      localStorage.setItem("item", JSON.stringify(data1));
      router.push("/popular");
    } catch (error) {
      setError(JSON.stringify(error.code));
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
        type="text"
        value={formData.userName}
        name="userName"
        id="userName"
        label="Enter your Display Name"
        variant="outlined"
        onChange={handleChange}
      />
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
      <TextField
        className={styles.field}
        type="password"
        value={formData.confirmPassword}
        name="confirmPassword"
        id="confirmPassword"
        label="Confirm Password"
        variant="outlined"
        onChange={handleChange}
      />


{!loading?<Button className={styles.btn} variant="contained" onClick={handleSubmit}>
        Sign In
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

export default Signin;
