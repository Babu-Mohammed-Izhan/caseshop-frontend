import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigationbar from './components/Navbar';
import AboutUsPage from './components/AboutUsPage';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [cartShow, setcartShow] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navigationbar handlecartmodal={() => setcartShow(true)} />


        <Switch>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/products">
            <Productpage cartShow={cartShow} setcartShow={setcartShow} />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
