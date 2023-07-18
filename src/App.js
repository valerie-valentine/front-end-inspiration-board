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

const kBaseUrl = `${process.env.REACT_APP_BACKEND_URL}`;
// const kBaseUrl = "http://localhost:8000";

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

const getAllCards = (boardId) => {
  return axios
    .get(`${kBaseUrl}/boards/${boardId}/cards`)
    .then((response) => {
      return response.data.map(convertCardFromApi);
    })
    .catch((error) => {
      console.log(error);
    });
};

const postCardApi = (boardId, data) => {
  return axios
    .post(`${kBaseUrl}/boards/${boardId}/cards`, data)
    .then((response) => {
      return response.data;
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

const convertCardFromApi = (apiCard) => {
  const { likes_count: likesCount, ...card } = apiCard;
  const newCard = { likesCount, ...card };
  return newCard;
};

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

  const onBoardSelect = (boardSelected) => {
    setSelectedBoardId(boardSelected);
    getAllCards(boardSelected) //Check on using boardsSelected v. selectedBoardId
      .then((cards) => {
        setSelectedCardsData(cards);
      });
    // get request to grab all cards for a board
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

  // const createNewBoard = (newBoard) => {
  //   setBoardsData((boardsData) => [newBoard, ...boardsData]);
  // };

  const createNewCard = (data) => {
    postCardApi(selectedBoardId, data).then((newCard) => {
      setSelectedCardsData((prevCards) => {
        return [...prevCards, newCard];
      });
    });
  };

  // const createNewCard = (card) => {
  //   const boards = boardsData.map((board) => {
  //     if (board.boardId === selectedBoardId) {
  //       board.cards.push(card);
  //     }
  //     return board;
  //   });
  //   setBoardsData(boards);
  // };

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
            />
          )}
        </section>
        <section>
          {selectedBoardId != null && (
            <NewCardForm
              createNewCard={createNewCard}
              boardId={selectedBoardId}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
