import { Link } from "react-router-dom";

import Button from "src/components/atoms/Button";

import Logo from "src/assets/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center absolute w-full p-4 md:px-32 lg:px-44 z-10">
      <Link to={`/`}>
        <img src={Logo} alt="logo" className="w-40" />
      </Link>
      <Link>
        <Button label="Login" />
      </Link>
    </header>
  );
};

export default Header;
