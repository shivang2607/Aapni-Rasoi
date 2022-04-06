import Navbar from '../components/navbar'
import '../styles/globals.css'
import data from '../data/data'
import DataContext from '../context/DataContext'


function MyApp({ Component, pageProps }) {

  

  return <>
   <title>
        food recipy
      </title>
      <DataContext.Provider value = {data}>      
  <Navbar/>
  <Component {...pageProps} />
  </DataContext.Provider>
  </>
}

export default MyApp
