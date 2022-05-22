import "@lottiefiles/lottie-player";
import "./App.css";

function NotFound404() {
    const playerStyle1 = {
        width: "90%",
        height: "100%",
      };
  return (
    <div className="spinner-item">
      <div
        className="alert alert-danger alert-dismissible fade show fixed-top"
        role="alert"
      >
        <strong>- A problem has occurred - Sorry, the page you are looking for could not be found. 
            <br/> You can return to Homepage by clicking <a href="/">Here.</a>
        </strong>
        <br />
      </div>
      <lottie-player
        src="https://assets10.lottiefiles.com/packages/lf20_u1xuufn3.json"
        background="transparent"
        style={playerStyle1}
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}
export default NotFound404;
