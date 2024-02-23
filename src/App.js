import "./App.css";
import SuperJump from "./SuperJump";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<SuperJump />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
