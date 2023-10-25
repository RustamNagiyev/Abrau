import Footer from "../general/Footer"
import About from "./About"
import Brends from "./Brends"
import Header from "./Header"
import OurWork from "./OurWork"
import Products from "./Products"



export default function Home() {
  return (
    <div className="home">
     <Header />
     <About />
     <Products />
     <OurWork />
     <Brends />

     <Footer />
    </div>
  )
}

