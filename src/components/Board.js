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
  const handleBoardSelect = () => {
    onBoardSelect(boardId);
  };

  return (
    <li onClick={handleBoardSelect} className="polaroid">
      {/* <figure className="polaroid"> */}
      {/* <img
        src="https://st2.depositphotos.com/3110539/7033/v/950/depositphotos_70334905-stock-illustration-dog-samoyed-buddy-puppy-vector.jpg"
        alt="Samoyed"
        className="dog-image"
      /> */}
      <img src={images[image]} alt="Animal" className="dog-image" />
      <figcaption>
        <div className="board-label">
          {title} - {owner}
        </div>
      </figcaption>
      {/* </figure> */}
    </li>
  );
};
export default Board;
