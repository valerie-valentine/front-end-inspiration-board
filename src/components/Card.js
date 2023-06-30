import React from "react";

const Card = ({ id, likeCount, message, onUpdateLikes }) => {
  const handleLikeClick = () => {
    onUpdateLikes(id);
  };

  return (
    <section>
      <p>{message}</p>
      <p>{likeCount}</p>
      <button className="like-button" onClick={handleLikeClick}>
        🩷
      </button>
    </section>
  );
};

export default Card;
