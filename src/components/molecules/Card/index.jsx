import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({ title, overview, date, poster, id_movie }) => {
  return (
    <Link
      to={`/movie/${id_movie}`}
      className="group relative block bg-black rounded-md h-[500px]"
    >
      <img
        alt={title}
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`}
        className="absolute inset-0 max-h-full w-full object-cover opacity-80 transition-all group-hover:opacity-30 rounded-md"
      />
      <div className="relative p-[5%] rounded-md flex flex-col justify-between h-full">
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex flex-col justify-between">
          <p className="text-sm text-white line-clamp-[10]">{overview}</p>

          <p className="text-base font-bold text-white text-center mt-6">
            {moment(date).format("DD MMMM YYYY")}
          </p>
        </div>
        <div className="bg-black -m-[6%] p-4 h-[20%]">
          <h3 className="text-xl font-bold uppercase tracking-wide text-grn line-clamp-2 text-center">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
