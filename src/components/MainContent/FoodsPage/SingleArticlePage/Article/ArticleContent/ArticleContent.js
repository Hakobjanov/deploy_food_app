import React from "react";

import "./articlecontent.css";

import ArticleSocial from "./ArticalSocial/ArticleSocial";
import ArticleText from "./ArticleText/ArticleText";
import ArticleTags from "./ArticleTags/ArticleTags";
import CommentSection from "./CommentSection/CommentSection";

const ArticleContent = ( {
  image2,
  subTitle2,
  subTitle1,
  p1,
  p2,
  author,
  addPost,
  comments
} ) => {
  return (
    <div className="articleContent">
      <ArticleSocial />
      <ArticleText
        image2={image2}
        subTitle1={subTitle1}
        subTitle2={subTitle2}
        p1={p1}
        p2={p2}
        author={author}
      />

      <ArticleTags />
      <CommentSection 
        addPost={addPost}
        comments={ comments }
         />
    </div>
  );
};

export default ArticleContent;
