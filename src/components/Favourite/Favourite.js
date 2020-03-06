import React from "react";
import FoodPageArticles from "../MainContent/FoodsPage/FoodPageContent/FoodPageContent/FoodPafeArticles/FoodPageArticles";
import Title from "../Title/Title";

import "./favourite.css";
import SideBar from "../MainContent/FoodsPage/FoodPageContent/SideBar/SideBar";
import { Animated } from "react-animated-css";

const Favourite = ( { match, foodPageArticlesData, filterFn, toggleLike } ) => {
  return (
    <div className="container">
      <Animated
        animationIn="heartBeat"
        animationInDuration={2000}
        isVisible={true}>
        <div className="favoutrite-title">
          <Title title="THIS ARTICLES I LIKE MORE THAN OHTERS" />
        </div>
      </Animated>

      <div className="content">
        <FoodPageArticles
          foodPageArticlesData={foodPageArticlesData}
          filterFn={filterFn}
          toggleLike={toggleLike}
        />

        <SideBar />
      </div>
    </div>
  );
};

export default Favourite;
