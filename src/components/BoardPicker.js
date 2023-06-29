import React from "react";
// import './BoardPicker.css';
// import PropTypes from 'prop-types';

const BoardPicker = ({ boardsData, onBoardSelect }) => {
  return (
    <div>
      <h1>Boards</h1>
      <section className="board-list">
        {boardsData.map((board) => {
          return (
            <li key={board.boardId} onClick={() => onBoardSelect(board)}>
              {board.title}
            </li>
          );
        })}
      </section>
    </div>
  );
};

export default BoardPicker;
