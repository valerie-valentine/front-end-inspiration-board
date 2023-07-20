import React from "react";
import Board from "./Board";
import "./BoardPicker.css";
// import PropTypes from 'prop-types';

const BoardPicker = ({ boardsData, onBoardSelect, onDeleteBoard }) => {
  return (
    <div>
      {/* <h1 className="boards-label">Boards</h1> */}
      <section className="board-list">
        {boardsData.map((board) => {
          return (
            <Board
              key={board.boardId}
              boardId={board.boardId}
              title={board.title}
              owner={board.owner}
              image={board.image}
              onBoardSelect={onBoardSelect}
              onDeleteBoard={onDeleteBoard}
            />
          );
        })}
      </section>
    </div>
  );
};

export default BoardPicker;
