import "./App.css";
import React from "react";
import { useState } from "react";
import BoardPicker from "./components/BoardPicker";
import SelectedBoard from "./components/SelectedBoard";
import NewBoardForm from "./components/NewBoardForm";
import Cardlist from "./components/CardList";
import NewCardForm from "./components/NewCardForm";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

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
  const [selectedBoardId, setSelectedBoardId] = useState(DATA[0].boardId);

  const onBoardSelect = (boardSelected) => {
    setSelectedBoardId(boardSelected.boardId);
  };

  const createNewBoard = (newBoard) => {
    setBoardsData((boardsData) => [newBoard, ...boardsData]);
  };

  const createNewCard = (card) => {
    const boards = boardsData.map((board) => {
      if (board.boardId === selectedBoardId) {
        board.cards.push(card);
      }
      return board;
    });
    setBoardsData(boards);
    console.log(boardsData);
  };

  const getSelectedBoard = (id) => {
    const selectedBoard = boardsData.filter((board) => board.boardId === id);
    return selectedBoard[0];
  };

  const onUpdateLikes = (id) => {
    const boards = boardsData.map((board) => {
      if (board.boardId === selectedBoardId) {
        board.cards = board.cards.map((card) => {
          if (card.id === id) {
            return { ...card, likeCount: (card.likeCount += 1) };
          }
          return card;
        });
      }
      return board;
    });
    setBoardsData(boards);
  };

  const selectedBoard = getSelectedBoard(selectedBoardId);

  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
      <main>
        <BoardPicker boardsData={boardsData} onBoardSelect={onBoardSelect} />
        <SelectedBoard selectedBoard={selectedBoard} />
        <NewBoardForm createNewBoard={createNewBoard} />
        <Cardlist selectedBoard={selectedBoard} onUpdateLikes={onUpdateLikes} />
        <NewCardForm createNewCard={createNewCard} />
      </main>
    </div>
  );
}

export default App;
