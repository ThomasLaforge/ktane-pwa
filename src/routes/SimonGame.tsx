import { useCallback, useMemo, useState } from "react";
import "../styles/_simon.scss";

const COLORS = ["red", "blue", "green", "yellow"];

export default function SimonGame() {
  const [colors, setColors] = useState<string[]>([]);
  const [hasVoyelle, setHasVoyelle] = useState(false);
  const [nbErrors, setNbErrors] = useState(0);

  const colorsToClick = useMemo(() => {
    return colors.map((color) => {
      if (nbErrors === 0) {
        switch (color) {
          case "red":
            return "blue";
          case "blue":
            return hasVoyelle ? "red" : "yellow";
          case "green":
            return hasVoyelle ? "yellow" : "green";
          case "yellow":
            return hasVoyelle ? "green" : "red";
        }
      } else if (nbErrors === 1) {
        switch (color) {
          case "red":
            return hasVoyelle ? "yellow" : "red";
          case "blue":
            return hasVoyelle ? "green" : "blue";
          case "green":
            return hasVoyelle ? "blue" : "yellow";
          case "yellow":
            return hasVoyelle ? "red" : "green";
        }
      } else if (nbErrors === 2) {
        switch (color) {
          case "red":
            return hasVoyelle ? "green" : "yellow";
          case "blue":
            return hasVoyelle ? "red" : "green";
          case "green":
            return hasVoyelle ? "yellow" : "blue";
          case "yellow":
            return hasVoyelle ? "blue" : "red";
        }
      }
    });
  }, [colors, nbErrors, hasVoyelle]);

  const handleRemoveLast = useCallback(() => {
    setColors(colors.slice(0, -1));
  }, [colors]);

  return (
    <div className="simon-game">
      <h1 className="simon-game-title">Simon Game</h1>
      <div className="simon-game-options">
        <div className="option option-has-voyelle">
          <label className="option-label">
            Le numéro de série contient une voyelle :
          </label>
          <input
            className="option-input"
            type="checkbox"
            name="has-voyelle"
            id="has-voyelle"
            checked={hasVoyelle}
            onClick={() => setHasVoyelle(!hasVoyelle)}
          />
        </div>
        <div className="option option-nb-errors">
          <label className="option-label">Nombre d'erreurs : </label>
          <input
            className="option-input"
            type="number"
            name="nb-errors"
            id="nb-errors"
            min={0}
            max={2}
            value={nbErrors}
            onChange={(e) => setNbErrors(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="colors-form" style={{ display: "flex" }}>
        {COLORS.map((color, key) => (
          <div
            key={key}
            className={
              "color-form-elt" +
              (color === "yellow" ? " color-form-elt-yellow" : "")
            }
            onClick={() => setColors([...colors, color])}
            style={{ backgroundColor: color }}
          >
            +
          </div>
        ))}
      </div>

      <h2>Séquence de la malette</h2>

      <div className="sequence-render" style={{ display: "flex" }}>
        {colors.map((c, k) => (
          <div
            key={k}
            className={
              "sequence-elt" + (c === "yellow" ? " sequence-elt-yellow" : "")
            }
            onClick={() => k === colors.length - 1 && handleRemoveLast()}
            style={{ backgroundColor: c }}
          >
            {k === colors.length - 1 ? "-" : ""}
          </div>
        ))}
      </div>

      {colors.length > 0 && (
        <button
          onClick={() => {
            setColors([]);
          }}
        >
          reset
        </button>
      )}

      <h2>Solution à appliquer</h2>

      <div className="solution-render" style={{ display: "flex" }}>
        {colorsToClick.map((c, key) => (
          <div
            key={key}
            className="color-to-click"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  );
}
