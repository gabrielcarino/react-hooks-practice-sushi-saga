import React from "react";

function MoreButton({ onMore}) {
  function handleClick() {
    onMore()
  }
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
