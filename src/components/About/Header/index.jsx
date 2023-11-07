import { useState } from "react";
import "./index.css";

export default function Header() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="about-header">
      <div className="top-img-wrapper">
        <img src={require("../../../images/about/about-header-bg.svg").default} alt="header template" />
        <img src={require("../../../images/about/about-header-video-button.png")} alt="video button" onClick={() => { setShowVideo(true) }} />
      </div>
      <div className="iframe-video-wrapper" style={{ visibility: `${showVideo ? 'visible' : 'hidden'}`, transform: `${showVideo ? 'scale(1)' : 'scale(0)'}` }}>
        <span onClick={() => { setShowVideo(false) }}>X</span>
        <iframe src="https://www.youtube.com/embed/1_4Rr5pP2wQ?si=EctgYqBPEmo8zvln" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  )
}
