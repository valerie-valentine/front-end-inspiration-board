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
    <div className="create-board-button">
      {/* <h1 className="create-board-label">Create New Board</h1> */}
      {isBoardFormVisible && (
        <button onClick={handleVisibilityButton} className="create-button">Create New Board</button>
      )}
      <form
        className={`visibility-button ${
          isBoardFormVisible ? "hidden" : "visible"
        }`}
        onSubmit={handleSubmit}
      >
        <section className="board-form">
          <div className="card-form-inputs">
            <div className="title-owner">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              maxLength={40}
              id="title"
              name="title"
              onChange={handleTitleChange}
              value={title}
              required
              className="form-field"
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
              className="form-field"
            ></input>
            {owner.length > 39 && <p>Please limit characters to under 40.</p>}
            </div>
            <div className="image-selector">
            <label htmlFor="image">Choose an image:</label>
            <select name="images" id="images" onClick={handleImageSelect} className="image-form-field">
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
            </div>
            {/* <div> */}
              {/* <p> */}
                {/* Preview: {title} - {owner} */}
              {/* </p> */}
            {/* </div> */}
            <input type="submit" value="Add a Board"></input>
            <button onClick={handleVisibilityButton}>Hide Create Board Form</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default NewBoardForm;
