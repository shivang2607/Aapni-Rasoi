import React, {useState} from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import Image from "next/image";
import {Nav, NavDropdown} from 'react-bootstrap'
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const Navbar = () => {
  const router = useRouter();

  const { currentUser, logout } = useAuth();
  async function Logout() {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }


  

  return (
    <>

    <style jsx>{`
      .dropdown-toggle::after{
        display:"none" !important;
      }
    `}</style>


      <nav className={styles.mainnav}>
          <Image src="/logo.png" height = {70} width = {100}/>
        <ul>
          <Link href="/" passHref>
            <li>Home</li>
          </Link>
          {currentUser && (
            <Link href="/popular" passHref>
              <li>Search Recipy</li>
            </Link>
          )}
          <Link href="/about" passHref>
            <li>About</li>
          </Link>
          <Link href="/contact" passHref>
            <li>Contact Us</li>
          </Link>
        </ul>
        <nav className={styles.mainnavu2}>
          {!currentUser && (
            <ul>
              <Link href="/signin" passHref>
                <li >Sign In</li>
              </Link>
              <Link href="/login" passHref>
                <li >LogIn</li>
              </Link>
            </ul>
          )}
          {currentUser && (
            <ul>
              <li>
                
                <Nav
        className=""
        
        navbarScroll
      >
        
        <NavDropdown  id="navbarScrollingDropdown" className="dropdown-toggle" style={{display:"flex"}} title={<><Image
              src="/account-icon.png" 
              alt="user-icon"
              height={20} 
              width={25}
            /> <div className={styles.h5}>{currentUser.displayName}</div></>
               } >
          <NavDropdown.Item onClick={()=>router.push('/')}><b> Dashboard </b></NavDropdown.Item>
          <NavDropdown.Item onClick={()=>router.push('/favourites')}><b>Favourites</b></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={Logout}>
          <b>Logout</b>
          </NavDropdown.Item>
        </NavDropdown>
       
      </Nav>
                </li>
            </ul>
          )}
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
