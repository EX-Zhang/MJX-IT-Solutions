import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { isMobileOnly } from 'react-device-detect';

import Home from './home';
import Service, { EMR, Network } from './service';
import About from './about';
import Contact from './contact';

import './css/mjx.it.solutions.css';

var Active_Page = new Set(["home"]);

function MJX_IT_Solutions() {

  SetActivePage();

  return (
    <div>
      <div id="MainDiv">
        <MJX_IT_Solutions_Header />
        <div id="PageContent">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/emr" element={<EMR />} />
              <Route path="/network" element={<Network />} />
            </Routes>
          </BrowserRouter>
        </div>
        <MJX_IT_Solutions_Bottom />
      </div>
    </div>
  );
}

function PageIsActive(Page_ID) {

  return Active_Page.has(Page_ID) ? "NavBarActive" : "";

}

function SetActivePage() {

  let url = window.location.pathname.slice(1);

  if (url.length == 0) {
    url = "home";
  }

  Active_Page.clear();

  Active_Page.add(url);

  if (!isMobileOnly && (url === "emr" || url === "network")) {

    Active_Page.add("service");

  }

}

function MJX_IT_Solutions_Header() {

  if (isMobileOnly) {

    return (

      <div>

        <div id="NavBar">
          <ul className="NavBar-ul">
            <li className="NavBar-li-mobile"><a className={PageIsActive("home")} href="/">Home</a></li>
            <li className="NavBar-li-mobile"><a className={PageIsActive("service")} href="/service">Services</a></li>
          </ul>
          <ul className="NavBar-ul">
            <li className="NavBar-li-mobile"><a className={PageIsActive("about")} href="/about">About Us</a></li>
            <li className="NavBar-li-mobile"><a className={PageIsActive("emr")} href="/emr">EMR Deployment & Support</a></li>
          </ul>
          <ul className="NavBar-ul">
            <li className="NavBar-li-mobile"><a className={PageIsActive("contact-us")} href="/contact-us">Contact Us</a></li>
            <li className="NavBar-li-mobile"><a className={PageIsActive("network")} href="/network">Computer Network</a></li>
          </ul>
        </div>

        <div className="CompanyInfo">
          <div id="CompanyInfo" className="CompanyInfoContent">
            <img id="MJX_Img" src={require("./img/MJXTitle.png")} alt="" />
            <div id="MJX_Title_mobile">
              <h1>MJX IT Solutions</h1>
              <h3>IT Specialists You Can Trust</h3>
            </div>
          </div>

        </div>

      </div>

    );

  }

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
          <li className="NavBar-li"><a className={PageIsActive("contact-us")} href="/contact-us">Contact Us</a></li>
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
    </div>
  );
}

function MJX_IT_Solutions_Bottom() {

  if (isMobileOnly) {

    return (
      <div className="CompanyInfo">
        <div id="SiteFoot_mobile" className="CompanyInfoContent">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/contact-us">Careers</a></li>
            <li><a href="/contact-us">Support</a></li>
            <li><a href="/contact-us">New Flashes</a></li>
          </ul>
          <ul>
            <li><a href="">Follow us on Twitter</a></li>
            <li><a href="">Like us on Facebook</a></li>
            <li><a href="/contact-us">Join our team</a></li>
            <li><a href="/contact-us">Give us your feedback</a></li>
          </ul>
        </div>
      </div>
    );


  }

  return (
    <div className="CompanyInfo">
      <div id="SiteFoot" className="CompanyInfoContent">
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/service">Services</a></li>
          <li><a href="/contact-us">Careers</a></li>
        </ul>
        <ul>
          <li><a href="/contact-us">Support</a></li>
          <li><a href="/contact-us">New Flashes</a></li>
        </ul>
        <ul>
          <li><a href="">Follow us on Twitter</a></li>
          <li><a href="">Like us on Facebook</a></li>
          <li><a href="/contact-us">Join our team</a></li>
          <li><a href="/contact-us">Give us your feedback</a></li>
        </ul>
      </div>
    </div>
  );
}

export default MJX_IT_Solutions;
