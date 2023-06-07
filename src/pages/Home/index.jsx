import Hero from "src/pages/Home/Hero";
import Footer from "src/components/molecules/Footer";
import Header from "src/components/molecules/Header";
import HomeContent from "src/components/molecules/HomeContent";

import TVImg from "src/assets/tv.png";
import DevicePileImg from "src/assets/device-pile.png";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomeContent
        id={`tv`}
        title={`Enjoy on your TV`}
        desc={`Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.`}
        reverse={false}
        frame={TVImg}
        video={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v`}
      />
      <HomeContent
        id={`device-pile`}
        title={`Watch everywhere`}
        desc={`Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.`}
        reverse={true}
        frame={DevicePileImg}
        video={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-id.m4v`}
      />
      <Footer />
    </>
  );
};

export default HomePage;
