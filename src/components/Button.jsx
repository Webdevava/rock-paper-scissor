import React from "react";

function Button({ id, selectedButtonId, handleButtonClick, isDisabled }) {
  return (
    <button
      className={`icon ${id} ${selectedButtonId === id ? "active" : ""}`}
      onClick={() => handleButtonClick(id)}
      disabled={isDisabled}
    >
      {id === "rock" && "🪨"}
      {id === "paper" && "📄"}
      {id === "scissor" && "✂️"}
    </button>
  );
}

export default Button;
