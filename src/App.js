import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MasterLayout from "./layouts/admin/Master.layout";

function App() {
  return (
    <div className="App">
      
      <Router>
          <Route path="/admin/dashboard" />
      </Router>

    </div>
  );
}

export default App;
