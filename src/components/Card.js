import React from "react";
import "./Card.css";
import { useState } from "react";

const Card = ({
  id,
  likesCount,
  message,
  onUpdateLikes,
  onDeleteCard,
  onUpdateCardMessage,
}) => {
  const [editMessage, setEditMessage] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  /*The next three functions pass the component properties to methods
  brought in front from the parent component*/
  const handleLikeClick = (isLike) => {
    onUpdateLikes(id, isLike);
  };

  const handleEditMessage = () => {
    setEditMessage(!editMessage);
  };

  const handleDeleteCard = () => {
    onDeleteCard(id);
  };

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  /*These functions handle the form submission & update the properties appropriately*/
  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const newMessageText = {
      message: newMessage,
    };

    onUpdateCardMessage(id, newMessageText);
    setNewMessage("");
  };

  return (
    <section className="card">
      {!editMessage ? (
        <p>{message}</p>
      ) : (
        <form className={"edit-message-form"} onSubmit={handleMessageSubmit}>
          <input
            type="text"
            id="message"
            name="message"
            maxLength={40}
            onChange={handleMessageChange}
            value={newMessage}
            required
            className="edit-message-field"
            placeholder="Edit Card Message"
          ></input>
          <button type="submit" value="Submit" className="edit-message-button">
            Send
          </button>
        </form>
      )}
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
        <button className="reaction-button" onClick={handleEditMessage}>
          📝
        </button>
      </div>
    </section>
  );
};

export default Card;
