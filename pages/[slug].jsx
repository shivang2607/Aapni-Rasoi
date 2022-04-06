import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/DishDetail.module.css'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const RecipyDetail = () => {
    const router = useRouter();
    const {slug} = router.query;
    const dish = JSON.parse(localStorage.getItem("dishData"));
    function createMarkup(c){
    return {__html: c}
  }
  return (
    <div className={styles.container}><div className={styles.main}>
      
        
      <div className={styles.img}>
        <h1 className={styles.h1}>{dish.title}</h1>
        <div className={styles.extra}>
        <img style={{borderRadius:"15px", boxShadow: "3px 3px 3px grey"}} src={dish.image} alt={dish.title} />
        {/* <div className={styles.thing}>
          <AccessTimeOutlinedIcon fontSize='large'/> <h2 className={styles.h2}>{dish.readyInMinutes} Minutes</h2>
        </div> */}
        </div>
        <p className={styles.p} dangerouslySetInnerHTML={createMarkup(dish.summary)}></p>
      </div>
        
          
      <div className={styles.content}>
        <div className={styles.extra}>
          <h3 className={styles.h3}>Ingredients</h3>
        <div className={styles.ingredients}>
          {
            dish.extendedIngredients.map(ingredient=>{
              return <div style={{display:"inline", margin:"0.5rem"}}> <SendRoundedIcon color="primary" fontSize='x-small'/> {ingredient.name} </div>
            })
           
          }

        </div></div>

        <div className={styles.instructions}>
         <h1 className={styles.h1}>Instructions</h1>

          {dish.analyzedInstructions.map(all=>{
           return all.steps.map(key=>{
              return <div style={{display:"inline", margin:"0.5rem", fontWeight:"350"}}> <SendRoundedIcon color="primary" fontSize='x-small'/> {key.step} </div>
            })
          })}

        </div>
      </div>
      
      
      </div>
      </div>
  )
}

export default RecipyDetail