import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="row d-flex flex-column flex-md-row px-md-4 bg-white border-bottom shadow-sm custom-height">
          <h5 className="my-0 mr-md-auto font-weight-normal gree-box">
            <Link to="/">Janvier Mbilizi</Link>
          </h5>
          <nav className="my-md-0 mr-md-3 navbar-stuff">
            <Link className="p-2 text-dark" to="/">
              About
            </Link>
            <Link className="p-2 text-dark" to="/portfolio">
              Portfolio
            </Link>
            <Link className="p-2 text-dark" to="/contact">
              Contact
            </Link>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>

        <footer className="footer" id="footer">
          copyright@
        </footer>
      </div>
    </Router>
  );
}

export default App;
