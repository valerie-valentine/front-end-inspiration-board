import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [boardsData, setBoardsData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState(null)
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(false)


  return (
    <div className="App">
      <header>

      </header>
    </div>
  );
}

export default App;
