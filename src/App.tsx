import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
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
import Page from "./components/Page";
import LogosGame from "./routes/LogosGame";
import WordsGridGame from "./routes/WordsGridGame";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/button-game",
    element: (
      <Page>
        <ButtonGame />
      </Page>
    )
  },
  {
    path: "/string-game",
    element: (
      <Page>
        <StringGame />
      </Page>
    )
  },
  {
    path: "/password-game",
    element: (
      <Page>
        <PasswordGame />
      </Page>
    )
  },
  {
    path: "/simon-game",
    element: (
      <Page>
        <SimonGame />
      </Page>
    )
  },
  {
    path: "/sequence-fils-game",
    element: (
      <Page>
        <SequenceFilsGame />
      </Page>
    )
  },
  {
    path: "/morse-game",
    element: (
      <Page>
        <MorseGame />
      </Page>
    )
  },
  {
    path: "/memory-game",
    element: (
      <Page>
        <MemoryGame />
      </Page>
    )
  },
  {
    path: "/complex-strings-game",
    element: (
      <Page>
        <ComplexStrings />
      </Page>
    )
  },
  {
    path: "/molettes-mini-game",
    element: (
      <Page>
        <MolettesMiniGame />
      </Page>
    )
  },
  {
    path: "/logos-game",
    element: (
      <Page>
        <LogosGame />
      </Page>
    )
  },
  {
    path: "/words-grid-game",
    element: (
      <Page>
        <WordsGridGame />
      </Page>
    )
  }
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
