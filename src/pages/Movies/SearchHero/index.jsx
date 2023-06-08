import { useState } from "react";

import { useGetMovieByNameQuery } from "src/services/apiReq";

import Heroimg from "src/assets/bg-movies.jpg";
import Loading from "src/components/atoms/Loading";
import SearchBox from "src/components/molecules/SearchBox";

const SearchHero = () => {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError, error } = useGetMovieByNameQuery(search);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return alert(error.data.status_message)
  }

  return (
    <section
      id="hero-movies"
      className="h-[100vh] w-full relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.96)), url(${Heroimg})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <div className="absolute top-[30%] flex flex-col justify-center items-center w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Welcome.</h1>
        <h3 className="mb-5 text-lg md:text-xl font-bold text-center">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
        <SearchBox
          placeholder={`Search for a movies. . .`}
          handleSearch={(e) => setSearch(e.target.value)}
          isSearch={search.length !== 0}
          data={data.results}
          noData={data.results.length === 0}
        />
      </div>
    </section>
  );
};

export default SearchHero;
