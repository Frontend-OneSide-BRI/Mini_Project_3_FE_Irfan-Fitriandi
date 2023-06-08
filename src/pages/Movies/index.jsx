import { useState } from "react";
import Header from "src/components/molecules/Header";

import ListCategory from "src/components/molecules/ListCategory";
import Loading from "src/components/atoms/Loading";
import SearchHero from "./SearchHero";

const MoviesPage = () => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Header />
      <SearchHero />
      <ListCategory handleFilter={setCategory} isActive={category} />
    </>
  );
};

export default MoviesPage;
