import React from "react";
import "./Board.css";
import cat from "../Assets/cat.avif";
import dog from "../Assets/dog.jpg";
import redPanda from "../Assets/red-panda.jpg";
import sailorMoon from "../Assets/sailor-moon-anime.gif";
import sloth from "../Assets/sloth.avif";

const images = {
  cat,
  dog,
  sloth,
  redPanda,
  sailorMoon,
};

const Board = ({ boardId, title, owner, image, onBoardSelect }) => {
  const preSelected = images.hasOwnProperty(image);

  const handleBoardSelect = () => {
    onBoardSelect(boardId);
  };

  return (
    <li onClick={handleBoardSelect} className="polaroid">
      <img
        src={preSelected ? images[image] : image}
        alt="Animal"
        className="dog-image"
      />
      <figcaption>
        <div className="board-label">
          {title} - {owner}
        </div>
      </figcaption>
    </li>
  );
};
export default Board;
