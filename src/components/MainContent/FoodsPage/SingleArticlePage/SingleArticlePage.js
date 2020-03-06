import React, { Component } from "react";
import foodPageArticlesData, {
  getArticlesMap
} from "../FoodPageContent/FoodPageContent/FoodPafeArticles/foodPageArticlesData";
import ArticleContent from "./Article/ArticleContent/ArticleContent";
import ArticleSideBar from "./Article/ArticleSideBar/ArticleSideBar";
//import { reRenderComents } from './Article/ArticleContent/CommentSection/CommentSection'
import "./singlearticlepage.css";

class SingleArticlePage extends Component {

  state = {
    comments: [
       {id:0, name: 'Solomon Grundy', comment: 'What the hell is going on?'},
       {id:1, name: 'Solomon Grundy', comment: 'What the hell is going on?'}
    ]
  };

  addPost = ( name, comment ) => {
    const newComment = {
      id: this.state.comments.length,
      name: name,
      comment: comment
    }
    const newCommentsArr = [ ...this.state.comments, newComment ];

    const commentsInStorage = JSON.parse(localStorage.commentsInStorage || '[]');
    const newCommentInStorage = newComment;
    localStorage.commentsInStorage = JSON.stringify(newCommentInStorage)

    this.setState( { comments : newCommentsArr } );
    
  }

  render() {
    const {
      match,
      articlesMap = getArticlesMap(foodPageArticlesData)
    } = this.props
    return( 
      <div className="articlePage">
      <div className="article-intro">
        <img
          className="article-img"
          src={articlesMap[match.params.article].image}
          alt={articlesMap[match.params.article].title}
        />
        <div className="article-title">
          <div className="main-article-title">
            {articlesMap[match.params.article].title}
          </div>
          <span>Home ></span>
          <span>Foods ></span>
          <span>{articlesMap[match.params.article].category} ></span>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="article">
          <ArticleSideBar />

          <ArticleContent
            image2={articlesMap[match.params.article].image2}
            subTitle1={articlesMap[match.params.article].subTitle1}
            subTitle2={articlesMap[match.params.article].subTitle2}
            p1={articlesMap[match.params.article].p1}
            p2={articlesMap[match.params.article].p2}
            author={articlesMap[match.params.article].author}
            addPost={this.addPost}
            comments={this.state.comments}
          />
        </div>
      </div>
    </div>
    )
  }
}

// const SingleArticlePage = ({
//   match,
//   articlesMap = getArticlesMap(foodPageArticlesData)
// }) => {
//   return (
//     <div className="articlePage">
//       <div className="article-intro">
//         <img
//           className="article-img"
//           src={articlesMap[match.params.article].image}
//           alt={articlesMap[match.params.article].title}
//         />
//         <div className="article-title">
//           <div className="main-article-title">
//             {articlesMap[match.params.article].title}
//           </div>
//           <span>Home ></span>
//           <span>Foods ></span>
//           <span>{articlesMap[match.params.article].category} ></span>
//         </div>
//         <div className="overlay"></div>
//       </div>

//       <div className="container">
//         <div className="article">
//           <ArticleSideBar />

//           <ArticleContent
//             image2={articlesMap[match.params.article].image2}
//             subTitle1={articlesMap[match.params.article].subTitle1}
//             subTitle2={articlesMap[match.params.article].subTitle2}
//             p1={articlesMap[match.params.article].p1}
//             p2={articlesMap[match.params.article].p2}
//             author={articlesMap[match.params.article].author}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };


export default SingleArticlePage;
