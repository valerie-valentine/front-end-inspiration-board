import React from "react";
import { useState } from "react";
import "./NewBoardForm.css";

const NewBoardForm = ({ onBoardSubmit }) => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [customImage, setCustomImage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };

  const handleCustomerImage = (event) => {
    setCustomImage(event.target.value);
  };

  const handleVisibilityButton = (event) => {
    event.preventDefault();
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBoard = {
      title: title,
      owner: owner,
      cards: [],
      image: selectedImage === "custom" ? customImage : selectedImage,
    };

    onBoardSubmit(newBoard);
    setTitle("");
    setOwner("");
  };

  return (
    <div className="board-form">
      <h1 className="create-board-label">Create New Board</h1>
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
            <label htmlFor="image">Choose an image:</label>
            <select name="images" id="images" onClick={handleImageSelect}>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="sloth">Sloth</option>
              <option value="redPanda">Red Panda</option>
              <option value="sailorMoon">Sailor Moon</option>
              <option value="custom">Custom</option>
            </select>
            {selectedImage === "custom" && (
              <div>
                <label htmlFor="custom">Image Url:</label>
                <input
                  type="text"
                  id="custom"
                  name="custom"
                  onChange={handleCustomerImage}
                  value={customImage}
                  required
                ></input>
              </div>
            )}
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
