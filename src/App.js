import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './page/About';
import Navbar from './page/components/Navbar';
import Home from './page/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
