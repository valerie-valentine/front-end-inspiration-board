import "./App.css";
import React from "react";
import { useState } from "react";
import BoardPicker from "./components/BoardPicker";
import SelectedBoard from "./components/SelectedBoard";
import NewBoardForm from "./components/NewBoardForm";
import Cardlist from "./components/CardList";

const DATA = [
  {
    boardId: 1,
    title: "Parrots",
    owner: "Whitney",
    cards: [
      {
        id: 1,
        likeCount: 0,
        message: "Hello!",
      },
    ],
  },
  {
    boardId: 2,
    title: "Cats",
    owner: "Valerie",
    cards: [
      {
        id: 2,
        likeCount: 5,
        message: "Meow Meow Meow",
      },
    ],
  },
  {
    boardId: 3,
    title: "Dogs",
    owner: "Adrian",
    cards: [
      {
        id: 3,
        likeCount: 1,
        message: "Woof Woof!",
      },
    ],
  },
];

function App() {
  const [boardsData, setBoardsData] = useState(DATA);
  const [selectedBoard, setSelectedBoard] = useState({
    boardId: 0,
    title: "",
    owner: "",
    cards: [],
  });

  const onBoardSelect = (boardSelected) => {
    setSelectedBoard(boardSelected);
  };

  const createNewBoard = (newBoard) => {
    setBoardsData((boardsData) => [newBoard, ...boardsData]);
  };

  return (
    <div className="App">
      <header></header>
      <main>
        <BoardPicker boardsData={boardsData} onBoardSelect={onBoardSelect} />
        <SelectedBoard selectedBoard={selectedBoard} />
        <NewBoardForm createNewBoard={createNewBoard} />
        <Cardlist selectedBoard={selectedBoard} />
      </main>
    </div>
  );
}

export default App;
