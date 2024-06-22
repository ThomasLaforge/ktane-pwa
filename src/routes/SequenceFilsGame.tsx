import { useState } from "react";
import "../styles/_sequence.scss";

enum Color {
  Red = "red",
  Blue = "blue",
  Black = "black"
}

const filsToCut: { [key in Color]: string[][] } = {
  red: [
    ["C"],
    ["B"],
    ["A"],
    ["A", "C"],
    ["B"],
    ["A", "C"],
    ["A", "B", "C"],
    ["A", "B"],
    ["B"]
  ],
  blue: [
    ["B"],
    ["A", "C"],
    ["B"],
    ["A"],
    ["B"],
    ["B", "C"],
    ["C"],
    ["A", "C"],
    ["A"]
  ],
  black: [
    ["A", "B", "C"],
    ["A", "C"],
    ["B"],
    ["A", "C"],
    ["B"],
    ["B", "C"],
    ["A", "B"],
    ["C"],
    ["C"]
  ]
};

function getFilsToCut(
  sequence: string[],
  index: number,
  color: Color
): string[] {
  const subSequence = sequence.slice(0, index + 1).filter((e) => e === color);
  return filsToCut[color][subSequence.length - 1];
}

export default function SequenceFilsGame() {
  const [sequence, setSequence] = useState<Color[]>([]);

  return (
    <div className="string-sequence-game">
      <h1>Séquences de fils</h1>
      <h2 className="sequence-add-colors-title">Ajouter</h2>
      <div className="sequence-add-colors">
        <div
          className="sequence-add-color-btn"
          style={{ backgroundColor: Color.Red }}
          onClick={() => setSequence([...sequence, Color.Red])}
        >
          +
        </div>
        <div
          className="sequence-add-color-btn"
          style={{ backgroundColor: Color.Blue }}
          onClick={() => setSequence([...sequence, Color.Blue])}
        >
          +
        </div>
        <div
          className="sequence-add-color-btn"
          style={{ backgroundColor: Color.Black }}
          onClick={() => setSequence([...sequence, Color.Black])}
        >
          +
        </div>
      </div>
      <h2>Séquence</h2>
      <div>
        {sequence
          .map((color, index) => (
            <div className="sequence-line">
              <div className="sequence-number">{index + 1}</div>
              <div
                key={index}
                className="sequence-color"
                style={{ backgroundColor: color }}
              />
              <div className="to-do">
                Couper {getFilsToCut(sequence, index, color).join(" ou ")}
              </div>
              {index === sequence.length - 1 && (
                <button onClick={() => setSequence(sequence.slice(0, -1))}>
                  X
                </button>
              )}
            </div>
          ))
          .reverse()}
        {sequence.length > 0 && (
          <button onClick={() => setSequence([])}>Réinitialiser</button>
        )}
      </div>
    </div>
  );
}
