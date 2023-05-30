import React, { useState } from "react";
import "./Container.css";
import Button from "./Button";
import Result from "./Result";
import SubmitButton from "./SubmitButton";

function Container() {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [win, setWin] = useState("");
  const [pcChoice, setPcChoice] = useState("");
  const [numWins, setNumWins] = useState(0);
  const [numLosses, setNumLosses] = useState(0);
  const [numTies, setNumTies] = useState(0);
  const [final, setFinal] = useState("");
  const [totalClicks, setTotalClicks] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = (id) => {
    setSelectedButtonId(id);
    playGame(id);
    setTotalClicks(totalClicks + 1);
  };

  const isDisabled = totalClicks >= 10;
  const remainingClicks = 10 - totalClicks;

  const playGame = (selectedId) => {
    const array = ["rock", "paper", "scissor"];
    const choice = array[Math.floor(Math.random() * array.length)];

    setPcChoice(choice);

    if (choice === selectedId) {
      setWin("tie");
      setNumTies((prevNumTies) => prevNumTies + 1);
    } else if (
      (choice === "rock" && selectedId === "scissor") ||
      (choice === "paper" && selectedId === "rock") ||
      (choice === "scissor" && selectedId === "paper")
    ) {
      setWin("lose");
      setNumLosses((prevNumLosses) => prevNumLosses + 1);
    } else {
      setWin("win");
      setNumWins((prevNumWins) => prevNumWins + 1);
    }
  };

  const handleCompareClick = () => {
    if (numWins > numLosses) {
      setFinal("🥳 You won!");
    } else if (numWins < numLosses) {
      setFinal("😟 You lost!");
    } else {
      setFinal("😑 It's a tie!");
    }

    setSelectedButtonId(null);
    setWin("");
    setPcChoice("");
    setNumWins(0);
    setNumLosses(0);
    setNumTies(0);
    setTotalClicks(0);
    setShowContent(true);
    setTimeout(() => setShowContent(false), 2000);
  };

  return (
    <div className="container">
      <h3 className="count">
        {remainingClicks ? `tries: ${remainingClicks}` : "please submit to see result"}
      </h3>
      <div className="icons">
        <Button
          id="rock"
          selectedButtonId={selectedButtonId}
          handleButtonClick={handleButtonClick}
          isDisabled={isDisabled}
        />
        <Button
          id="paper"
          selectedButtonId={selectedButtonId}
          handleButtonClick={handleButtonClick}
          isDisabled={isDisabled}
        />
        <Button
          id="scissor"
          selectedButtonId={selectedButtonId}
          handleButtonClick={handleButtonClick}
          isDisabled={isDisabled}
        />
      </div>
      <Result win={win} selectedButtonId={selectedButtonId} pcChoice={pcChoice} />
      <SubmitButton
        handleCompareClick={handleCompareClick}
        showContent={showContent}
        final={final}
        totalClicks={totalClicks}
      />
    </div>
  );
}

export default Container;
