import "./App.css";
import React from "react";
import { useState } from "react";
import BoardPicker from "./components/BoardPicker";
import SelectedBoard from "./components/SelectedBoard";
import NewBoardForm from "./components/NewBoardForm";

const DATA = [
  {
    boardId: 1,
    title: "Parrots",
    owner: "Whitney",
  },
  {
    boardId: 2,
    title: "Cats",
    owner: "Valerie",
  },
  {
    boardId: 3,
    title: "Dogs",
    owner: "Adrian",
  },
];

function App() {
  const [boardsData, setBoardsData] = useState(DATA);
  const [selectedBoard, setSelectedBoard] = useState({
    boardId: 0,
    title: "",
    owner: "",
  });
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(false);

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
        <NewBoardForm
          setIsBoardFormVisible={setIsBoardFormVisible}
          createNewBoard={createNewBoard}
        />
      </main>
    </div>
  );
}

export default App;
