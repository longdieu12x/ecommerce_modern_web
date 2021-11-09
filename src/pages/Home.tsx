import React from "react";
import Categories from "../components/category/Categories";
import Announcement from "../components/announce/Announcement";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import Products from "src/components/products/Products";

const Home: React.FC<{}> = () => {
  return (
    <div className="home">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};
export default Home;
