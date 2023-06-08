import { categories } from "src/constants/ListCategories";

const ListGenre = ({ handleFilter, isActive, handlePage }) => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-2 md:gap-6">
        {categories.map((data) => (
          <li
            key={data.id}
            onClick={() => {
              handleFilter(data.id);
              handlePage(1);
            }}
            className={`text-lg font-bold px-[6px] whitespace-nowrap cursor-pointer transition-all duration-150 ease-in-out h-10 ${
              isActive === data.id ? `border-b-4 border-grn` : null
            }`}
          >
            {data.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ListGenre;
