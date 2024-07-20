import { useMemo, useState } from "react";

import "../styles/_logos.scss";

const columns = [
  [
    "28-balloon",
    "13-at",
    "30-upsidedowny",
    "12-squigglyn",
    "7-squidknife",
    "9-hookn",
    "23-leftc"
  ],
  [
    "16-euro",
    "28-balloon",
    "23-leftc",
    "26-cursive",
    "3-hollowstar",
    "9-hookn",
    "20-questionmark"
  ],
  [
    "1-copyright",
    "8-pumpkin",
    "26-cursive",
    "5-doublek",
    "15-meltedthree",
    "30-upsidedowny",
    "3-hollowstar"
  ],
  [
    "11-six",
    "21-paragraph",
    "31-bt",
    "7-squidknife",
    "5-doublek",
    "20-questionmark",
    "4-smileyface"
  ],
  [
    "24-pitchfork",
    "4-smileyface",
    "31-bt",
    "22-rightc",
    "21-paragraph",
    "19-dragon",
    "2-filledstar"
  ],
  [
    "11-six",
    "16-euro",
    "27-tracks",
    "14-ae",
    "24-pitchfork",
    "18-nwithhat",
    "6-omega"
  ]
];

const uniqueLogos = columns
  .flat()
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => {
    const aIndex = parseInt(a.split("-")[0]);
    const bIndex = parseInt(b.split("-")[0]);
    return aIndex - bIndex;
  });

export default function LogosGame() {
  const [selectedLogos, setSelectedLogos] = useState<string[]>([]);

  const orderedLogos = useMemo(() => {
    if (selectedLogos.length === 4) {
      const columnWithAllLogos = columns.find((column) =>
        selectedLogos.every((logo) => column.includes(logo))
      );
      return columnWithAllLogos
        ? selectedLogos.sort((a, b) => {
            return (
              columnWithAllLogos.indexOf(a) - columnWithAllLogos.indexOf(b)
            );
          })
        : [];
    }
    return [];
  }, [selectedLogos]);

  return (
    <div className="logos-game">
      <div className="logos-list">
        {uniqueLogos.map((logo, index) => (
          <div
            key={index}
            className={`logo ${
              selectedLogos.includes(logo) ? "logo-selected" : ""
            }`}
            id={logo}
          >
            <img
              src={`/logos/${logo}.png`}
              alt={logo}
              onClick={() => {
                setSelectedLogos(
                  selectedLogos.includes(logo)
                    ? selectedLogos.filter((i) => i !== logo)
                    : [...selectedLogos, logo]
                );
              }}
            />
          </div>
        ))}
      </div>
      <div className="result">
        <h3>Résultat</h3>
        {orderedLogos.map((logo, index) => (
          <div key={index} className="logo" id={logo}>
            <img src={`/logos/${logo}.png`} alt={logo} />
          </div>
        ))}
      </div>
    </div>
  );
}
