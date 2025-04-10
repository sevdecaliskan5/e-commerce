import HomePage from "./pages/HomePage";
import About from "./pages/About";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


