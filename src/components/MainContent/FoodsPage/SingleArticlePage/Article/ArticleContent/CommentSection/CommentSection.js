import React from "react";
import Comment from "./Comment/Comment";

import "./commentsection.css";

const CommentSection = ( { addPost, comments } ) => {
  let newCommentText = React.createRef();
  let commentName = React.createRef();
  let commentsCount = comments.length;
  

  let addNewPost = (e) => {
    let name = commentName.current.value;
    let comment = newCommentText.current.value;
    if (name === "" || comment === "") {
    } else {
      addPost(name, comment);
      commentName.current.value = "";
      newCommentText.current.value = "";
    }
    //e.preventDefault();
  }; 

  return (
    <div className="comment-section">
      <div className="comments">{commentsCount} comments</div>
      <div className="leave-a-comment">
        <div className="leave-a-comment__title">Leave a comment</div>

        <form action="/" method="post" className="form">
          <div className="form__group">
            <label for="input-name" className="form__label">
              Your name *
            </label>
            <input
              ref={commentName}
              id="input-name"
              type="text"
              className="form__input"
              required
            />
          </div>
          <div className="form__group">
            <label for="input-mail" className="form__label">
              Your e-mail adress *
            </label>
            <input
              id="input-mail"
              type="text"
              className="form__input"
              required
            />
          </div>
          <div className="form__group">
            <label for="input-site" className="form__label">
              Your website
            </label>
            <input id="input-site" type="text" className="form__input" />
          </div>

          <div className="form__group">
            <label for="input-text" className="form__label">
              Your comment
            </label>
            <textarea
              ref={newCommentText}
              className="form__textarea"
              name=""
              id="input-text"
            ></textarea>
          </div>

          <div className="comment-btn">
            <button
              className="btn"
              type="submit"
              onClick={(e) => addNewPost(e)}
            >
              POST COMMENT
            </button>
          </div>
        </form>
      </div>
        {
            comments.map( ( { id, name, comment } ) => <Comment key={ id } name={ name } comment={ comment } /> )
        }
      
    </div>
  );
};

export default CommentSection;
