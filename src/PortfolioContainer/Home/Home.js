import React from "react";
import Profile from "../../PortfolioContainer/Home/Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
};

export default Home;
