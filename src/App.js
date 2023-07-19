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
import {
  kBaseUrl,
  getAllBoards,
  getAllCards,
  postCardApi,
  updateCardApi,
  deleteCardApi,
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

  const onDeleteCard = (id) => {
    deleteCardApi(id).then(() => {
      const newCards = selectedCardsData.filter((card) => card.id !== id);
      setSelectedCardsData(newCards);
    });
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
        <section>
          {selectedBoardId != null && (
            <SelectedBoard selectedBoard={selectedBoard} />
          )}
        </section>
        <NewBoardForm onBoardSubmit={onBoardSubmit} />
        <section>
          {selectedBoardId != null && (
            <Cardlist
              selectedBoard={selectedBoard}
              onUpdateLikes={onUpdateLikes}
              selectedCardsData={selectedCardsData}
              onDeleteCard={onDeleteCard}
            />
          )}
        </section>
        <section>
          {selectedBoardId != null && (
            <NewCardForm createNewCard={createNewCard} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
