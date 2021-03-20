import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Navbar from "./components/Navbar"
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
