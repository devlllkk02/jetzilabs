/* ----- App.js ----- */
import "./App.scss";

//Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Minting from "./components/Minting/Minting";
import Tasks from "./components/Tasks/Tasks";
import Wallets from "./components/Wallets/Wallets";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/stake" element={<p>Stake</p>} />
          <Route exact path="/wallets" element={<Wallets />} />
          <Route exact path="/tasks" element={<Tasks />} />
          <Route exact path="/" element={<Minting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
