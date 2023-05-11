import React from "react";
import Header from "./Header";
import FoodSwipper from "./FoodSwipper";
import Body from "./Body";
import Footer from "./Footer";
import Subscription from "./Subscription";

const Home = () => {
  return (
    <div>
      <Header />
      <FoodSwipper />
      <Body />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;
