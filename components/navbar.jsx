import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const Navbar = () => {
  const router = useRouter();

  const { currentUser, logout } = useAuth();
  async function Logout() {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <>
    
      <nav className={styles.mainnav}>
        
        <ul>
          
          <Link href="/">
            <li>Home</li>
          </Link>
          {currentUser && <Link href="/popular">
            <li>Search Recipy</li>
          </Link>}
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
        <nav className={styles.mainnavu2}>
          {!currentUser && <ul>
            <Link href="/signin">
              <li>Sign In</li>
            </Link>
            <Link href="/login">
              <li>LogIn</li>
            </Link>
          </ul>}
         {currentUser && <ul><Button className = {styles.btn} variant="primary" onClick={Logout}>
              Logout
            </Button></ul>}
        </nav>
            
      </nav>
    </>
  );
};

export default Navbar;
