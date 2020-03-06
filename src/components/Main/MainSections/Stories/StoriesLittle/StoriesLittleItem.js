import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import MainSocial from "../../../MainSocial/MainSocial";
import ReadMoreBtn from "../../../Btn/ReadMoreBtn";

import "./storieslittleitem.css";

const StoriesLittleItem = ({ id, image, category, year, title, toggleLike, isLiked }) => {
  return (
    <div className="stories-little__item">
      <img className="stories-little__item-img" src={image} alt={title} />

      <MainSocial 
            isLiked={isLiked} 
            toggleLike={toggleLike}
            id={id}/>

      <div className="stories-little__item-cat">
        <span>{category}</span>
        <span>{year}</span>
      </div>

      <Link to={`/foodsPage/${id}`} className="stories-little__item-title">
        {title}
      </Link>

      <ReadMoreBtn />
    </div>
  );
};

StoriesLittleItem.propTypes = {
  category: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default StoriesLittleItem;
