import Card from "src/components/molecules/Card";

const CardList = ({ data = [] }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[1200px] mx-auto px-4 py-6">
      {data.map((data, idx) => (
        <Card
        key={idx}
        id_movie={data.id}
        title={data.title}
        date={data.release_date}
        overview={data.overview}
        poster={data.poster_path}
         />
      ))}
    </section>
  );
};

export default CardList;
