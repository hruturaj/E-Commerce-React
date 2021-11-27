import React from "react";
import Announcement from "../../Components/Announcement/Announcement";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Announcement message="Super Deal! Free Shippingg on orders above Rs 1000!" />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
