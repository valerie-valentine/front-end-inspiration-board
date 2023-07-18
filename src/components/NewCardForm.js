import React from "react";
import { useState } from "react";

const NewCardForm = ({ createNewCard }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      message: message,
      likeCount: 0,
    };

    createNewCard(newCard); //newCard.boardId
    setMessage("");
  };

  return (
    <div>
      <h1>Create New Card</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            name="message"
            maxLength={40}
            onChange={handleMessageChange}
            value={message}
            required
          ></input>
          {message.length > 39 && <p>Please limit characters to under 40.</p>}
          <div>
            <p>Preview: {message}</p>
          </div>
          <div>
            <input type="submit" value="Add a Card"></input>
          </div>
        </section>
      </form>
    </div>
  );
};

export default NewCardForm;
