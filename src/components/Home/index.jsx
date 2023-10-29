import About from "./About"
import Brends from "./Brends"
import Header from "./Header"
import News from "./News"
import OurWork from "./OurWork"
import Products from "./Products"



export default function Home(prop) {
  return (
    <div className="home">
      <Header />
      <About />
      <Products products={prop.products} />
      <OurWork />
      <Brends />
      <News news={prop.news} />
    </div>
  )
}

