import React from 'react'
import { useAuth } from "../context/AuthContext";
import { RecipiesList } from "../components/recipiesList";
import styles from "../styles/Home.module.css";


export default function Favourites(){

    const {data} = useAuth();
    

  return (
    <main className={styles.main}>
        <h1 className = {styles.favh1}>Your Favourites </h1><hr /><br /><br />
    <div className={styles.fav}>
  {data.map((fav) => {
          return <RecipiesList dish={fav.recipy} key={fav.recipyId} />;
        })}
        
      </div>
      </main>
  )
}
