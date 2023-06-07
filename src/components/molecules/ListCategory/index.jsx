import { categories } from "src/constants/ListCategories";

const ListCategory = ({ handleFilter }) => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-2 md:gap-6">
        {categories.map((data) => (
          <li
            key={data.id}
            onClick={()=>handleFilter(data.id)}
            className={`text-lg font-bold border-b-4 px-[6px] border-grn whitespace-nowrap cursor-pointer`}
          >
            {data.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ListCategory;
