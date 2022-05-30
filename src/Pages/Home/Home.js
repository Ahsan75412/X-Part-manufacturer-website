import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import FourthBanner from "./FourthBanner";
import Info from "./Info";
import Products from "./Products";
import Reviews from "./Reviews";
import ThirdBanner from "./ThirdBanner";

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Products />
            <ThirdBanner />
            <Categories />
            <FourthBanner />
            <Reviews />
        </div>
    );
};

export default Home;
