import { useState } from "react";
import UpdateButton from "./components/UpdateButton";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
    console.log(game);
  };
  return (
    <div>
      <UpdateButton onUpdate={handleClick} />
    </div>
  );
};

export default App;
