import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/DishDetail.module.css";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
// import Image from 'next/image'

const RecipyDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dish = JSON.parse(localStorage.getItem("dishData"));
  function createMarkup(c) {
    return { __html: c };
  }
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.img}>
          <h1 className={styles.h1}>{dish.title}</h1>
          <div className={styles.extra}>
            <img
              style={{ borderRadius: "15px", boxShadow: "3px 3px 3px grey" }}
              src={dish.image}
              alt={dish.title}
              height={200}
              width={250}
            />
          </div>
          <p
            className={styles.p}
            dangerouslySetInnerHTML={createMarkup(dish.summary)}
          ></p>
        </div>

        <div className={styles.content}>
          <div className={styles.extra}>
            <h3 className={styles.h3}>Ingredients</h3>
            <div className={styles.ingredients}>
              {dish.extendedIngredients.map((ingredient) => {
                return (
                  <div
                    style={{ display: "inline", margin: "0.5rem" }}
                    key={ingredient.name}
                  >
                    {" "}
                    <SendRoundedIcon
                      color="primary"
                      fontSize="x-small"
                      key={ingredient.name}
                    />{" "}
                    {ingredient.name}{" "}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.instructions}>
            <h1 className={styles.h1}>Instructions</h1>

            {dish.analyzedInstructions.map((all) => {
              return all.steps.map((key) => {
                return (
                  <div
                    style={{
                      display: "inline",
                      margin: "0.5rem",
                      fontWeight: "350",
                    }}
                    key={key.step}
                  >
                    {" "}
                    <SendRoundedIcon
                      color="primary"
                      fontSize="x-small"
                      key={key.step}
                    />{" "}
                    {key.step}{" "}
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipyDetail;
