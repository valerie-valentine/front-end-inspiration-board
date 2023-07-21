import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import BoardPicker from "./components/BoardPicker";
import SelectedBoard from "./components/SelectedBoard";
import NewBoardForm from "./components/NewBoardForm";
import Cardlist from "./components/CardList";
import NewCardForm from "./components/NewCardForm";
// import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
import axios from "axios";
import {
  kBaseUrl,
  getAllBoards,
  getAllCards,
  postCardApi,
  updateCardApi,
  updateCardMessageApi,
  deleteCardApi,
  deleteBoardApi,
  convertFromApi,
} from "./NetworkMethods.js";

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [selectedCardsData, setSelectedCardsData] = useState([]);

  const fetchBoards = () => {
    getAllBoards().then((boards) => {
      setBoardsData(boards);
    });
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  const onBoardSelect = (boardSelectedId) => {
    setSelectedBoardId(boardSelectedId);
    getAllCards(boardSelectedId).then((cards) => {
      setSelectedCardsData(cards);
    });
  };

  const onBoardSubmit = (data) => {
    return axios
      .post(`${kBaseUrl}/boards`, data)
      .then((response) => {
        setBoardsData((prevBoards) => [
          ...prevBoards,
          convertFromApi(response.data.board),
        ]);
      })
      .catch((error) => console.log(error));
  };

  const createNewCard = (data) => {
    postCardApi(selectedBoardId, data).then((newCard) => {
      setSelectedCardsData((prevCards) => {
        return [...prevCards, newCard];
      });
    });
  };

  const getSelectedBoard = (id) => {
    const selectedBoard = boardsData.filter((board) => board.boardId === id);
    return selectedBoard[0];
  };

  const onUpdateLikes = (id, likeStatus) => {
    updateCardApi(id, likeStatus).then((updatedCard) => {
      const cards = selectedCardsData.map((card) => {
        if (card.id === id) {
          return updatedCard;
        }
        return card;
      });
      setSelectedCardsData(cards);
    });
  };

  const onUpdateCardMessage = (id, message) => {
    updateCardMessageApi(id, message).then((updatedCard) => {
      const cards = selectedCardsData.map((card) => {
        if (card.id === id) {
          return updatedCard;
        }
        return card;
      });
      setSelectedCardsData(cards);
    });
  };

  const onDeleteCard = (id) => {
    deleteCardApi(id).then(() => {
      const newCards = selectedCardsData.filter((card) => card.id !== id);
      setSelectedCardsData(newCards);
    });
  };

  const onDeleteBoard = (id) => {
    deleteBoardApi(id).then(() => {
      const newBoards = boardsData.filter((board) => board.boardId !== id);
      setBoardsData(newBoards);
    });
  };

  const clearSelectedBoard = () => {
    setSelectedBoardId(null);
  };

  const selectedBoard = getSelectedBoard(selectedBoardId);

  const header =
    selectedBoardId === null ? "Inspiration Boards" : "Selected Board";

  return (
    <body>
      <div className="App">
        <main>
          <div className="header">
            <h1 className="boards-label">{header}</h1>
          </div>
          <section className="form-container">
            <NewBoardForm
              onBoardSubmit={onBoardSubmit}
              selectedBoardId={selectedBoardId}
            />
          </section>
          {selectedBoardId === null && (
            <BoardPicker
              boardsData={boardsData}
              onBoardSelect={onBoardSelect}
              onDeleteBoard={onDeleteBoard}
            />
          )}
          <section className="selected-board">
            {selectedBoardId != null && (
              <SelectedBoard
                selectedBoard={selectedBoard}
                clearSelectedBoard={clearSelectedBoard}
              />
            )}
          </section>
          <section className="card-list">
            {selectedBoardId != null && (
              <Cardlist
                selectedBoard={selectedBoard}
                onUpdateLikes={onUpdateLikes}
                selectedCardsData={selectedCardsData}
                onDeleteCard={onDeleteCard}
                onUpdateCardMessage={onUpdateCardMessage}
              />
            )}
          </section>
          <section className="form-container">
            {selectedBoardId != null && (
              <NewCardForm createNewCard={createNewCard} />
            )}
          </section>
        </main>
        <div className="push"></div>
      </div>
      <footer className="footer"></footer>
    </body>
  );
}

export default App;
