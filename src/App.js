import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Favourite } from "./pages/Favourite";
import { SinglePage } from "./pages/SinglePage";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/favourite">
            <Favourite />
          </Route>
          <Route path="/pokemons/:nam">
            <SinglePage />
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
