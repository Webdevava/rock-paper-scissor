import React, { useState } from "react";
import "./Container.css";

function Container() {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [win, setWin] = useState("");
  const [pcChoice, setPcChoice] = useState("");
  const [numWins, setNumWins] = useState(0);
  const [numLosses, setNumLosses] = useState(0);
  const [numTies, setNumTies] = useState(0);

  const handleButtonClick = (id) => {
    setSelectedButtonId(id);
    playGame(id);
  };

  const playGame = (selectedId) => {
    const array = ["rock", "paper", "scissor"];
    const choice = array[Math.floor(Math.random() * array.length)];

    setPcChoice(choice);

    if (choice === selectedId) {
      setWin("It's a tie");
      setNumTies((prevNumTies) => prevNumTies + 1);
    } else if (
      (choice === "rock" && selectedId === "scissor") ||
      (choice === "paper" && selectedId === "rock") ||
      (choice === "scissor" && selectedId === "paper")
    ) {
      setWin("You lose");
      setNumLosses((prevNumLosses) => prevNumLosses + 1);
    } else {
      setWin("You win");
      setNumWins((prevNumWins) => prevNumWins + 1);
    }
  };

  return (
    <div className="container">
      <div className="stats">
        <p>Wins: {numWins}</p>
        <p>Losses: {numLosses}</p>
        <p>Ties: {numTies}</p>
      </div>
      <div className="icons">
        <button
          className={`icon rock ${selectedButtonId === "rock" ? "active" : ""}`}
          onClick={() => handleButtonClick("rock")}
        >
          🪨
        </button>
        <button
          className={`icon paper ${
            selectedButtonId === "paper" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("paper")}
        >
          📄
        </button>
        <button
          className={`icon scissor ${
            selectedButtonId === "scissor" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("scissor")}
        >
          ✂️
        </button>
      </div>
      <p>You choose: {selectedButtonId}</p>
      <p>PC choice: {pcChoice}</p>
      <h2>{win}</h2>
    </div>
  );
}

export default Container;
