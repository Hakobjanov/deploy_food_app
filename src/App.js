import React, { Component } from "react";

import "./common/style.css";
import "./common/reset.css";
import "./common/animate.css";

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import foodPageArticlesData from "./components/MainContent/FoodsPage/FoodPageContent/FoodPageContent/FoodPafeArticles/foodPageArticlesData.js";

import { HashRouter as Router } from 'react-router-dom'

class App extends Component {
  state = {
    foodPageArticlesData,
    category: null,
    id: 0
  };

  setCategory = (category = null) => {
    this.setState({ category });
  };

  toggleLike = id => {
    this.setState(({ foodPageArticlesData }) => {
      const i = foodPageArticlesData.findIndex(article => article.id === id);

      const foodPageArticle = {...foodPageArticlesData[i], isLiked: !foodPageArticlesData[i].isLiked};

      return {
        foodPageArticlesData: [...foodPageArticlesData.slice(0, i), foodPageArticle, ...foodPageArticlesData.slice(i + 1)]
      };
    });

    const liked = JSON.parse(localStorage.liked || "[]");
    const newLiked = liked.includes(id)
      ? liked.filter(likedId => likedId !== id)
      : [...liked, id];
    localStorage.liked = JSON.stringify(newLiked);
  };

  render() {
    const favCount = this.state.foodPageArticlesData.filter(
      article => article.isLiked
    ).length;
    return (
      <Router>
        <div className="App">
          <Header favCount={ favCount } />

          <MainContent
            foodPageArticlesData={ this.state.foodPageArticlesData }
            category={ this.state.category }
            setCategory={ this.setCategory }
            toggleLike={ this.toggleLike }
          />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
