import { useMemo, useState } from "react";

const positions = [
  "Haut Gauche", // 0
  "Haut Droite", // 1
  "Milieu Gauche", // 2
  "Milieu Droite", // 3
  "Bas Gauche", // 4
  "Bas Droite" // 5
];

const wordsCorrespondingToPosition = [
  {
    word: "OUI",
    position: 2
  },
  {
    word: "PREMIER",
    position: 1
  },
  {
    word: "VERRE",
    position: 5
  },
  {
    word: "OK",
    position: 1
  },
  {
    word: "MOTS",
    position: 5
  },
  {
    word: "RIEN",
    position: 2
  },
  {
    word: " ",
    position: 4
  },
  {
    word: "VIDE",
    position: 3
  },
  {
    word: "NON",
    position: 5
  },
  {
    word: "MOT",
    position: 2
  },
  {
    word: "MAUX",
    position: 5
  },
  {
    word: "BOUGE",
    position: 3
  },
  {
    word: "ROUGE",
    position: 3
  },
  {
    word: "AU",
    position: 4
  },
  {
    word: "EAU",
    position: 4
  },
  {
    word: "ATTENDS",
    position: 5
  },
  {
    word: "TES",
    position: 3
  },
  {
    word: "T'ES",
    position: 5
  },
  {
    word: "TON",
    position: 3
  },
  {
    word: "TONS",
    position: 3
  },
  {
    word: "THON",
    position: 0
  },
  {
    word: "TU ES",
    position: 5
  },
  {
    word: "HAUT",
    position: 4
  },
  {
    word: "VERS",
    position: 3
  },
  {
    word: "VERT",
    position: 2
  },
  {
    word: "C'EST",
    position: 5
  },
  {
    word: "C",
    position: 1
  },
  {
    word: "VER",
    position: 5
  }
];

const sortedWords = wordsCorrespondingToPosition.sort((a, b) =>
  a.word.localeCompare(b.word)
);

