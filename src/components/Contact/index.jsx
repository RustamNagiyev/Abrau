import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Error from './Error';
import Success from './Success';


export default function Contact() {
  return (
    <section className='contact'>
      <Header />
      <Routes>
        <Route path='/' element={
          <Main />
        } />
        <Route path="/success" element={
          <Success />
        } />
        <Route path="/error" element={
          <Error />
        } />
      </Routes>
    </section>

  )
}