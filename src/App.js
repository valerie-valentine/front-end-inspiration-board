import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import BoardPicker from "./components/BoardPicker";
import SelectedBoard from "./components/SelectedBoard";
import NewBoardForm from "./components/NewBoardForm";
import Cardlist from "./components/CardList";
import NewCardForm from "./components/NewCardForm";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import axios from "axios";

const kBaseUrl = "http://localhost:5000";

const getAllBoards = () => {
  return axios
    .get(`${kBaseUrl}/boards`)
    .then((response) => {
      return response.data.map(convertFromApi);
    })
    .catch((error) => {
      console.log(error);
    });
};

const convertFromApi = (apiBoard) => {
  const { id: boardId, ...board } = apiBoard;
  const newBoard = { boardId, ...board };
  return newBoard;
};

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);

  const fetchBoards = () => {
    getAllBoards().then((boards) => {
      setBoardsData(boards);
    });
  };

  useEffect(() => {
    fetchBoards();
  }, []);

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

  //need to figure out - how to make get selected board run after useffect or what the initial value will be?

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
        {selectedBoardId != null && (
          <SelectedBoard selectedBoard={selectedBoard} />
        )}
        <NewBoardForm createNewBoard={createNewBoard} />
        <Cardlist selectedBoard={selectedBoard} onUpdateLikes={onUpdateLikes} />
        <NewCardForm createNewCard={createNewCard} />
      </main>
    </div>
  );
}

export default App;
