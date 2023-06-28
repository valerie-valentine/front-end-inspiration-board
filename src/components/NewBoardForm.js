import React from "react";
import { useState } from "react";



const NewBoardForm = ({setIsBoardFormVisible, createNewBoard}) => {

    // const [newBoard, setNewBoard] = useState({"boardId": 0, "title": "", "owner": ""});
    const [title, setTitle] = useState("");
    const [owner, setOwner] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleOwnerChange = (event) => {
        setOwner(event.target.value);
    };

    // const onNameChange 

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBoard = {
            title: title,
            owner: owner,
        }
        createNewBoard(newBoard);
        setTitle("");
        setOwner("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" onChange={handleTitleChange} value={title}></input>
            </div>
            <div>
                <label htmlFor="owner">Owner:</label>
                <input type="text" id="owner" name="owner" onChange={handleOwnerChange} value={owner}></input>
            </div>
            <div>
                <p>Preview: {title} - {owner}</p>
            </div>
            <div>
            <input type="submit" value="Add a Board"></input>
            </div>
        </form>
    );
};

export default NewBoardForm;