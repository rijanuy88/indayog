import './App.css';
import Clusters from './Components/Clusters';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      {/* routes */}
      <Header />
      <Home />
      {/*  */}
      <Clusters />
      
    </div>
  );
}

export default App;
