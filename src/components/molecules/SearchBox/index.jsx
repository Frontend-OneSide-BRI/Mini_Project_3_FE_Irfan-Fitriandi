import { Link } from "react-router-dom";
import moment from "moment/moment";

import Button from "src/components/atoms/Button";
import Input from "src/components/atoms/Input";

const SearchBox = ({
  placeholder,
  handleSearch,
  isSearch = true,
  data = [],
  noData,
}) => {
  return (
    <div className="relative space-y-2 max-w-[270px]">
      <div className="bg-wht rounded-md flex">
        <Input placeholder={placeholder} onChange={handleSearch} />
        <Button label={`Search`} classname={`rounded-md`} />
      </div>
      <div
        className={`flex flex-col gap-2 rounded-md bg-wht text-blk p-2 w-full ${
          isSearch ? `block` : `hidden`
        }`}
      >
        {noData ? (
          <p className="text-center text-xs italic text-slate-500">
            Empty Search: No data matches found.
          </p>
        ) : (
          data.slice(0, 4).map((data) => (
            <Link
              key={data.id}
              to={`/movie/${data.id}`}
              className="flex justify-between gap-2 w-full"
            >
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`}
                alt={data.title}
                className="w-10"
              />
              <div className="w-[80%]">
                <div className="flex justify-between whitespace-nowrap">
                  <h6 className="font-semibold truncate max-w-[60%]">
                    {data.title}
                  </h6>
                  <span>{moment(data.release_date).format("YYYY")}</span>
                </div>
                <p className="line-clamp-2 text-xs italic text-slate-500">
                  {data.overview}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBox;
