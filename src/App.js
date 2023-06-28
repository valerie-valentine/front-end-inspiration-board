import './App.css';
import React from 'react';
import { useState } from 'react';
import BoardPicker from './components/BoardPicker';
import SelectedBoard from './components/SelectedBoard'

const DATA = 
  [
    {
        "boardId": 1,
        "title": "Parrots",
        "owner": "Whitney",
    },
    {
      "boardId": 2,
      "title": "Cats",
      "owner": "Valerie",
    },
    {
      "boardId": 3,
      "title": "Dogs",
      "owner": "Adrian",
    }
]

function App() {

  const [boardsData, setBoardsData] = useState(DATA);
  const [selectedBoard, setSelectedBoard] = useState({"boardId": 0, "title": "Hi", "owner": "Kelsey"});
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(false);

  
  const onBoardSelect = (boardSelected) => {
    setSelectedBoard(boardSelected);
  };

  return (
    <div className="App">
      <header>
      </header>
      <main>
      <BoardPicker boardsData={boardsData} onBoardSelect={onBoardSelect}/>
      <SelectedBoard selectedBoard={selectedBoard}/>
      </main>
    </div>
  );
}

export default App;
