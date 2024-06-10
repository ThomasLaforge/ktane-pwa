import { useCallback, useMemo, useState } from "react";

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
  Z: "--..",
};

const WORDS_TO_FREQUENCIES: { [key: string]: number } = {
  SHELL: 505,
  HALLS: 515,
  SLICK: 522,
  TRICK: 532,
  BOXES: 535,
  LEAKS: 542,
  STROBE: 545,
  BISTRO: 552,
  FLICK: 555,
  BOMBS: 565,
  BREAK: 572,
  BRICK: 575,
  STEAK: 582,
  STING: 592,
  VECTOR: 595,
  BEATS: 600,
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
    setLetters([...letters, currentLetter]);
    setInput("");
  }, [input, letters, currentLetter]);

  const handleRemoveLetter = useCallback(
    (index: number) => {
      setLetters(letters.filter((_, i) => i !== index));
    },
    [letters]
  );

  return (
    <div>
      <h1>Morse</h1>
      <div>
        <label>
          Entrer le code Morse :
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <div className="input-buttons">
            <button onClick={() => setInput(input + ".")}>.</button>
            <button onClick={() => setInput(input + "-")}>-</button>
            <button onClick={() => setInput(input.slice(0, -1))}>&lt;-</button>
          </div>
        </label>
        <p>{currentLetter}</p>
        <button onClick={handleAddLetter}>Add Letter</button>
      </div>

      <h2>Lettres</h2>

      <div className="letters-list">
        {letters.map((letter, index) => (
          <div key={index}>
            <div className="letter">{letter}</div>
            <button className="button-remove-letter" onClick={() => handleRemoveLetter(index)}>
              Supprimer
            </button>
          </div>
        ))}
      </div>

      <h2>Traduction possibles</h2>

      <div className="words-list">
        {possibleWords.map((word, index) => (
          <div key={index}>
            {word} : 3.{WORDS_TO_FREQUENCIES[word]}MHz =&gt; {WORDS_TO_FREQUENCIES[word]}
          </div>
        ))}
      </div>

      <h2>Traduction possibles avec input actuel</h2>

      <div className="words-list">
        {possibleWordsWithInput.map((word, index) => (
          <div key={index}>
            {word} : 3.{WORDS_TO_FREQUENCIES[word]}MHz =&gt; {WORDS_TO_FREQUENCIES[word]}
          </div>
        ))}
      </div>
    </div>
  );
}
