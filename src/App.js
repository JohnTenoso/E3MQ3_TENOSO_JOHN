import './App.css';
import Nav from './webtools/navbar';
import Home from './webtools/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="container">
      <Nav user = {'John Teñoso'}/>
      <Switch>
        <Route path = '/'exact component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;