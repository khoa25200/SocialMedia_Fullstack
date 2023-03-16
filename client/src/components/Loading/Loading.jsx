import "./Loading.css";

function Loading() {
  return (
    <div class="loader">
      <i class="loader-el"></i>
      <i class="loader-el"></i>
      <div className="main-text">
        <br />
        Waiting Connect to Server 😘
        <br />
        <span className="sub-text">Because Using <a href="http://render.com" target="_blank">Render.com</a> to Deploy (free), so VERY long times for Loading the first time</span>
      </div>
    </div>
  );
}

export default Loading;
