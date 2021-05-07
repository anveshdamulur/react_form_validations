import './App.css';
import Form from './Form';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <center>
        <h1>React Form Application</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={Nav} />
            <Route path="/register" component={Form} />
            <Route path="/login" component={Login}/>
          </Switch>        
        </Router>
      </center>
    </div>
  );
}

export default App;
