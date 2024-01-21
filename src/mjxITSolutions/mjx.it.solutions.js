import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './home';
import Service, { EMR, Network } from './service';
import About from './about';
import Contact from './contact';

import './css/mjx.it.solutions.css';

function MJX_IT_Solutions() {
  return (
    <div>
      <div id="NavBar">
        <ul id="NavBar-ul">
          <li className="NavBar-li"><a className={PageIsActive("home")} href="/">Home</a></li>
          <li className="NavBar-li"><a id="NavBar-DropDown-Menu" className={PageIsActive("service")} href="/service">Services</a>
            <ul className="NavBar-DropDown-Content">
              <li><a className={PageIsActive("emr")} href="/emr">EMR Deployment & Support</a></li>
              <li><a className={PageIsActive("network")} href="/network">Computer Network</a></li>
            </ul>
          </li>
          <li className="NavBar-li"><a className={PageIsActive("about")} href="/about">About Us</a></li>
          <li className="NavBar-li"><a className={PageIsActive("contact")} href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="CompanyInfo">
        <div id="CompanyInfo" className="CompanyInfoContent">
          <img id="MJX_Img" src={require("./img/MJXTitle.png")} alt="" />
          <div id="MJX_Title">
            <h1 className="MJX_TitleText">MJX IT Solutions</h1>
            <h3 className="MJX_TitleText">IT Specialists You Can Trust</h3>
          </div>
        </div>
      </div>

      <div id="PageContent">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/emr" element={<EMR />} />
            <Route path="/network" element={<Network />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className="CompanyInfo">
        <div id="SiteFoot" className="CompanyInfoContent">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/contact">Careers</a></li>
          </ul>
          <ul>
            <li><a href="/contact">Support</a></li>
            <li><a href="/contact">New Flashes</a></li>
          </ul>
          <ul>
            <li><a href="">Follow us on Twitter</a></li>
            <li><a href="">Like us on Facebook</a></li>
            <li><a href="/contact">Join our team</a></li>
            <li><a href="/contact">Give us your feedback</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function PageIsActive(Page_ID) {

  let url = window.location.pathname.slice(1);

  if ((url === "emr" || url === "network") && Page_ID === "service") {
    return "NavBarActive";
  }

  return Page_ID === (url.length > 0 ? url : "home") ? "NavBarActive" : "";

}

export default MJX_IT_Solutions;
