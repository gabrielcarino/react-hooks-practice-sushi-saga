import React from "react";

function Sushi({ piece, onEatPiece }) {
  const { id, name, img_url, eaten, price } = piece
  function handleClick() {
    if (!eaten) {
      onEatPiece(piece);
    } else {
      alert("Can't eat an empty plate, bud");
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick} id={id}>
        {piece.eaten ? null : (
          <img
            id={id}
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
