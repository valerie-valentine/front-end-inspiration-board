import React from "react";
import "./SelectedBoard.css";
// import PropTypes from 'prop-types';

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
          src="https://st2.depositphotos.com/3110539/7033/v/950/depositphotos_70334905-stock-illustration-dog-samoyed-buddy-puppy-vector.jpg"
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
