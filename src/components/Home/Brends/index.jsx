import "./index.css";
export default function Brends() {
  return (
    <section>
      <h2>Brendlər</h2>
      <div className="brendscontainer">
        <div className="left">
        <img src={require('../../../images/home/left.png').default}/>
          <div className="text-wrapper">
          <h2>AZERBAYCAN ŞƏRABI</h2>
          <button>Ətraflı</button>
          </div>
        </div>
        <div className="right">
        <img src={require('../../../images/home/right.png')}/>
          <div className="text-wrapper">
          <h2>RUSİYA ŞƏRABI</h2>
          <button>Ətraflı</button>
          </div>
        </div>
      </div>
    </section>
  );
}
