import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigationbar from "./components/Navbar";
import AboutUsPage from "./components/AboutUsPage";
import Homepage from "./components/Homepage";
import Productpage from "./components/Productpage";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";
import SuccessPage from "./components/SuccessPage";
import CancelledPage from "./components/CancelledPage";
import { useState } from "react";

function App() {
  const [cartShow, setcartShow] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navigationbar handlecartmodal={() => setcartShow(true)} />

        <Switch>
          <Route path="/success">
            <SuccessPage />
          </Route>
          <Route path="/cancelled">
            <CancelledPage />
          </Route>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/products">
            <Productpage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <CartModal show={cartShow} onHide={() => setcartShow(false)} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
