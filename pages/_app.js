import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
   <title>
        food recipy
      </title>
  <Navbar/>
  <Component {...pageProps} /></>
}

export default MyApp
