import logo from "../../../logo.jpg";
import animatedlogo from "./animatedlogo.module.css";



export default function ComingSoon() {
    return (
      <div className={animatedlogo.Comingsoondiv}>
        <img src={logo} className="Comingsoon-spinner" alt="comingsoonlogo"></img>
      </div>
    );
  }
  