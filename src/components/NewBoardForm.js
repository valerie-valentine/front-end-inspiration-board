import React from "react";
import { useState } from "react";
import "./NewBoardForm.css";

const NewBoardForm = ({ createNewBoard }) => {
  // const [newBoard, setNewBoard] = useState({"boardId": 0, "title": "", "owner": ""});
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };

  const handleVisibilityButton = (event) => {
    event.preventDefault();
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBoard = {
      title: title,
      owner: owner,
    };
    createNewBoard(newBoard);
    setTitle("");
    setOwner("");
  };

  // if title.link > 40 -> ClassName (displaying a class dependent on condition - teranary)

  return (
    <div>
      <h1>Create New Board</h1>
      {!isBoardFormVisible && (
        <button onClick={handleVisibilityButton}>Show Create Board Form</button>
      )}
      <form
        className={`visibility-button ${
          isBoardFormVisible ? "visible" : "hidden"
        }`}
        onSubmit={handleSubmit}
      >
        <section>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              maxLength={40}
              id="title"
              name="title"
              onChange={handleTitleChange}
              value={title}
              required
            ></input>
            {title.length > 39 && <p>Please limit characters to under 40.</p>}
            <label htmlFor="owner">Owner:</label>
            <input
              type="text"
              maxLength={40}
              id="owner"
              name="owner"
              onChange={handleOwnerChange}
              value={owner}
              required
            ></input>
            {owner.length > 39 && <p>Please limit characters to under 40.</p>}
            <div>
              <p>
                Preview: {title} - {owner}
              </p>
            </div>
            <input type="submit" value="Add a Board"></input>
          </div>
        </section>
        <button onClick={handleVisibilityButton}>Hide Create Board Form</button>
      </form>
    </div>
  );
};

export default NewBoardForm;
