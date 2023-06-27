import React from "react";
// import './BoardPicker.css';
import Board from './Board';
// import PropTypes from 'prop-types';

// When we display JSX each element will need an event handler to display the board.
const BoardPicker = ({boardsData, selectedBoard}) => {
    const boardComponents = boardsData.map((board) => {
        return (
            <li>
                {board.title}
            </li>
        );
    });
    return (
        <section className = 'board-list'>
            {boardComponents}
        </section>
    );
};

export default BoardPicker;