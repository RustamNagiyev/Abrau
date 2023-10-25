import "./index.css"


export default function Main(props) {


  const handleMapClick = (iframeSrc) => {
    const iframe = document.getElementById('map-iframe');
    iframe.src = iframeSrc;
  };



  return (
    <section className="map-main">
      <h2 className="map-h2">Sizə ən yaxın mağazını seçin</h2>
      <div className="map-container">
      <div className="map-flex1">
      {props.map !== undefined && props.map.map((item) => (
            <div key={item.id} className="slide">
              <h3>{item.name}</h3>
              <p>{item.address}</p>
              <p>{item.phone}</p>
              <button className="map-btn" onClick={() => handleMapClick(item.iframeSrc)}>
                Xəritədə bax
              </button>
            </div>
          ))}
       
        </div>
      
      <div className="map-flex2">
        <iframe
          id="map-iframe"
          src={props.map !== undefined && props.map[0].iframeSrc}
          title={props.map !== undefined && props.map[0].name}
          width="100%"
          height="500"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      </div>
    </section>
  );
}