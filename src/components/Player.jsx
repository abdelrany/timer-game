import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [namePlayer, setNamePlayer] = useState("");

  function handleNamePlayer() {
    setNamePlayer(playerName.current.value);
    playerName.current.clear;
  }
  console.log(namePlayer);
  return (
    <section id="player">
      <h2>Welcome {namePlayer ?? "Guest"} entity</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleNamePlayer}>Set Name</button>
      </p>
    </section>
  );
}
