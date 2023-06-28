import React from "react";
// import './Board.css';
// import PropTypes from 'prop-types';


const SelectedBoard = ({selectedBoard}) => {
    return (
        <div>
            <h1>
                SelectedBoard
            </h1>
            <p>
                {selectedBoard.title} {selectedBoard.owner}
            </p>
        </div>
    );
};

export default SelectedBoard;