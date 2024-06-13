import { useEffect, useMemo, useState } from "react";

interface IConsigne {
  num?: number;
  pos?: number;
  numStep?: number;
  posStep?: number;
}

const STEPS: IConsigne[][] = [
  [{ pos: 2 }, { pos: 2 }, { pos: 3 }, { pos: 4 }],
  [{ num: 4 }, { posStep: 1 }, { pos: 1 }, { posStep: 1 }],
  [{ numStep: 2 }, { numStep: 1 }, { pos: 3 }, { num: 4 }],
  [{ posStep: 1 }, { pos: 1 }, { posStep: 2 }, { posStep: 2 }],
  [{ numStep: 1 }, { numStep: 2 }, { numStep: 4 }, { numStep: 3 }],
];

export default function MemoryGame() {
  const [positions, setPositions] = useState<number[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const [currentValue, setCurrentValue] = useState<number>(1);
  const [currentPosition, setCurrentPosition] = useState<number>(1);
  const [currentValueAtPosition, setCurrentValueAtPosition] = useState<number>(1);

  const stepIndex = useMemo(() => {
    return positions.length;
  }, [positions]);

  useEffect(() => {
    const step = STEPS[stepIndex];
    const consigne = step[currentValue - 1];
    console.log("consigne", consigne);
    if (consigne.pos) {
      setCurrentPosition(consigne.pos);
    }
    if (consigne.num) {
      setCurrentValue(consigne.num);
    }
    if (consigne.numStep) {
      setCurrentValueAtPosition(values[consigne.numStep - 1]);
    }
    if (consigne.posStep) {
      setCurrentPosition(positions[consigne.posStep - 1]);
    }
  }, [stepIndex, currentValue, values, positions]);

  const todo = useMemo(() => {
    const step = STEPS[stepIndex];
    const consigne = step[currentValue - 1];

    if (consigne.num) {
      return `Saisir le nombre ${consigne.num}`;
    } else if (consigne.pos) {
      return `Cliquer sur la position ${consigne.pos}`;
    } else if (consigne.numStep) {
      return `Saisir le nombre ${values[consigne.numStep - 1]}`;
    } else if (consigne.posStep) {
      return `Cliquer sur la position ${positions[consigne.posStep - 1]}`;
    }
  }, [stepIndex, currentValue, values, positions]);

  return (
    <div>
      <h1>Memory Game</h1>

      <h2>Que faire ensuite ?</h2>

      <label>current value :</label>
      <input
        type="number"
        min={1}
        max={4}
        value={currentValue}
        onChange={(e) => setCurrentValue(parseInt(e.target.value))}
        placeholder="Saisir le nombre à l'écran"
      />

      <p>{todo}</p>

      <h2>Ajouter une étape</h2>

      <div className="form">
        <label>current position :</label>

        <input
          type="number"
          placeholder="Value"
          value={currentPosition}
          min={1}
          max={4}
          onChange={(e) => setCurrentPosition(parseInt(e.target.value))}
        />
        <label>value at position :</label>

        <input
          type="number"
          placeholder="Value"
          value={currentValueAtPosition}
          min={1}
          max={4}
          onChange={(e) => setCurrentValueAtPosition(parseInt(e.target.value))}
        />
      </div>

      <button
        onClick={() => {
          setPositions([...positions, currentPosition]);
          setValues([...values, currentValueAtPosition]);
        }}
      >
        Ajouter
      </button>

      <h2>Steps</h2>

      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Valeur</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position, index) => (
            <tr key={index}>
              <td>{position}</td>
              <td>{values[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
