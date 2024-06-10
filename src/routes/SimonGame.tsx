import { useMemo, useState } from "react";

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

  return (
    <div className="simon-game">
      <h2>Le numéro de série contient une voyelle ?</h2>
      <input
        type="checkbox"
        name="has-voyelle"
        id="has-voyelle"
        checked={hasVoyelle}
        onClick={() => setHasVoyelle(!hasVoyelle)}
      />

      <h2>Nombre d'erreurs ?</h2>
      <input
        type="number"
        name="nb-errors"
        id="nb-errors"
        min={0}
        max={2}
        value={nbErrors}
        onChange={(e) => setNbErrors(parseInt(e.target.value))}
      />

      <h2>Sequence</h2>

      <h3>Add a color</h3>

      <div className="colors-form" style={{ display: "flex" }}>
        {COLORS.map((color, key) => (
          <div
            key={key}
            className="color-form-elt"
            onClick={() => setColors([...colors, color])}
            style={{ backgroundColor: color, width: "50px", height: "50px" }}
          />
        ))}
      </div>

      <button
        onClick={() => {
          setColors([]);
        }}
      >
        reset
      </button>

      <h3>Actuelle</h3>

      <div className="sequence-render" style={{ display: "flex" }}>
        {colors.map((c, k) => (
          <div key={k} className="sequence-elt" style={{ backgroundColor: c, width: "50px", height: "50px" }} />
        ))}
      </div>

      <h2>A cliquer</h2>

      <div className="solution-render" style={{ display: "flex" }}>
        {colorsToClick.map((c, key) => (
          <div key={key} className="color-to-click" style={{ backgroundColor: c, width: "50px", height: "50px" }} />
        ))}
      </div>
    </div>
  );
}
