import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useGetMovieByGenreQuery } from "src/services/apiReq";

import Loading from "src/components/atoms/Loading";
import CardList from "src/components/organisms/CardList";
import ListGenre from "src/components/molecules/ListGenre";

const MovieListbyGenre = () => {
  const [genre, setGenre] = useState(18);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const { data, isLoading, isError, isFetching, error } =
    useGetMovieByGenreQuery({
      genres: genre,
      pages: page,
    });

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  useEffect(() => {
    page === 1
      ? setMovies(data?.results.slice(0, 20))
      : setMovies(data?.results);
  }, [page, data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return alert(error.message);
  }

  return (
    <>
      <ListGenre
        handleFilter={setGenre}
        isActive={genre}
        handlePage={setPage}
      />
      <CardList data={movies} />
      {isFetching ? (
        <div className="h-24 flex justify-center items-center">
          <AiOutlineLoading3Quarters className="animate-spin text-grn text-5xl" />
        </div>
      ) : null}
    </>
  );
};

export default MovieListbyGenre;
