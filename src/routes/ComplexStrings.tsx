import { useMemo, useState } from "react";

export default function ComplexStrings() {
  const [hasPortParralel, setHasPortParralel] = useState<boolean>(false);
  const [isLastSerialNumberPair, setIsLastSerialNumberPair] = useState<boolean>(false);
  const [hasAtLeastTwoBatteries, setHasAtLeastTwoBatteries] = useState<boolean>(false);
  const [hasRed, setHasRed] = useState<boolean>(false);
  const [hasBlue, setHasBlue] = useState<boolean>(false);
  const [hasStar, setHasStar] = useState<boolean>(false);
  const [hasLed, setHasLed] = useState<boolean>(false);

  const decision = useMemo(() => {
    let hasToCut = false;
    // C cases
    if (hasStar && hasRed && !hasBlue && !hasLed) {
      hasToCut = true;
    }
    if (hasStar && !hasRed && !hasBlue && !hasLed) {
      hasToCut = true;
    }
    if (!hasStar && !hasRed && !hasBlue && !hasLed) {
      hasToCut = true;
    }
    // S cases
    if (isLastSerialNumberPair) {
      if (hasRed && hasBlue && !hasStar && !hasLed) {
        hasToCut = true;
      }
      if (hasRed && !hasBlue && !hasStar && !hasLed) {
        hasToCut = true;
      }
      if (hasBlue && !hasRed && !hasStar && !hasLed) {
        hasToCut = true;
      }
      if (hasRed && hasBlue && !hasStar && hasLed) {
        hasToCut = true;
      }
    }
    // P cases
    if (hasPortParralel) {
      if (hasRed && hasBlue && !hasStar && hasLed) {
        hasToCut = true;
      }
      if (!hasRed && hasBlue && hasStar && hasLed) {
        hasToCut = true;
      }
      if (hasBlue && !hasRed && hasStar && !hasLed) {
        hasToCut = true;
      }
    }
    // B cases
    if (hasAtLeastTwoBatteries) {
      if (!hasRed && !hasBlue && hasStar && hasLed) {
        hasToCut = true;
      }
      if (hasRed && !hasBlue && hasStar && hasLed) {
        hasToCut = true;
      }
      if (hasRed && !hasBlue && !hasStar && hasLed) {
        hasToCut = true;
      }
    }
    return hasToCut ? "Couper" : "Ne pas couper";
  }, [hasPortParralel, isLastSerialNumberPair, hasAtLeastTwoBatteries, hasRed, hasBlue, hasStar, hasLed]);

  return (
    <div className="app">
      <h1>Complex Strings</h1>
      <div className="form">
        <div className="global-questions">
          <h2>Mallette</h2>
          <label>
            <input type="checkbox" checked={hasPortParralel} onChange={() => setHasPortParralel(!hasPortParralel)} />
            Port parallèle
          </label>
          <label>
            <input
              type="checkbox"
              checked={isLastSerialNumberPair}
              onChange={() => setIsLastSerialNumberPair(!isLastSerialNumberPair)}
            />
            Dernier chiffre de série pair
          </label>
          <label>
            <input
              type="checkbox"
              checked={hasAtLeastTwoBatteries}
              onChange={() => setHasAtLeastTwoBatteries(!hasAtLeastTwoBatteries)}
            />
            Au moins deux piles
          </label>
          <div className="nota-bene-parallel-port">
            NB : Un port parallèle avec deux rangées de plus de 6 trous chacune (12)
          </div>
        </div>

        <div className="string-questions">
          <h1>Fil :</h1>
          <label>
            <input type="checkbox" checked={hasRed} onChange={() => setHasRed(!hasRed)} />
            Rouge
          </label>
          <label>
            <input type="checkbox" checked={hasBlue} onChange={() => setHasBlue(!hasBlue)} />
            Bleu
          </label>
          <label>
            <input type="checkbox" checked={hasStar} onChange={() => setHasStar(!hasStar)} />
            Étoile
          </label>
          <label>
            <input type="checkbox" checked={hasLed} onChange={() => setHasLed(!hasLed)} />
            LED
          </label>
        </div>
      </div>

      <h2>Action</h2>
      <p>{decision}</p>
    </div>
  );
}
