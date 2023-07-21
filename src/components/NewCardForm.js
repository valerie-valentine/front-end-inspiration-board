import React from "react";
import { useState } from "react";
import './NewCardForm.css';

const NewCardForm = ({ createNewCard }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      message: message,
      likesCount: 0,
    };

    createNewCard(newCard); //newCard.boardId
    setMessage("");
  };

  return (
    <div>
      {/* <h1 className="create-card-label">Create New Card</h1> */}
      <form onSubmit={handleSubmit} className="new-card-form">
      <h1 className="create-card-label">Create New Card</h1>
        <section>
          {/* <label htmlFor="message" className="message-label">Message:</label> */}
          <input
            type="text"
            id="message"
            name="message"
            maxLength={40}
            onChange={handleMessageChange}
            value={message}
            required
            className="message-field"
            placeholder="Enter a message"
          ></input>
          {message.length > 39 && <p>Please limit characters to under 40.</p>}
          <div>
            <input type="submit" value="Create new Card" id="create-button"></input>
          </div>
        </section>
      </form>
    </div>
  );
};

export default NewCardForm;


