import Header from './Header'
import Main from './Main'


export default function Map(prop) {

  return (
    <section className='map'>
      <Header />
      <Main map={prop.map} />
    </section>
  )
}