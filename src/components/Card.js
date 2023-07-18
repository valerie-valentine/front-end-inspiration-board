import React from "react";

const Card = ({ id, likesCount, message, onUpdateLikes }) => {
  // console.log(likeCount);
  // console.log(id);
  // console.log(message);
  const handleLikeClick = () => {
    onUpdateLikes(id);
  };

  return (
    <section>
      <p>{message}</p>
      <p>{likesCount}</p>
      <button className="like-button" onClick={handleLikeClick}>
        🩷
      </button>
    </section>
  );
};

export default Card;
