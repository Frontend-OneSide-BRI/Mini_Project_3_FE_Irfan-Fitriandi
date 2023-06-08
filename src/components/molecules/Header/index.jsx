import { Link } from "react-router-dom";

import Logo from "src/assets/logo.png";
import AuthButton from "../AuthButton";

const Header = ({ button = true }) => {
  return (
    <header className="flex justify-between items-center absolute w-full p-4 md:px-32 lg:px-44 z-10">
      <Link to={`/`}>
        <img src={Logo} alt="logo" className="w-40" />
      </Link>
      {button ? <AuthButton /> : nul}
    </header>
  );
};

export default Header;
