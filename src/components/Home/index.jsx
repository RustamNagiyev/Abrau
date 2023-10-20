import Footer from "../general/Footer"
import About from "./About"
import Brends from "./Brends"
import Header from "./Header"
import OurWork from "./OurWork"



export default function Home() {
  return (
    <div className="home">
     <Header />
     <About />
     
     <OurWork />
     <Brends />

     <Footer />
    </div>
  )
}

