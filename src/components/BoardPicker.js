import React from "react";
import Board from "./Board";
// import './BoardPicker.css';
// import PropTypes from 'prop-types';

const BoardPicker = ({ boardsData, onBoardSelect }) => {
  return (
    <div>
      <h1>Boards</h1>
      <section className="board-list">
        {boardsData.map((board, i) => {
          return (
            <Board
              key={board.boardId}
              boardId={board.boardId}
              title={board.title}
              owner={board.owner}
              onBoardSelect={onBoardSelect}
            />
          );
        })}
      </section>
    </div>
  );
};

export default BoardPicker;
