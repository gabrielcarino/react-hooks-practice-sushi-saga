import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [wallet, setWallet] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(sushi => {
        const updatedSushi = sushi.map(piece => {
          return { ...piece, eaten: false };
        });
        setSushi(updatedSushi);
      });
  }, []);

  function handleEat(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushi.map(piece => {
        if (piece.id === eatenSushi.id) return { ...piece, eaten: true };
        return piece;
      });
      setSushi(updatedSushis);
      setWallet(wallet => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }

  const eatenPieces = sushi.filter(piece => piece.eaten);

  return (
    <div className="app">
      <SushiContainer sushi={sushi} onEat={handleEat} />
      <Table ballance={wallet} plates={eatenPieces} />
    </div>
  );
}

export default App;
