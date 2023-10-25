import Footer from '../general/Footer'
import Header from './Header'
import Main from './Main'


export default function Map(prop) {
  console.log(prop.map !== undefined && prop.map)
  return (
    <section className='map'>
      <Header />
      <Main map={prop.map} />
      <Footer />
    </section>
  )
}