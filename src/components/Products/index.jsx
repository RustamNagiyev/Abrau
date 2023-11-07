import Header from './Header'
import Main from './Main'



export default function Products(prop) {

  return (
    <section className='products'>
      <Header />
      <Main products={prop.products} clickedProductId={prop.clickedProductId} handleSetClickedPId={prop.handleSetClickedPId} />
    </section>
  )
}