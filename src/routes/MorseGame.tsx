import { useCallback, useMemo, useState } from "react";
import "../styles/_morse.scss";

const LETTERS_TO_MORSE: { [key: string]: string } = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--.."
};

const WORDS_TO_FREQUENCIES: { [key: string]: number } = {
  // SHELL: 505,
  // HALLS: 515,
  // SLICK: 522,
  // TRICK: 532,
  // BOXES: 535,
  // LEAKS: 542,
  // STROBE: 545,
  // BISTRO: 552,
  // FLICK: 555,
  // BOMBS: 565,
  // BREAK: 572,
  // BRICK: 575,
  // STEAK: 582,
  // STING: 592,
  // VECTOR: 595,
  // BEATS: 600,

  VITRE: 505,
  VILLE: 515,
  CHOSE: 522,
  SIGNE: 532,
  LINGE: 535,
  LIGNE: 542,
  CHAMP: 545,
  LITRE: 552,
  PHASE: 555,
  CHAUD: 565,
  BILLE: 572,
  BALLE: 575,
  SINGE: 582,
  PLUME: 592,
  PLUIE: 595,
  SALLE: 600
};

const WORDS = Object.keys(WORDS_TO_FREQUENCIES);

export default function MorseGame() {
  const [input, setInput] = useState<string>("");
  const [letters, setLetters] = useState<string[]>([]);

  // Letters are not in the right order
  const possibleWords = useMemo(() => {
    return WORDS.filter((word) => {
      let keep = true;
      letters.forEach((letter) => {
        if (!word.includes(letter)) {
          keep = false;
        }
      });
      return keep;
    });
  }, [letters]);

  const possibleWordsWithInput = useMemo(() => {
    return possibleWords.filter((word) => {
      let keep = true;
      input.split(" ").forEach((morse) => {
        let found = false;
        for (const [letter, morseLetter] of Object.entries(LETTERS_TO_MORSE)) {
          if (morseLetter === morse && word.includes(letter)) {
            found = true;
          }
        }
        if (!found) {
          keep = false;
        }
      });
      return keep;
    });
  }, [input, possibleWords]);

  const currentLetter = useMemo(() => {
    if (input === "") {
      return "";
    }

    for (const [letter, morse] of Object.entries(LETTERS_TO_MORSE)) {
      if (morse === input) {
        return letter;
      }
    }

    return "Aucune lettre trouvée";
  }, [input]);

  const handleAddLetter = useCallback(() => {
    if (currentLetter !== "Aucune lettre trouvée" && currentLetter !== "") {
      setLetters([...letters, currentLetter]);
      setInput("");
    }
  }, [input, letters, currentLetter]);

  const handleRemoveLetter = useCallback(
    (index: number) => {
      setLetters(letters.filter((_, i) => i !== index));
    },
    [letters]
  );

  return (
    <div className="morse-game">
      <h1 className="morse-game-title">Morse</h1>
      <div className="morse-game-input">
        <label>Entrer le code Morse :</label>

        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <div className="input-buttons">
          <div className="input-btn" onClick={() => setInput(input + ".")}>
            .
          </div>
          <div className="input-btn" onClick={() => setInput(input + "-")}>
            -
          </div>
          <div
            className="input-btn"
            onClick={() => setInput(input.slice(0, -1))}
          >
            &lt;-
          </div>
        </div>
        <p className="current-input-value">{currentLetter}</p>
        <button className="input-action-add" onClick={handleAddLetter}>
          Ajouter
        </button>
      </div>

      <h2>Lettres</h2>

      <div className="letters-list">
        {letters.map((letter, index) => (
          <div key={index} className="letter">
            <div className="letter-value">{letter}</div>
            <div
              className="button-remove-letter"
              onClick={() => handleRemoveLetter(index)}
            >
              X
            </div>
          </div>
        ))}
      </div>

      <h2>Traduction possibles</h2>

      <div className="words-list">
        {possibleWords.map((word, index) => (
          <div key={index}>
            {word} : 3.{WORDS_TO_FREQUENCIES[word]}MHz =&gt;{" "}
            {WORDS_TO_FREQUENCIES[word]}
          </div>
        ))}
      </div>

      <h2>Traduction possibles avec input actuel</h2>

      <div className="words-list">
        {possibleWordsWithInput.map((word, index) => (
          <div key={index}>
            {word} : 3.{WORDS_TO_FREQUENCIES[word]}MHz =&gt;{" "}
            {WORDS_TO_FREQUENCIES[word]}
          </div>
        ))}
      </div>
    </div>
  );
}
