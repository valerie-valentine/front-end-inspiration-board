import './App.css';
import React from 'react';
import { useState } from 'react';

const DATA = 
  [
    {
        "board_id": 1,
        "title": "Parrots",
        "owner": "Whitney",
    },
    {
      "board_id": 2,
      "title": "Cats",
      "owner": "Valerie",
    },
    {
      "board_id": 3,
      "title": "Dogs",
      "owner": "Adrian",
    }
]

function App() {

  const [boardsData, setBoardsData] = useState(DATA);
  const [selectedBoard, setSelectedBoard] = useState({boardId: null, title: "none selected", owner: "none selected"});
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(false);

  

  return (
    <div className="App">
      <header>
      </header>
      <main>
        <body>
        </body>
      </main>
    </div>
  );
}

export default App;
