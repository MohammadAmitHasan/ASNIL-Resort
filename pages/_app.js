import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <div className='mt-14'>
      <Component {...pageProps} />
    </div>
    <Footer />
  </>
}

export default MyApp
