import React, { useState, useEffect } from "react";
import { RecipiesList } from "../components/recipiesList";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Image from "next/image";
import { TextField, Button } from "@mui/material";
import styles from "../styles/RecipyForm.module.css";
import { useAuth } from "../context/AuthContext";



const Popular = () => {
  const [recipies, setRecipies] = useState(
    JSON.parse(localStorage.getItem("item"))
  );



  const [formData, setFormData] = useState({
    dish: "",
    ingredients: "",
    time: 60,
  });

  const [checkd, setCheckd] = useState(true);
  const [veg, setVeg] = useState(false);

  const api =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=89941ac36f9b4afebaf4081c12905dd1&addRecipeInformation=true&instructionsRequired=true&number=50&fillIngredients=true";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (veg) api = api + "&diet=Lacto-Vegetarian";
    if (checkd) api = api + `&query=${formData.dish}`;
    if (formData.time)
      api =
        api +
        `&includeIngredients=${formData.ingredients}&maxReadyTime=${formData.time}`;
    else api = api + `&includeIngredients=${formData.ingredients}`;

    fetch(api)
      .then((res) => res.json())
      .then((result) => {
        result && setRecipies(result);
        console.log(recipies);
        localStorage.setItem("item", JSON.stringify(result));
      });


  }

  const { data } = useAuth();
  sessionStorage.setItem(
    "favourite-Rid",
    JSON.stringify(
      data.map((item) => {
        return item.recipyId;
      })
    )
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <FormControlLabel
            className={styles.switch}
            control={<Switch checked={checkd} />}
            onChange={() => setCheckd(!checkd)}
            label="Select Dish ??"
          />

          <FormControlLabel
            className={styles.switch}
            control={<Switch checked={veg} />}
            onChange={() => setVeg(!veg)}
            label="only Veg"
          />

          {checkd && (
            <TextField
              className={styles.field}
              type="text"
              value={formData.dish}
              name="dish"
              id="dish"
              label="Enter Your Dish"
              onChange={handleChange}
            />
          )}
          <TextField
            className={styles.field}
            type="text"
            value={formData.ingredients}
            name="ingredients"
            id="ingredients"
            label="Ingredients to Include  ( , separated)"
            onChange={handleChange}
          />
          <TextField
            className={styles.field}
            type="text"
            value={formData.time}
            name="time"
            id="time"
            label="Max. Time to Cook in Min."
            onChange={handleChange}
          />

          <Button
            className={styles.btn}
            variant="contained"
            onClick={handleSubmit}
          >
            Show Recipies
          </Button>
        </div>
        <div className={styles.content}>
          
          {recipies &&
            recipies.totalResults===0? <Image src="/no-matches.png" height={500} width={900}/> :recipies.results.map((index) => {
              return <RecipiesList dish={index} key={index.id} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Popular;
