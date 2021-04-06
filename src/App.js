import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import PortfolioTwo from "./components/pages/PortfolioTwo";
import PortfolioThree from "./components/pages/PortfolioThree";
import PortfolioFour from "./components/pages/PortfolioFour";
import BlogPost from "./components/pages/BlogPost";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio-two" component={PortfolioTwo} />
        <Route path="/portfolio-three" component={PortfolioThree} />
        <Route path="/portfolio-four" component={PortfolioFour} />
        <Route path="/blog-post" component={BlogPost} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
