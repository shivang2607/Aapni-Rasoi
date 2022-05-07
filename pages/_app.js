import Navbar from "../components/navbar";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import "../styles/globals.css";
import data from "../data/data";
import DataContext from "../context/DataContext";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/protectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  const authRequired = ["/popular", "/favourites"];
  const router = useRouter();

  return (
    <>
     <Head>
        <title>👨‍🍳Aapni-Rasoi</title>
        <meta name="description" content="This is a Site for finding food Recipies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <title>food recipy</title>
      <AuthProvider>
        <DataContext.Provider value={data}>
          <Navbar />
          {authRequired.includes(router.pathname) ? (
            <ProtectedRoute>
              <Component {...pageProps} />
              </ProtectedRoute>
          ) : (
            <Component {...pageProps} />
          )}
        </DataContext.Provider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
