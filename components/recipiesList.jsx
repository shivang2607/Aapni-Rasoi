import React from 'react'
import {useRouter} from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from '../styles/recipiesList.module.css'

export const RecipiesList = ({dish}) => {

  // function createMarkup(c){
  //   return {__html: c+"..."}
  // }
  const router = useRouter();
  const sendData = ()=>{
    localStorage.setItem("dishData", JSON.stringify(dish));
    router.push(`/${dish.id}`) 
  }

  return (
    <div className={styles.card} >
        <Card sx={{ maxWidth: 300 }}  className={styles.con}>      
        <CardMedia
          component="img"
          height="200"
          image={dish.image}
          alt={dish.title}
          className={styles.media}
          onClick={sendData}
        />
        <CardContent className={styles.content} >
          <div className={styles.img} onClick={sendData}>
          {dish.vegetarian?<img  src="/icons8-vegetarian-food-symbol-48.png" alt="vegetarian" height={30}/>:<img src="/icons8-non-vegetarian-food-symbol-48.png" alt="non-vegetarian" height={30}/>}
          </div>

          <h3 className={styles.title} onClick={sendData}>{dish.title}</h3>

       {/* <div className={styles.sum} dangerouslySetInnerHTML={createMarkup(dish.summary.substr(0, 300))}></div> */}


       <div className={styles.ingredients}>
       <h3 style={{color:"green"}}> Ingredients: &nbsp;</h3>
         {
           dish.extendedIngredients.map(ingredient=>{
             return " "+ingredient.name+","
           })
         }
       </div>
       <div className={styles.ready}>Ready in : {dish.readyInMinutes} min</div>
       <div className={styles.servings}>Servings : {dish.servings} </div>
      
        </CardContent>
      
    </Card>
    </div>
  )
}
