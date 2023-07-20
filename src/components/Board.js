import React from "react";
import './Board.css';

const Board = ({ boardId, title, owner, onBoardSelect }) => {
  const handleBoardSelect = () => {
    onBoardSelect(boardId);
  };

  return (
      <li  onClick={handleBoardSelect} className="polaroid">
        {/* <figure className="polaroid"> */}
          <img src="https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png"
          // "https://st2.depositphotos.com/3110539/7033/v/950/depositphotos_70334905-stock-illustration-dog-samoyed-buddy-puppy-vector.jpg" 
          alt="Samoyed" 
          className="dog-image"/>
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
