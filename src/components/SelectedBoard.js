import React from "react";
import "./SelectedBoard.css";
import cat from "../Assets/cat.avif";
import dog from "../Assets/dog.jpg";
import redPanda from "../Assets/red-panda.jpg";
import sailorMoon from "../Assets/sailor-moon-anime.gif";
import sloth from "../Assets/sloth.avif";
// import PropTypes from 'prop-types';

const images = {
  cat,
  dog,
  sloth,
  redPanda,
  sailorMoon,
};

const SelectedBoard = ({ selectedBoard, clearSelectedBoard }) => {
  const handleClearSelectedBoard = () => {
    clearSelectedBoard();
  };

  return (
    // <div>
    //     <h1 className="selected-board-label">
    //         SelectedBoard
    //     </h1>
    //     <p>
    //         {selectedBoard.title} {selectedBoard.owner}
    //     </p>
    // </div>
    <section>
      <li className="polaroid">
        {/* <figure className="polaroid"> */}
        <img
          src={images[selectedBoard.image]}
          alt="Samoyed"
          className="dog-image"
        />
        <figcaption>
          <div className="board-label">
            {selectedBoard.title} - {selectedBoard.owner}
          </div>
        </figcaption>
        {/* </figure> */}
      </li>
      <button className="x-button" onClick={handleClearSelectedBoard}>
        X
      </button>
    </section>
  );
};

export default SelectedBoard;
