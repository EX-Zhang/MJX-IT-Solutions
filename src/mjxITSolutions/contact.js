import './css/contact.css';

function Contact() {
  document.title = "Contact Us | MJX IT Solutions Inc.";
  return (
    <div className="PageContent">
      <div id="ContactUs">
        <h1>How to Contact US</h1>
        <h3>Email: <a href="mailto:dennis@mjxitsolutions.com">dennis@mjxitsolutions.com</a></h3>
        <h3>Phone: 647-283-8962</h3>
      </div>
    </div>
  );
}

export default Contact;
