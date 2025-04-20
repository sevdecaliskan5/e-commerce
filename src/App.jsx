import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/slices/categorySlice";

import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import BlogPage from "./pages/BlogPage";
import ShopPage from "./pages/ShopPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProductDetailPage from "./pages/ProductDetailPage";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import CartPage from "./pages/CartPage";
import ProtectedPage from "./pages/ProtectedPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shopping" exact>
        <ShopPage/>
        </Route>
        <Route path="/shopping/:gender?/:category?" exact>
          <ProductListPage />
        </Route>
        <Route path="/product/:id" exact>
          <ProductDetailPage />
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
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
        <Route exact path="/team">
          <TeamPage />
        </Route>
        <Route path="/cart" exact>
          <ProtectedPage PageComponent={CartPage} fromURL={"/cart"} />
        </Route>
        <Route path="/order" exact>
          <OrderPage />
        </Route>
        <Route path="/payment" exact>
          <PaymentPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


// :productId/:productNameSlug