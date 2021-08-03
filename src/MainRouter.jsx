import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function MainRouter() {
  return (
    <Router>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component ={About} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
