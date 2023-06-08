import { useParams } from "react-router-dom";
import Button from "src/components/atoms/Button";
import Loading from "src/components/atoms/Loading";
import Footer from "src/components/molecules/Footer";
import Header from "src/components/molecules/Header";
import { useGetDetailMovieQuery } from "src/services/apiReq";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetDetailMovieQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return alert(error.message);
  }

  console.log(data);
  return (
    <>
      <Header />
      <section
        id="hero-movies"
        className="min-h-[100vh] w-full relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.96)), url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <div className="flex flex-col items-center gap-5 md:flex-row py-24 px-16 md:p-32">
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`}
            alt={data.title}
            className="rounded-xl shadow-xl"
          />
          <div className="flex items-center md:items-start flex-col gap-10 -mx-8 text-justify md:mx-0">
            <div className="flex items-center md:items-start flex-col">
              <h1 className="font-semibold text-2xl md:text-4xl">
                {data.title}
              </h1>
              <div className="flex items-center gap-2 text-xs">
                {data.release_date} &#8226;
                <span className="outline outline-1 p-[1px] text-[0.7rem]">
                  {data.production_companies[0].origin_country}
                </span>{" "}
                &#8226; {data.runtime} minutes
              </div>
            </div>
            <p>{data.overview}</p>
            <Button classname={`bg-pink-500 hover:bg-pink-800`} label={`jasdads`} />
          </div>
        </div>
        <div className="italic md:text-lg text-slate-300 font-medium text-center w-full">
          {data.tagline}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MovieDetailPage;
