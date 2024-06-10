import { useState } from "react";

enum Color {
  Red = "red",
  Blue = "blue",
  Black = "black",
}

const filsToCut: { [key in Color]: string[][] } = {
  red: [["C"], ["B"], ["A"], ["A", "C"], ["B"], ["A", "C"], ["A", "B", "C"], ["A", "B"], ["B"]],
  blue: [["B"], ["A", "C"], ["B"], ["A"], ["B"], ["B", "C"], ["C"], ["A", "C"], ["A"]],
  black: [["A", "B", "C"], ["A", "C"], ["B"], ["A", "C"], ["B"], ["B", "C"], ["A", "B"], ["C"], ["C"]],
};

function getFilsToCut(sequence: string[], index: number, color: Color): string[] {
  const subSequence = sequence.slice(0, index + 1).filter((e) => e === color);
  return filsToCut[color][subSequence.length - 1];
}

export default function SequenceFilsGame() {
  const [sequence, setSequence] = useState<Color[]>([]);

  return (
    <div>
      <h1>Séquences de fils</h1>
      <div className="actions">
        <button onClick={() => setSequence([])}>Réinitialiser</button>
        <button onClick={() => setSequence(sequence.slice(0, -1))}>Supprimer le dernier fil</button>
      </div>
      <div className="sequence-add-colors">
        <button onClick={() => setSequence([...sequence, Color.Red])}>Ajouter un fil rouge</button>
        <button onClick={() => setSequence([...sequence, Color.Blue])}>Ajouter un fil bleu</button>
        <button onClick={() => setSequence([...sequence, Color.Black])}>Ajouter un fil noir</button>
      </div>
      <h2>Séquence</h2>
      <div>
        {sequence
          .map((color, index) => (
            <div className="sequence-line">
              <div
                key={index}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: color,
                  border: "1px solid black",
                }}
              />
              <div className="to-do">Couper {getFilsToCut(sequence, index, color).join(" ou ")}</div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}
