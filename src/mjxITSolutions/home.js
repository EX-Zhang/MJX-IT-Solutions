import { isMobileOnly } from 'react-device-detect';

import './css/home.css';

function Home() {
  document.title = "Home | MJX IT Solutions Inc.";

  if (isMobileOnly) {

    return (
      <div className="PageContent">
        <div id="Home">
          <div id="Intro_mobile">
            <div>
              <img src={require("./img/MJXHome.png")} alt="" />
            </div>
            <div id="IntroText_mobile" className="MobileText">
              <h1>It's time to entrust your technology to the experts</h1>
            </div>
          </div>
          <div id="Detail" className="MobileText, MobileAlignCenter">

            <div className="Detail_mobile" id="NetworkingDetail">
              <div className="DetailImg_mobile">
                <a href="/network"><img src={require("./img/MJXHomeNetworking.png")} alt="" /></a>
                <h3><a href="/network">Networking</a></h3>
              </div>
              <div className="DetailText_mobile">
                <p>We will introduce the state of the art technology to optimize and secure your network .We offer network support contracts to support your network.</p>
              </div>
            </div><br />
            <div className="Detail_mobile" id="EMRSystemDetail">
              <div className="DetailImg_mobile">
                <a href="/emr"><img src={require("./img/MJXHomeEMR.png")} alt="" /></a>
                <h3><a href="/emr">EMR System</a></h3>
              </div>
              <div className="DetailText_mobile">
                <p>We have designed and implemented IT solutions for solo physicians and multi-provider Family Health Teams. We focus on using technology to improve workflow — so you can practice more efficiently and effectively.</p>
              </div>
            </div><br />
            <div className="Detail_mobile" id="ServicesDetail">
              <div className="DetailImg_mobile">
                <a href="/service"><img src={require("./img/MJXHomeServices.png")} alt="" /></a>
                <h3><a href="/service">Managed Services</a></h3>
              </div>
              <div className="DetailText_mobile">
                <p>We are able to resolve most of the issues remotely or on-site within the same day or the next day. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }

  return (
    <div className="PageContent">
      <div id="Home">
        <div id="Intro">
          <img src={require("./img/MJXHome.png")} alt="" />
          <div id="IntroText">
            <h1>It's time to entrust</h1>
            <h1>your technology</h1>
            <h1>to the experts</h1>
          </div>
        </div>
        <div id="Detail">
          <div className="Detail" id="NetworkingDetail">
            <div className="DetailImg">
              <a href="/network"><img src={require("./img/MJXHomeNetworking.png")} alt="" /></a>
            </div>
            <div className="DetailText">
              <h3><a href="/network">Networking</a></h3>
              <p>We will introduce the state of the art technology to optimize and secure your network .We offer network support contracts to support your network.</p>
            </div>
          </div>
          <div className="Detail" id="EMRSystemDetail">
            <div className="DetailImg">
              <a href="/emr"><img src={require("./img/MJXHomeEMR.png")} alt="" /></a>
            </div>
            <div className="DetailText">
              <h3><a href="/emr">EMR System</a></h3>
              <p>We have designed and implemented IT solutions for solo physicians and multi-provider Family Health Teams. We focus on using technology to improve workflow — so you can practice more efficiently and effectively.</p>
            </div>
          </div>
          <div className="Detail" id="ServicesDetail">
            <div className="DetailImg">
              <a href="/service"><img src={require("./img/MJXHomeServices.png")} alt="" /></a>
            </div>
            <div className="DetailText">
              <h3><a href="/service">Managed Services</a></h3>
              <p>We are able to resolve most of the issues remotely or on-site within the same day or the next day. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
