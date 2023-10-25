import Footer from "../general/Footer"
import Brends from "./Brends"
import Header from "./Header"
import HomeAbout from "./HomeAbout"
import OurWork from "./OurWork"



export default function Home() {
  return (
    <div className="home">
     <Header />
     <HomeAbout />
     
     <OurWork />
     <Brends />

     <Footer />
    </div>
  )
}

