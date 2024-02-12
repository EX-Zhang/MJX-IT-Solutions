import './css/service.css';

function Service() {
  document.title = "Services | MJX IT Solutions Inc.";
  return (
    <div className="PageContent">
      <div id="Service">
        <h1>Managed Services</h1>
        <p>Resolute can manage, advise and maintain all of your technology so you can focus on building your business. We are able to resolve most of the issues remotely or on-site within the same day or the next day. </p>
      </div>
    </div>
  );
}

function EMR() {
  document.title = "EMR System | MJX IT Solutions Inc.";
  return (
    <div className="PageContent">
      <div id="EMR">
        <h1>EMR Transition & Support</h1>
        <p>Whether you are implementing a new EMR, switching EMR vendors, or need support with your existing EMR solution, we can provide you with the support and guidance you need!</p>
        <h2>We like technology — but we love results.</h2>
        <p>
          We takes an ACUTE approach to system design:<br /><br />
          <b>Assess:</b> Audit existing systems, identify gaps, and suggest solutions.<br /><br />
          <b>Collaborate:</b> Work with physicians and staff to understand where you want to go and how we can get you there.<br /><br />
          <b>Undo:</b> Reconsider IT workflow and propose simple alternatives.<br /><br />
          <b>Tailor:</b> Design and implement a custom-fit IT solution that meets your needs.<br /><br />
          <b>Empower:</b> Provide the training and ongoing support necessary to ensure success.
        </p>
      </div>
    </div>
  );
}

function Network() {
  document.title = "Networking | MJX IT Solutions Inc.";
  return (
    <div className="PageContent">
      <div id="Network">
        <h1>Computer Network Design & Deployment</h1>
        <p>At MJX IT Solutions, we take care to provide our customers high quality IT services personalized for their unique business needs. Be it a dental clinic, a veterinary hospital, lawyers, real estate agents, our staff is well experienced in a variety of industries. We help you concentrate on your core business and leave the technology to professional, knowledgeable and courteous staff.</p>
      </div>
    </div>
  );
}


export default Service;

export { EMR, Network };
