import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ButtonGame from "./routes/ButtonGame";
import Home from "./routes/Home";
import StringGame from "./routes/StringGame";
import PasswordGame from "./routes/PasswordGame";
import SimonGame from "./routes/SimonGame";
import SequenceFilsGame from "./routes/SequenceFilsGame";
import MorseGame from "./routes/MorseGame";
import MemoryGame from "./routes/MemoryGame";
import ComplexStrings from "./routes/ComplexStrings";
import MolettesMiniGame from "./routes/MolettesMiniGame";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/button-game",
    element: <ButtonGame />,
  },
  {
    path: "/string-game",
    element: <StringGame />,
  },
  {
    path: "/password-game",
    element: <PasswordGame />,
  },
  {
    path: "/simon-game",
    element: <SimonGame />,
  },
  {
    path: "/sequence-fils-game",
    element: <SequenceFilsGame />,
  },
  {
    path: "/morse-game",
    element: <MorseGame />,
  },
  {
    path: "/memory-game",
    element: <MemoryGame />,
  },
  {
    path: "/complex-strings-game",
    element: <ComplexStrings />,
  },
  {
    path: "/molettes-mini-game",
    element: <MolettesMiniGame />,
  },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
