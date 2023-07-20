import React from "react";
import { useState } from "react";
import "./NewBoardForm.css";
//const object {name(list options): url}

const NewBoardForm = ({ onBoardSubmit }) => {
  // const [newBoard, setNewBoard] = useState({"boardId": 0, "title": "", "owner": ""});
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  // image selected state
  // custom image state
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
      cards: [],
      //image: add image url
    };

    onBoardSubmit(newBoard);
    setTitle("");
    setOwner("");
  };

  // if title.link > 40 -> ClassName (displaying a class dependent on condition - teranary)
  //input form for dropdown
  //input form that appears for custom url when selected
  return (
    <div className="board-form">
      <h1 className="create-board-label">Create New Board</h1>
      {!isBoardFormVisible && (
        <button onClick={handleVisibilityButton} className="create-button">Create New Board</button>
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
            <button onClick={handleVisibilityButton}>Hide Create Board Form</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default NewBoardForm;
