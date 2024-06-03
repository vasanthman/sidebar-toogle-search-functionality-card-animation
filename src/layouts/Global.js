import { Link } from "react-router-dom";
import globalImage from "../assets/images/logos/global.png";

const Global = () => {
  const GlobalStyle = {
    position: "absolute",
    width: "23.02px",
    height: "23.02px",
    top: "8px",
    left: "15px",
    borderRadius: "2px"
  };

  
  return (
    <Link to="/">
      <img src={globalImage} alt="Logo" style={GlobalStyle} />
    </Link>
  );
};

export default Global;