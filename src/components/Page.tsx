import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface PageProps extends PropsWithChildren {}

export default function Page(props: PageProps) {
  return (
    <div className="layout">
      <div className="menu">
        <Link to="/button-game">Button</Link>
        <Link to="/string-game">String</Link>
        <Link to="/logos-game">Logos</Link>
        <Link to="/sequence-fils-game">Séquences de fils</Link>
        <Link to="/morse-game">Morse</Link>
        <Link to="/simon-game">Simon</Link>
        <Link to="/memory-game">Memory</Link>
        <Link to="/complex-strings-game">Complex Strings</Link>
        <Link to="/password-game">Passwords</Link>
        <Link to="/molettes-mini-game">Molettes</Link>
      </div>
      <div className="main">{props.children}</div>
    </div>
  );
}
