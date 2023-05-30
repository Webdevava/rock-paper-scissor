import React from "react";

function SubmitButton({ handleCompareClick, showContent, final, totalClicks }) {
  return (
    <button className="submit" onClick={handleCompareClick}>
      {showContent ? <h2>{final}</h2> : totalClicks < 10 ? "Submit" : "Submit"}
    </button>
  );
}

export default SubmitButton;
