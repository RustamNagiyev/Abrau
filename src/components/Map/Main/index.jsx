import { Link } from "react-router-dom";
import "./index.css";
import { useTranslation } from 'react-i18next';

export default function Main(props) {
  const handleMapClick = (iframeSrc) => {
    const iframe = document.getElementById("map-iframe");
    iframe.src = iframeSrc;
  };

  const { t } = useTranslation();
  return (
    <section className="map-main">
      <div className="page-info-nav">
        <Link to={'/'}><h4>{t("mainPage")} /</h4></Link>
        <span>&nbsp; {t("salePlaces")}</span>
      </div>
      <h2 className="map-h2">{t("chooseShop")}</h2>
      <div className="map-container">
        <div className="map-flex1">
          {props.map !== undefined &&
            props.map.map((item) => (
              <div key={item.id} className="slide">
                <h3>{item.name}</h3>
                <p>{item.address}</p>
                <p>{item.phone}</p>
                <button
                  className="map-btn"
                  onClick={() => handleMapClick(item.iframeSrc)}
                >
                  {t("lookOnMap")}
                </button>
              </div>
            ))}
        </div>

        <div className="map-flex2">
          {props.map !== undefined && (
            <iframe
              id="map-iframe"
              src={props.map[0].iframeSrc}
              title={props.map[0].name}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}
