import Header from "src/components/molecules/Header";

import Heroimg from "src/assets/bg-movies.jpg";
import SearchBox from "src/components/molecules/SearchBox";
import ListCategory from "src/components/molecules/ListCategory";
import { useState } from "react";

const MoviesPage = () => {
  const [category, setCategory] = useState(0);

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
      <ListCategory handleFilter={setCategory} />
    </>
  );
};

export default MoviesPage;
