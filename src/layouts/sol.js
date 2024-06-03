import { Link } from "react-router-dom";
import solImage from "../assets/images/logos/sol.png";

const Sol = () => {
  const SolStyle = {
    position: "absolute",
    width: "23.02px",
    height: "23.02px",
    top: "8px",
    left: "15px",
    borderRadius: "2px"
  };

  
  return (
    <Link to="/">
      <img src={solImage} alt="Logo" style={SolStyle} />
    </Link>
  );
};

export default Sol;