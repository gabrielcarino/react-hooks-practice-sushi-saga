import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, onEat }) {
  const [i, setI] = useState(0);

  const plates = sushi
    .slice(i, i + 4)
    .map(piece => <Sushi piece={piece} key={piece.id} onEatPiece={onEat} />);

  function handleMoreClick() {
    setI(i => (i + 4) % sushi.length);
  };

  return (
    <div className="belt">
      {plates}
      <MoreButton onMore={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
