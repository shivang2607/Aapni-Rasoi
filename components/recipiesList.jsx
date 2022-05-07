import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Card, CardContent, CardMedia } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/recipiesList.module.css";
import Image from "next/image";


export const RecipiesList = ({ dish }) => {
  const { addFavourite, dropFavourite, currentUser } = useAuth();
  const [loading, setLoading]=useState(false)
  const isFav = JSON.parse(sessionStorage.getItem("favourite-Rid")).includes(dish.id);

  const router = useRouter();
  const sendData = () => {
    localStorage.setItem("dishData", JSON.stringify(dish));
    router.push(`/${dish.id}`);
  };

  const handleFavourite = async () => {
    setLoading(true)
    !isFav ? addFavourite(dish) : dropFavourite(dish);
    console.log("clicked")
    setLoading(false)
    
  };

  return (
    <div className={styles.card}>
      <Card sx={{ maxWidth: 300 }} className={styles.con}>
        <CardMedia
          component="img"
          height="200"
          image={dish.image}
          alt={dish.title}
          className={styles.media}
          onClick={sendData}
        />
        <CardContent className={styles.content}>
          <div className={styles.img}>
            <div className={styles.fav}>
              {currentUser && <Image
                src={isFav ? "/red-heart.svg" : "/heart-thin.svg"}
                alt="favourite"
                onClick={handleFavourite}
                height={25}
                width={25}
              />}
            </div>

            <Image
              src={
                dish.vegetarian
                  ? "/icons8-vegetarian-food-symbol-48.png"
                  : "/icons8-non-vegetarian-food-symbol-48.png"
              }
              alt="veg/non-veg"
              height={30}
              width={30}
            />
          </div>

          <h3 className={styles.title} onClick={sendData}>
            {dish.title}
          </h3>

          <div className={styles.ingredients}>
            <h3 style={{ color: "green" }}> Ingredients: &nbsp;</h3>
            {dish.extendedIngredients.map((ingredient) => {
              return " " + ingredient.name + ",";
            })}
          </div>
          {/* <Button variant="contained" color="primary" > */}

          <div className={styles.ready}>
            Ready in : {dish.readyInMinutes} min
          </div>
          <div className={styles.servings}>Servings : {dish.servings} </div>
          
        </CardContent>
      </Card>
    </div>
  );
};
