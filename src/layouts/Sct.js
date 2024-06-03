import { Link } from "react-router-dom";
import sctImage from "../assets/images/logos/sct.png";

const Sct = () => {
  const SctStyle = {
    position: "absolute",
    width: "23.02px",
    height: "23.02px",
    top: "8px",
    left: "15px",
    borderRadius: "2px"
  };

  
  return (
    <Link to="/">
      <img src={sctImage} alt="Logo" style={SctStyle} />
    </Link>
  );
};

export default Sct;