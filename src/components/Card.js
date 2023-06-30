import React from "react";

const Card = ({ id, likeCount, message }) => {

  return (
    <section>
      <p>{message}</p>
      <p>{likeCount}</p>
      <button className="like-button" onClick={onUpdateLikes}>❤️</button>
    </section>
  );
};

export default Card;
