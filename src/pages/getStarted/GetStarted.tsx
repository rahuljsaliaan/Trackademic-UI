export default function GetStarted() {
  return (
    <div className="get-started-container">
      <div className="get-started-logo-container">
        <img src="/src/assets/logo/logo-light.svg" />
      </div>
      <div className="get-started-image-container">
        <img src="/src/assets/images/getStartedImage.svg" />
      </div>
      <div className="get-started-content-container">
        <div className="get-started-content-header">
          <h1>Hey Dude! Ready to Track Your Academics?</h1>
        </div>
        <div className="get-started-content-paragraph">
          <p>
            Say goodbye to old-school ways and hello to real-time updates and
            smooth sailing through your school year.
          </p>
        </div>
      </div>
      <div className="get-started-button-container">
        <button>Ready, set, go!</button>
      </div>
    </div>
  );
}
