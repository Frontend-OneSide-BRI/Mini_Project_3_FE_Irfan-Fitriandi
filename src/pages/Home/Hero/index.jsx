import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import Button from "src/components/atoms/Button";

import Iconimg from "src/assets/icon.png";
import Heroimg from "src/assets/bg-home.jpg";

const Hero = () => {
  return (
    <section
      id="hero-home"
      className="h-screen w-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${Heroimg})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <Link to={"/movies"}>
        <img
          src={Iconimg}
          alt="icon"
          className="hover:drop-shadow-[0_0_2em#469006ff] duration-300 w-52"
        />
      </Link>
      <h1 className="mb-5 text-4xl md:text-6xl font-bold">Wazzup!</h1>
      <p className="mb-5 text-sm md:text-md max-w-sm text-center">
        Enjoy exclusive Cuthless Originals as well as popular movies and TV
        shows. Watch now!
      </p>
      <Link to={"/movies"}>
        <Button
          label={
            <span className="flex items-center gap-1">
              Get Started <FaChevronRight />
            </span>
          }
        />
      </Link>
    </section>
  );
};

export default Hero;
