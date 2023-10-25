import "./index.css";
import mainTemplateImg from '../../../images/about/about-main-template1.svg';
import { Link } from "react-router-dom";

export default function Main() {
  const aboutData = [
    {
      id: 1,
      title: "Biz Kimik?",
      img: mainTemplateImg,
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit dignissim sed euismod ipsum vivamus cursus tristique elit velit. Diam fringilla amet fames justo morbi risus velit odio. Commodo id sagittis aliquam tempor. Dui volutpat risus, venenatis feugiat est. Mattis diam sed urna sed sed augue. Lacus, risus sed donec placerat euismod ut ut. Tortor mus ipsum nibh adipiscing vitae morbi nullam. Eget congue quam eu commodo. Nibh fames molestie sit imperdiet quis venenatis diam, a. Scelerisque habitasse nibh adipiscing mi.",
        "Adipiscing est et risus, magna lectus.Viverra amet augue tempus donec fringilla aliquam fringilla eget.Facilisis suspendisse sociis ut viverra id nisi, feugiat.Parturient lectus gravida eget sem donec gravida sed aliquam.Morbi sed aliquam egestas et, lectus.Nascetur cursus enim nascetur amet t"
      ]
    },
    {
      id: 2,
      title: "Bizim Missiyamız",
      img: mainTemplateImg,
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit dignissim sed euismod ipsum vivamus cursus tristique elit velit. Diam fringilla amet fames justo morbi risus velit odio. Commodo id sagittis aliquam tempor. Dui volutpat risus, venenatis feugiat est. Mattis diam sed urna sed sed augue. Lacus, risus sed donec placerat euismod ut ut. Tortor mus ipsum nibh adipiscing vitae morbi nullam. Eget congue quam eu commodo. Nibh fames molestie sit imperdiet quis venenatis diam, a. Scelerisque habitasse nibh adipiscing mi.",
        "Adipiscing est et risus, magna lectus.Viverra amet augue tempus donec fringilla aliquam fringilla eget.Facilisis suspendisse sociis ut viverra id nisi, feugiat.Parturient lectus gravida eget sem donec gravida sed aliquam.Morbi sed aliquam egestas et, lectus.Nascetur cursus enim nascetur amet t"
      ]
    },
    {
      id: 3,
      title: "Niyə Biz?",
      img: mainTemplateImg,
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit dignissim sed euismod ipsum vivamus cursus tristique elit velit. Diam fringilla amet fames justo morbi risus velit odio. Commodo id sagittis aliquam tempor. Dui volutpat risus, venenatis feugiat est. Mattis diam sed urna sed sed augue. Lacus, risus sed donec placerat euismod ut ut. Tortor mus ipsum nibh adipiscing vitae morbi nullam. Eget congue quam eu commodo. Nibh fames molestie sit imperdiet quis venenatis diam, a. Scelerisque habitasse nibh adipiscing mi.",
        "Adipiscing est et risus, magna lectus.Viverra amet augue tempus donec fringilla aliquam fringilla eget.Facilisis suspendisse sociis ut viverra id nisi, feugiat.Parturient lectus gravida eget sem donec gravida sed aliquam.Morbi sed aliquam egestas et, lectus.Nascetur cursus enim nascetur amet t"
      ]
    }
  ]
  return (
    <section className="about-main">
      <div className="page-info-nav">
        <Link to={'/'}><h4>Ana Səhifə /</h4></Link>
        <span>&nbsp; Haqqımızda</span>
      </div>
      {aboutData.map((data) => {
        return (
          <div key={data.id} className="part-container">
            <div className="all-container">
              <div className="all-wrapper">
                <div className="top-container">
                  <div className="title-wrapper">
                    <h2>0{data.id}</h2>
                    <h2>{data.title}</h2>
                  </div>
                  <img src={data.img} alt="template" />
                </div>
                <div className="text-content-wrapper">
                  {data.content.map((text, index) => {
                    return (
                      <p key={index}>{text}<br /><br /></p>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
