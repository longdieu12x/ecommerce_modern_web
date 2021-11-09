import React from "react";
import Announcement from "../components/announce/Announcement";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";

const Home: React.FC<{}> = () => {
  return (
    <div className="home">
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};
export default Home;
