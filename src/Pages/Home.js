import React from "react";
import Carousal from "../Components/Carousal";
import FeaturedItems from "../Components/FeaturedItems";
import NewsLetter from "../Components/NewsLetter";
const Home = () => {
    return (
        <div className="container-fluid">
            <Carousal />
            <FeaturedItems />
            <NewsLetter />
        </div>
    );
}

export default Home;