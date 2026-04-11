import { useMemo, useState } from "react";

import "../styles/_maze.scss";

const mazeList = [
  {
    starts: [
      {
        line: 2,
        column: 1
      },
      {
        line: 3,
        column: 6
      }
    ],
    url: "/maze0.svg"
  },
  {
    starts: [
      {
        line: 4,
        column: 2
      },
      {
        line: 2,
        column: 5
      }
    ],
    url: "/maze1.svg"
  },
  {
    starts: [
      {
        line: 4,
        column: 4
      },
      {
        line: 4,
        column: 6
      }
    ],
    url: "/maze2.svg"
  },
  {
    starts: [
      {
        line: 1,
        column: 1
      },
      {
        line: 4,
        column: 1
      }
    ],
    url: "/maze3.svg"
  },
  {
    starts: [
      {
        line: 3,
        column: 5
      },
      {
        line: 6,
        column: 4
      }
    ],
    url: "/maze4.svg"
  },
  {
    starts: [
      {
        line: 1,
        column: 5
      },
      {
        line: 5,
        column: 3
      }
    ],
    url: "/maze5.svg"
  },
  {
    starts: [
      {
        line: 1,
        column: 2
      },
      {
        line: 6,
        column: 2
      }
    ],
    url: "/maze6.svg"
  },
  {
    starts: [
      {
        line: 1,
        column: 4
      },
      {
        line: 4,
        column: 3
      }
    ],
    url: "/maze7.svg"
  },
  {
    starts: [
      {
        line: 2,
        column: 3
      },
      {
        line: 5,
        column: 1
      }
    ],
    url: "/maze8.svg"
  }
];

export default function MazeGame() {
  const [mazeIdentifierCoords, setMazeIdentifierCoords] = useState({
    line: 1,
    column: 1
  });
  const [startCoords, setStartCoords] = useState({ line: 1, column: 1 });
  const [endCoords, setEndCoords] = useState({ line: 1, column: 1 });

  const maze = useMemo(() => {
    return mazeList.find((maze) =>
      maze.starts.some(
        (start) =>
          start.line === mazeIdentifierCoords.line &&
          start.column === mazeIdentifierCoords.column
      )
    );
  }, [mazeIdentifierCoords]);

  return (
    <div className="maze-game">
      <div className="maze-game-form">
        <h3>Maze identifier</h3>
        <label>Colonne</label>
        <input
          type="number"
          min={1}
          max={6}
          value={mazeIdentifierCoords.column}
          onChange={(e) =>
            setMazeIdentifierCoords({
              ...mazeIdentifierCoords,
              column: parseInt(e.target.value)
            })
          }
        />
        <label>Line</label>
        <input
          type="number"
          min={1}
          max={6}
          value={mazeIdentifierCoords.line}
          onChange={(e) =>
            setMazeIdentifierCoords({
              ...mazeIdentifierCoords,
              line: parseInt(e.target.value)
            })
          }
        />
      </div>
      {maze && (
        <div className="maze-zone">
          <div className="maze-image">
            <img src={"/mazes" + maze.url} alt="maze image " />
            <div
              className="start-point-zone"
              style={{
                left: `calc(${startCoords.column - 1} * 100% / 6)`,
                top: `calc(${startCoords.line - 1} * 100% / 6)`
              }}
            >
              <div className="start-point">Start</div>
            </div>
            <div
              className="end-point-zone"
              style={{
                left: `calc(${endCoords.column - 1} * 100% / 6)`,
                top: `calc(${endCoords.line - 1} * 100% / 6)`
              }}
            >
              <div className="end-point">End</div>
            </div>
          </div>
          <div className="maze-inputs">
            <div className="maze-input-start">
              <h3>Start</h3>
              <label>Colonne</label>
              <input
                type="number"
                min={1}
                max={6}
                value={startCoords.column}
                onChange={(e) =>
                  setStartCoords({
                    ...startCoords,
                    column: parseInt(e.target.value)
                  })
                }
              />
              <label>Ligne</label>
              <input
                type="number"
                min={1}
                max={6}
                value={startCoords.line}
                onChange={(e) =>
                  setStartCoords({
                    ...startCoords,
                    line: parseInt(e.target.value)
                  })
                }
              />
            </div>
            <div className="maze-input-end">
              <h3>End</h3>
              <label>Colonne</label>
              <input
                type="number"
                min={1}
                max={6}
                value={endCoords.column}
                onChange={(e) =>
                  setEndCoords({
                    ...endCoords,
                    column: parseInt(e.target.value)
                  })
                }
              />
              <label>Ligne</label>
              <input
                type="number"
                min={1}
                max={6}
                value={endCoords.line}
                onChange={(e) =>
                  setEndCoords({
                    ...endCoords,
                    line: parseInt(e.target.value)
                  })
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
