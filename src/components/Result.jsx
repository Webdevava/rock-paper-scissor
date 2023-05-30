import React from "react";

function Result({ win, selectedButtonId, pcChoice }) {
  return (
    <div>
      <p>👤: {selectedButtonId}</p>
      <p>🤖: {pcChoice}</p>
      <h3>{win}</h3>
    </div>
  );
}

export default Result;
