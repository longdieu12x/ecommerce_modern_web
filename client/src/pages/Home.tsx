import React from "react";
import Categories from "../components/category/Categories";
import Announcement from "../components/announce/Announcement";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import Products from "src/components/products/Products";
import Newsletter from "src/components/newsletter/Newsletter";
import Footer from "src/components/footer/Footer";

const Home: React.FC<{}> = props => {
  return (
    <div className="home">
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
