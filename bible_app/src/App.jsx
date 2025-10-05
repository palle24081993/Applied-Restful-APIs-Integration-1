import RandomVerse from "./components/RandomVerse";
import SpecificVerse from "./components/SpecificVerse";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>📖 Bible Verse App</h1>
      <div className="container">
        <RandomVerse />
        <SpecificVerse />
      </div>
    </div>
  );
}

export default App;
