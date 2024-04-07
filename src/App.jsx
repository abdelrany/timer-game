import Player from "./components/Player.jsx";
import TimerChallenge from "./components/Timerchallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy Timer" targetTime={1} />
        <TimerChallenge title="Medium Timer" targetTime={5} />
        <TimerChallenge title="Hard Timer" targetTime={10} />
        <TimerChallenge title="Difficult Timer" targetTime={15} />
      </div>
    </>
  );
}

export default App;
