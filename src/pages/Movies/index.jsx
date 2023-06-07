import Header from "src/components/molecules/Header";

import Heroimg from "src/assets/bg-movies.jpg";
import SearchBox from "src/components/molecules/SearchBox";

const MoviesPage = () => {
  return (
    <>
      <Header />
      <section
        id="hero-movies"
        className="h-[100vh] w-full flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.96)), url(${Heroimg})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center">Welcome.</h1>
        <h3 className="mb-5 text-lg md:text-xl font-bold text-center">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
        <SearchBox />
      </section>
      <nav >
        <ul className="flex justify-center items-center gap-2 md:gap-6">
          <li
            className={`text-lg font-bold border-b-4 px-[6px] border-grn whitespace-nowrap`}
          >
            Action
          </li>
          <li
            className={`text-lg font-bold border-b-4 px-[6px] border-grn whitespace-nowrap`}
          >
            Adventure
          </li>
          <li
            className={`text-lg font-bold border-b-4 px-[6px] border-grn whitespace-nowrap`}
          >
            Animation
          </li>
          <li
            className={`text-lg font-bold border-b-4 px-[6px] border-grn whitespace-nowrap`}
          >
            Sci-Fi
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MoviesPage;
