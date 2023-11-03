import "./index.css";
import { Link } from "react-router-dom";

export default function Main(prop) {
  return (
    <section className="about-main">
      <div className="page-info-nav">
        <Link to={'/'}><h4>Ana Səhifə /</h4></Link>
        <span>&nbsp; Haqqımızda</span>
      </div>
      {prop.aboutData && prop.aboutData.map((data) => {
        return (
          <div key={data.id} className="part-container">
            <div className="all-container">
              <div className="all-wrapper">
                <div className="top-container">
                  <div className="title-wrapper">
                    <h2>0{data.id}</h2>
                    <h2>{data.title}</h2>
                  </div>
                  <img src={require(`../../../images/about/${data.img}`)} alt="template" />
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
