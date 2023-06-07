const HomeContent = ({ id, reverse, title, desc, frame, video }) => {
  return (
    <section
      id={id}
      className={`min-h-[50vh] flex ${
        reverse
          ? `flex-col-reverse md:flex-row-reverse`
          : `flex-col md:flex-row`
      } justify-center items-center p-10 border-t-8 border-acc`}
    >
      <div>
        <h2 className="mb-5 text-4xl md:text-6xl font-bold">{title}</h2>
        <p className="mb-5 text-base md:text-md">{desc}</p>
      </div>
      <div className="relative">
        <img src={frame} alt={title} />
        <div
          className={`absolute ${
            reverse ? `top-[9%] left-[17%]` : `top-[20%] left-[12%]`
          } z-[-1]`}
        >
          <video autoPlay playsInline muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
