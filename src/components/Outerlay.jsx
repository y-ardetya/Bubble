import "./sass/Outerlay.scss";
import animationData from "../assets/scroll_down.json";
import Lottie from "react-lottie";

const Outerlay = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className="kontener">
      <div className="tek">
        <h1>_Yon.Dev</h1>
      </div>
      <div className="tekk">
        <h1>Built With Love && R3F</h1>
      </div>
      <div className="scroll">
        <Lottie options={options} height={100} width={100}></Lottie>
      </div>
    </div>
  );
};

export default Outerlay;
