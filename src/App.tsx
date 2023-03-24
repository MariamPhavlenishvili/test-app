import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Homepage from "./components/homepage";
import "./App.css";

function App() {
  return (
    <Router>
      <Homepage />
    </Router>
  );
}

export default App;
