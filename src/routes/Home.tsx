import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="app">
      <h1>Home</h1>
      <Link to="/button-game">Button Game</Link>
      <Link to="/string-game">String Game</Link>
      <Link to="/password-game">Passwords</Link>
      <Link to="/simon-game">Simon</Link>
      <Link to="/sequence-fils-game">Séquences de fils</Link>
    </div>
  );
}
