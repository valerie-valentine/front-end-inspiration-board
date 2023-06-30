import React from "react";

const Card = ({ id, likeCount, message }) => {
  return (
    <section>
      <p>{message}</p>
      <p>{likeCount}</p>
    </section>
  );
};

export default Card;
