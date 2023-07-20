import React from "react";
import "./Card.css";

const Card = ({ id, likesCount, message, onUpdateLikes, onDeleteCard }) => {
  const handleLikeClick = (isLike) => {
    onUpdateLikes(id, isLike);
  };

  const handleDeleteCard = () => {
    onDeleteCard(id);
  };

  return (
    <section className="card">
      <p>{message}</p>
      <p className="likes-tracker">Likes: {likesCount}</p>
      <div className="card-button-container">
        <button
          className="reaction-button"
          onClick={() => handleLikeClick(true)}
        >
          🩷
        </button>
        <button
          className="reaction-button"
          onClick={() => handleLikeClick(false)}
        >
          👎
        </button>
        <button className="reaction-button" onClick={handleDeleteCard}>
          🗑️
        </button>
      </div>
    </section>
  );
};

export default Card;
