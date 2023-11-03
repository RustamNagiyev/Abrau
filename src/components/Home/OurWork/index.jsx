import { Link } from "react-router-dom"
import "./index.css"
export default function OurWork() {
  return (
    <section className="ourwork">
      <div>
        <h2>ŞƏRABÇILIQ BİZİM İŞİMİZDİR!</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has. Lorem Ipsum is simply dummy.</p>
        <Link to={'/news'}><button className="black-bg">Ətraflı</button></Link>
      </div>
    </section>
  )
}
