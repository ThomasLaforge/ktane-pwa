import { useCallback, useMemo, useState } from "react";

import "../styles/_string.scss";

const COLORS = ["red", "blue", "yellow", "white", "black"];

export default function StringGame() {
  const [fils, setFils] = useState(["red", "blue", "yellow"]);
  const [serialEndIsPair, setSerialEndIsPair] = useState(false);

  const nbFils = useMemo(() => fils.length, [fils]);
  const nbRed = useMemo(
    () => fils.filter((fil) => fil === "red").length,
    [fils]
  );
  const nbBlue = useMemo(
    () => fils.filter((fil) => fil === "blue").length,
    [fils]
  );
  const nbYellow = useMemo(
    () => fils.filter((fil) => fil === "yellow").length,
    [fils]
  );
  const nbWhite = useMemo(
    () => fils.filter((fil) => fil === "white").length,
    [fils]
  );
  const nbBlack = useMemo(
    () => fils.filter((fil) => fil === "black").length,
    [fils]
  );

  const res = useMemo(() => {
    if (fils.length === 3) {
      if (nbRed === 0) {
        return "Couper le 2ème fil";
      }
      if (fils[fils.length - 1] === "white") {
        return "Couper le dernier fil";
      }
      if (nbBlue > 1) {
        return "Couper le dernier fil bleu";
      }
      return "Couper le dernier fil";
    } else if (fils.length === 4) {
      if (nbRed > 1 && !serialEndIsPair) {
        return "Couper le dernier fil rouge";
      }
      if (fils[fils.length - 1] === "yellow" && nbRed === 0) {
        return "Couper le 1er fil";
      }
      if (nbBlue === 1) {
        return "Couper le 1er fil";
      }
      if (nbYellow > 1) {
        return "Couper le dernier fil";
      }
      return "Couper le 2ème fil";
    } else if (fils.length === 5) {
      if (fils[fils.length - 1] === "black" && !serialEndIsPair) {
        return "Couper le 4ème fil";
      }
      if (nbRed === 1 && nbYellow > 1) {
        return "Couper le 1er fil";
      }
      if (nbBlack === 0) {
        return "Couper le 2ème fil";
      }
      return "Couper le 1er fil";
    } else {
      if (nbYellow === 0 && !serialEndIsPair) {
        return "Couper le 3ème fil";
      } else if (nbYellow === 1 && nbWhite > 1) {
        return "Couper le 4ème fil";
      } else if (nbRed === 0) {
        return "Couper le dernier fil";
      } else {
        return "Couper le 4ème fil";
      }
    }
  }, [fils, serialEndIsPair, nbRed, nbBlue, nbYellow, nbWhite, nbBlack]);

  const handleChangeFilColor = (index: number, color: string) => {
    const newFils = [...fils];
    newFils[index] = color;
    setFils(newFils);
  };

  const removeFil = useCallback(() => {
    setFils(fils.slice(0, -1));
  }, [fils]);

  const addFils = useCallback(() => {
    setFils([...fils, "red"]);
  }, [fils]);

  return (
    <div className="string-game">
      <h1 className="string-game-title">String Game</h1>
      <div className="params">
        <div className="nb-fils-options">
          <button
            className="btn-less-fils"
            onClick={removeFil}
            disabled={nbFils === 3}
          >
            -
          </button>
          <div className="nb-fils">{nbFils}</div>
          <button
            className="btn-more-fils"
            onClick={addFils}
            disabled={nbFils === 6}
          >
            +
          </button>
        </div>
        {((nbFils === 6 && nbYellow === 0) ||
          (nbFils === 5 && fils[fils.length - 1] === "black") ||
          (nbFils === 4 && nbRed > 1)) && (
          <div className="is-pair-option">
            <label htmlFor="is-pair">
              Le dernier chiffre du numéro de série est pair
            </label>
            <input
              type="checkbox"
              checked={serialEndIsPair}
              onChange={() => setSerialEndIsPair(!serialEndIsPair)}
            />
          </div>
        )}
      </div>

      <div className="wires">
        {fils.map((fil, index) => (
          <div className="fil-line" key={index}>
            <div
              key={index}
              className={`wire ${fil}`}
              style={{ backgroundColor: fil }}
            ></div>
            <div className="color-selector">
              {COLORS.map((color, colorIndex) => (
                <div
                  key={index + "-" + colorIndex}
                  className="color-selector-option"
                  onClick={() => {
                    handleChangeFilColor(index, color);
                  }}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="res">{res}</div>
    </div>
  );
}
