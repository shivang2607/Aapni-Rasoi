import Navbar from "../components/navbar";
import "../styles/globals.css";
import data from "../data/data";
import DataContext from "../context/DataContext";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>food recipy</title>
      <AuthProvider>
        <DataContext.Provider value={data}>
          <Navbar />
          <Component {...pageProps} />
        </DataContext.Provider>
      </AuthProvider>
    </>
  );
}

export default MyApp; 
