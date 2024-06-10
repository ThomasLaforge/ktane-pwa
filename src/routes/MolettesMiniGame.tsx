import { useMemo, useState } from "react";

export default function MolettesMiniGame() {
  const [sixLeftBoxes, setSixLeftBoxes] = useState<boolean[]>([false, false, false, false, false, false]);

  const direction = useMemo(() => {
    const nbChecked = sixLeftBoxes.filter((value) => value).length;
    if (nbChecked <= 1) {
      return "Gauche";
    } else if (nbChecked === 4) {
      return "Haut";
    } else if (JSON.stringify(sixLeftBoxes) === JSON.stringify([true, false, true, true, true, true])) {
      return "Droite";
    } else {
      return "Bas";
    }
  }, [sixLeftBoxes]);

  return (
    <div>
      <h1>Molettes</h1>
      <p>Donner les "X" ou "Vides" de gauche à droite, de haut en bas.</p>
      <div
        className="inputs"
        style={{ width: "200px", display: "flex", flexWrap: "wrap", gap: "10px", margin: "auto" }}
      >
        {sixLeftBoxes.map((isOn, index) => (
          <button
            style={{ width: "60px", height: "60px" }}
            key={index}
            onClick={() => setSixLeftBoxes((prev) => prev.map((value, i) => (i === index ? !value : value)))}
          >
            {isOn ? "X" : ""}
          </button>
        ))}
      </div>

      <div className="solution">{direction}</div>
    </div>
  );
}
