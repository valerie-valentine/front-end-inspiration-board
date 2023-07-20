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
    <div>
      <h1 className="selected-board-label">SELECTED BOARD</h1>
    <section className="selected-polaroid">
      <li>
        {/* <figure className="polaroid"> */}
        <img
          className="dog-image"
          src="https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png"
          alt="Samoyed"
        />
        <figcaption>
          <div className="selected-board-label">
            {selectedBoard.title} - {selectedBoard.owner}
          </div>
        </figcaption>
        {/* </figure> */}
      </li>
      <button className="x-button" onClick={handleClearSelectedBoard}>
        X
      </button>
    </section>
    </div>
  );
};

export default SelectedBoard;
