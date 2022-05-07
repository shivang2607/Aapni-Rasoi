import styles from "../styles/Home.module.css";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { RecipiesList } from "../components/recipiesList";
import data1 from "../data/data";
import { Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { currentUser, data } = useAuth();
  console.log(currentUser);
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(data1));
  }, []);
  sessionStorage.setItem(
    "favourite-Rid",
    JSON.stringify(
      data.map((item) => {
        return item.recipyId;
      })
    )
  );

  return (
    <div className={styles.container}>
      {/* <Head>
        <title>👨‍🍳Aapni-Rasoi</title>
        <meta name="description" content="This is a Site for finding food Recipies" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className={styles.main}>
        <div className={styles.banner}>
          <h2 className={styles.h2}>
            Food is not just eating energy,Its an EXPERIENCE!!!
          </h2>

          {!currentUser && (
            <div className={styles.s1}>
              <Button
                className={styles.btn}
                variant="contained"
                onClick={() => {
                  router.push("/signin");
                }}
              >
                Sign In
              </Button>
            </div>
          )}
        </div>

        <h1 className={styles.h1}>Our Famous Recipies</h1>
        <br />

        {data1.results.map((index) => {
          return <RecipiesList dish={index} key={index.id} />;
        })}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
