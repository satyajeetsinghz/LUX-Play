import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/App.css"
import { episodes } from "./components/episodes";
import MainDisplayPage from "./components/MainDisplayPage";

function App() {

  return (
    <Router >
      <>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<MainDisplayPage />} />

          {/* Dynamically render episode components */}
          {episodes.map((episode) => (
            <Route key={episode.id} path={episode.link} element={<episode.component />} />
          ))}
        </Routes>
      </>
    </Router>
  )
}

export default App
