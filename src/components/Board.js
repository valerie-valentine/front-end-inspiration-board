import React from "react";

const Board = ({ boardId, title, owner, onBoardSelect }) => {
  const handleBoardSelect = () => {
    onBoardSelect(boardId);
  };

  return (
    <li>
      <div onClick={handleBoardSelect}>
        {title} - {owner}
      </div>
    </li>
  );
};
export default Board;
