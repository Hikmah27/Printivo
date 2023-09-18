import './App.css'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Shop from './Components/Shop/Shop'
import Cards from './Components/Cards/Cards'
import Brands from './Components/Brands/Brands'
import Reviews from './Components/Reviews/Reviews'
import Count from './Components/Count/Count'
import Work from './Components/OurWork/Work'
import Footer from './Components/Footer/Footer'
import Copyright from './Components/Copyright/Copyright'

// import Printivo from './Components/Printivo'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Shop />
      <Cards />
      <Brands />
      <Reviews/>
      <Count/>
      <Work/>
      <Footer/>
      <Copyright/>
    </>
  )
}

export default App