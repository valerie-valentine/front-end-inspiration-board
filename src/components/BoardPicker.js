import React from "react";
// import './BoardPicker.css';
// import PropTypes from 'prop-types';


const BoardPicker = ({boardsData, onBoardSelect}) => {
    const boardComponents = boardsData.map((board, i) => {
        const handleBoardSelect = () => {
            onBoardSelect( {
                boardId: board.boardId,
                title: board.title,
                owner: board.owner
            });
        };

        return (
            <li key={i} onClick={handleBoardSelect}>
                {board.title}
            </li>
        );
    });

    return (
        <div>
            <h1>Boards</h1>
            <section className = 'board-list'>
                {boardComponents}
            </section>
        </div>
    );
};

export default BoardPicker;