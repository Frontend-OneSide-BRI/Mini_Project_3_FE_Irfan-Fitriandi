import SearchHero from "./SearchHero";
import Header from "src/components/molecules/Header";
import Footer from "src/components/molecules/Footer";
import MovieListbyGenre from "./MovieListbyGenre";

const MoviesPage = () => {
  return (
    <>
      <Header />
      <SearchHero />
      <MovieListbyGenre />
      <Footer />
    </>
  );
};

export default MoviesPage;
