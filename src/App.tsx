/* ----- App.js ----- */
import React from "react";
import "./App.scss";

// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Minting from "./components/Minting/Minting";
import Tasks from "./components/Tasks/Tasks";
import Wallets from "./components/Wallets/Wallets";
import Notifications from "./components/Notifications/Notifications";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/stake" element={<p>Stake</p>} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/" element={<Minting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
