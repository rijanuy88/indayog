import './App.css';
import Clusters from './Components/Clusters';
import Navbar from './Components/Navbar';
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
      
      {/* <Router>
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
        
      </Router> */}
      <main id='home'>
            <Navbar />
            <section className='home'>
                <Home />
            </section>
            <section className='clusters' id='clusters'>
                <Clusters />
            </section>
            <section className='schedule' id='schedule'>
                <h1>Schedule</h1>
            </section>
            <section className='samahanTv' id='samahanTv'>
                <h1>SAMAHAN TV</h1>
            </section>
            <section className='fiestaTWG' id='fiestaTWG'>
                <h1>Fiesta TWG</h1>
            </section>
            <section className='rest'></section>
        </main>
    </div>
  );
}

export default App;
