import './App.css';
import Clusters from './Components/Clusters';
import Header from './Components/Header';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        
        <Switch>

          <Route exact path="/">
            <Home />
            <Element name="secondInsideContainer" style={{
              marginBottom: '200px'
            }}><Clusters />
            </Element>
            
          </Route>

        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
