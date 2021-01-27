import "./App.css";
import { Route, Switch } from "react-router";
import { Counter } from "./pages/Counter";
import OtherPage from "./pages/OtherPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/counter" exact>
          <Counter />
        </Route>
        <Route path="/page">
          <OtherPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
