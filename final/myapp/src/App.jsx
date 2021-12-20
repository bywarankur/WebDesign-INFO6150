import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Gallary from "./components/Gallary";
import Carousel from "./components/Carousel";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Accordion from "./components/Accordion";
import Policy from "./pages/Policy";

import FAQ from "./components/FAQ";
import Accordion2 from "./components/Accordion2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div id="main"> 
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/Accordion" component={Accordion} />
            <Route path="/Gallary" component={Gallary} />
            <Route path="/Policy" component={Policy} />

            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
