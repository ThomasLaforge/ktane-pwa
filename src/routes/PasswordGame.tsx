import { useMemo, useState } from "react";
import "../styles/_passwords.scss";
import { uniq, uniqStr } from "../tools";

const words = [
  "abats",
  "abime",
  "abois",
  "adieu",
  "delta",
  "dense",
  "devin",
  "divin",
  "drame",
  "droit",
  "envol",
  "envie",
  "envoi",
  "erres",
  "essai",
  "fleur",
  "finit",
  "fiole",
  "kilos",
  "litre",
  "livre",
  "masse",
  "match",
  "matin",
  "mauve",
  "poser",
  "ports",
  "poule",
  "salir",
  "taire",
  "tarif",
  "tasse",
  "valve",
  "vanne",
  "vente"
].map((w) => w.toUpperCase());

export default function PasswordGame() {
  const [inputs, setInputs] = useState(["", "", "", "", ""]);

  const uniqInputs = useMemo(() => {
    return inputs.map((input) => uniqStr(input));
  }, [inputs]);

  const solutions = useMemo(() => {
    let solutions: string[] = [];

    for (let i = 0; i < uniqInputs[0].length; i++) {
      const letter = uniqInputs[0][i].toUpperCase();
      solutions = [...solutions, ...words.filter((word) => word[0] === letter)];
    }

    for (let letterIndex = 1; letterIndex < words[0].length; letterIndex++) {
      let possibleWords: string[] = [];
      if (uniqInputs[letterIndex] !== "") {
        for (let i = 0; i < uniqInputs[letterIndex].length; i++) {
          const letter = uniqInputs[letterIndex][i].toUpperCase();
          possibleWords = [
            ...possibleWords,
            ...solutions.filter((word) => word[letterIndex] === letter)
          ];
        }
        solutions = possibleWords;
      }
    }

    return solutions;
  }, [uniqInputs]);

  return (
    <div className="password-game">
      <h1 className="password-game-title">Passwords</h1>
      <p className="password-game-rules">
        Saisir dans le premier champ toutes les lettres possibles en première
        position, puis répétez l'opération pour chaque positions jusqu'à ce
        qu'il ne reste qu'un seul mot possible.
      </p>

      <div className="inputs">
        {inputs.map((input, index) => (
          <div className="possibilities-input-box" key={index}>
            <input
              value={input}
              className="possibilities-input"
              onChange={(e) => {
                const newInputs = [...inputs];
                newInputs[index] = e.target.value;
                setInputs(newInputs);
              }}
            />
          </div>
        ))}
      </div>

      <h2>Solutions</h2>
      <div className="possibilities">
        {solutions.map((solution, index) => (
          <div key={index} className="possibilities-elt">
            <div className="possibility-text">{solution}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
