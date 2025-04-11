import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import BlogPage from "./pages/BlogPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/pricing">
          <PricingPage />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
        <Route exact path="/team">
          <TeamPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


