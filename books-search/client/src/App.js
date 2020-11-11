import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import NotFound from "./pages/NotFound/NotFound";import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
          <Route path="/" component={NotFound} />
      </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
