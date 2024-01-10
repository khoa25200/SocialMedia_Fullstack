import "./Loading.css";

function Loading() {
  return (
    <div className="loader">
      <i className="loader-el"></i>
      <i className="loader-el"></i>
      <div className="main-text">
        <br />
        Waiting Connect to Server 😘
        <br />
        <span className="sub-text">Because Using <a href="http://render.com" target="_blank">Render.com</a> to Deploy (free), so VERY long times for Loading the first time</span>
        <br />
        <br />
        <span className="f5-text"> 👉 Press <b>F5/reload</b> the page if the process takes too long</span>
      </div>
    </div>
  );
}

export default Loading;
