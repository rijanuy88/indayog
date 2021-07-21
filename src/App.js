import './App.css';
import Clusters from './Components/Clusters';
import Header from './Components/Header';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        
        <Switch>

          <Route exact path="/">
            <Home />
            <Clusters />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
