import React, { Component } from "react";
import SingleFoodArticle from "./FoodPageArticles/SingleFoodArticle";
import "./foodpagearticles.css";
import LoadMoreBtn from "../../../../../Main/LoadMoreBtn/LoadMoreBtn";

class FoodsPageArticles extends Component {

  state = {
      items: 6
  };

  loadMoreFn = () => {
      this.setState( (prevState) => ({
          items: prevState.items + 3
    }) )
  }

  render() {
      const { 
          foodPageArticlesData, 
          filterFn,
          toggleLike 
        } = this.props;
    return (
      <div className="postsItems foodPageArticles">
        {foodPageArticlesData
          .filter( filterFn )
          .map( ( { id, image, category, year, title, isLiked } ) => (
            <SingleFoodArticle
              key={id}
              {...{ id, image, category, year, title, isLiked, toggleLike }}
            />
          ) ).slice(0, this.state.items)}
        <LoadMoreBtn loadMoreFn={this.loadMoreFn} />
      </div>
    );
  }
}

// const FoodsPageArticles = ({ foodPageArticlesData, filterFn, toggleLike }) => {
//   return (
//     <div className="postsItems">
//       {foodPageArticlesData
//         .filter(filterFn)
//         .map(({ id, image, category, year, title, isLiked }) => (
//           <SingleFoodArticle
//             key={id}
//             {...{ id, image, category, year, title, isLiked, toggleLike }}
//           />
//         ))}
//       <LoadMoreBtn />
//     </div>
//   );
// };

export default FoodsPageArticles;