const wordCorrespondingToWords = [
  {
    word: "PRÊT",
    wordsList: [
      "OUI",
      "E",
      "EUX",
      "MILIEU",
      "GAUCHE",
      "APPUIE",
      "DROITE",
      "VIDE",
      "PRÊT"
    ]
  },
  {
    word: "PREMIER",
    wordsList: [
      "GAUCHE",
      "E",
      "OUI",
      "MILIEU",
      "NON",
      "DROITE",
      "RIEN",
      "EUHHH",
      "ATTENDS",
      "PRÊT",
      "VIDE",
      "EUX",
      "APPUIE",
      "PREMIER"
    ]
  },
  {
    word: "NON",
    wordsList: [
      "VIDE",
      "EUHHH",
      "ATTENDS",
      "PREMIER",
      "EUX",
      "PRÊT",
      "DROITE",
      "OUI",
      "RIEN",
      "GAUCHE",
      "APPUIE",
      "E",
      "NON"
    ]
  },
  {
    word: "VIDE",
    wordsList: ["ATTENDS", "DROITE", "E", "MILIEU", "VIDE"]
  },
  {
    word: "RIEN",
    wordsList: [
      "EUHHH",
      "DROITE",
      "E",
      "MILIEU",
      "OUI",
      "VIDE",
      "NON",
      "APPUIE",
      "GAUCHE",
      "EUX",
      "ATTENDS",
      "PREMIER",
      "RIEN"
    ]
  },
  {
    word: "OUI",
    wordsList: [
      "E",
      "DROITE",
      "EUHHH",
      "MILIEU",
      "PREMIER",
      "EUX",
      "APPUIE",
      "PRÊT",
      "RIEN",
      "OUI"
    ]
  },
  {
    word: "EUX",
    wordsList: ["EUHHH", "EUX"]
  },
  {
    word: "EUHHH",
    wordsList: [
      "PRÊT",
      "RIEN",
      "GAUCHE",
      "EUX",
      "E",
      "OUI",
      "DROITE",
      "NON",
      "APPUIE",
      "VIDE",
      "EUHHH"
    ]
  },
  {
    word: "GAUCHE",
    wordsList: ["DROITE", "GAUCHE"]
  },
  {
    word: "DROITE",
    wordsList: [
      "OUI",
      "RIEN",
      "PRÊT",
      "APPUIE",
      "NON",
      "ATTENDS",
      "EUX",
      "DROITE"
    ]
  },
  {
    word: "MILIEU",
    wordsList: [
      "VIDE",
      "PRÊT",
      "E",
      "EUX",
      "RIEN",
      "APPUIE",
      "NON",
      "ATTENDS",
      "GAUCHE",
      "MILIEU"
    ]
  },
  {
    word: "E",
    wordsList: [
      "MILIEU",
      "NON",
      "PREMIER",
      "OUI",
      "EUHHH",
      "RIEN",
      "ATTENDS",
      "E"
    ]
  },
  {
    word: "ATTENDS",
    wordsList: [
      "EUHHH",
      "NON",
      "VIDE",
      "E",
      "OUI",
      "GAUCHE",
      "PREMIER",
      "APPUIE",
      "EUX",
      "ATTENDS"
    ]
  },
  {
    word: "APPUIE",
    wordsList: ["DROITE", "MILIEU", "OUI", "PRÊT", "APPUIE"]
  },
  {
    word: "TOI",
    wordsList: [
      "OK",
      "THON",
      "TON",
      "TONS",
      "SUIVANT",
      "AVANT",
      "T'ES",
      "MAINTIENS",
      "QUOI ?",
      "TOI"
    ]
  },
  {
    word: "THON",
    wordsList: [
      "TON",
      "SUIVANT",
      "COMME",
      "AVANT",
      "QUOI ?",
      "FAIT",
      "QUOI",
      "MAINTIENS",
      "TOI",
      "TES",
      "TONS",
      "OK",
      "T'ES",
      "THON"
    ]
  },
  {
    word: "TON",
    wordsList: ["QUOI", "THON", "AVANT", "TON"]
  },
  {
    word: "TONS",
    wordsList: ["TOI", "TONS"]
  },
  {
    word: "T'ES",
    wordsList: ["FAIT", "TES", "T'ES"]
  },
  {
    word: "TES",
    wordsList: [
      "AVANT",
      "OK",
      "SUIVANT",
      "QUOI ?",
      "TONS",
      "T'ES",
      "QUOI",
      "FAIT",
      "TES"
    ]
  },
  {
    word: "AVANT",
    wordsList: ["AVANT"]
  },
  {
    word: "QUOI",
    wordsList: ["T'ES", "TES", "THON", "TONS", "SUIVANT", "QUOI"]
  },
  {
    word: "QUOI ?",
    wordsList: [
      "TOI",
      "MAINTIENS",
      "TONS",
      "TON",
      "TES",
      "FAIT",
      "QUOI",
      "COMME",
      "THON",
      "AVANT",
      "T'ES",
      "SUIVANT",
      "QUOI ?"
    ]
  },
  {
    word: "FAIT",
    wordsList: [
      "OK",
      "AVANT",
      "SUIVANT",
      "QUOI ?",
      "TON",
      "T'ES",
      "TONS",
      "MAINTIENS",
      "COMME",
      "TOI",
      "TES",
      "THON",
      "QUOI",
      "FAIT"
    ]
  },
  {
    word: "SUIVANT",
    wordsList: ["QUOI ?", "AVANT", "QUOI", "TON", "MAINTIENS", "OK", "SUIVANT"]
  },
  {
    word: "MAINTIENS",
    wordsList: [
      "THON",
      "TES",
      "FAIT",
      "QUOI",
      "TOI",
      "T'ES",
      "OK",
      "QUOI ?",
      "TONS",
      "SUIVANT",
      "MAINTIENS"
    ]
  },
  {
    word: "OK",
    wordsList: [
      "HON",
      "FAIT",
      "COMME",
      "TONS",
      "TOI",
      "MAINTIENS",
      "AVANT",
      "T'ES",
      "OK"
    ]
  },
  {
    word: "COMME",
    wordsList: [
      "TONS",
      "SUIVANT",
      "TES",
      "T'ES",
      "MAINTIENS",
      "FAIT",
      "QUOI",
      "QUOI ?",
      "AVANT",
      "TOI",
      "COMME"
    ]
  }
];

export default function WordsGridGame() {
  const [filter, setFilter] = useState("");
  const [filterStepTwo, setFilterStepTwo] = useState("");

  const filteredWords = useMemo(() => {
    return filter.length > 0
      ? sortedWords.filter((word) => word.word.includes(filter.toUpperCase()))
      : [
          {
            word: "",
            position: 0
          }
        ];
  }, [filter]);

  const filteredWordsStepTwo = useMemo(() => {
    return filterStepTwo.length > 0
      ? wordCorrespondingToWords.filter((word) =>
          word.word.includes(filterStepTwo.toUpperCase())
        )
      : [];
  }, [filterStepTwo]);

  return (
    <div className="words-grid-game">
      <h2>Step 1 : Trouver la position</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="words-grid">
        {filteredWords.length < 4 &&
          filteredWords.map((word, index) => (
            <div key={index} className="word" id={word.word}>
              <div>mot: {word.word}</div>
              <div>{positions[word.position]}</div>
            </div>
          ))}
      </div>

      <h2>Step 2 : Trouver le mot</h2>
      <input
        type="text"
        value={filterStepTwo}
        onChange={(e) => setFilterStepTwo(e.target.value)}
      />
      <div className="words-grid">
        {filteredWordsStepTwo.map((word, index) => (
          <div key={index} className="word" id={word.word}>
            <div>mot: {word.word}</div>
            <div>
              {word.wordsList.map((w, i) => (
                <span key={i}>{w}, </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
