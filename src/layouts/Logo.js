import { Link } from "react-router-dom";
import logoImage from "../assets/images/logos/logo.png";

const Logo = () => {
  const logoStyle = {
    width: '137.83px',
    height: '31px',
    top: '17px',
    left: '23px',
    gap: '0px',
    opacity: '0px'
  };

  
  return (
    <Link to="/">
      <img src={logoImage} alt="Logo" style={logoStyle} />
    </Link>
  );
};

export default Logo;
