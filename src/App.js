import './App.css';
import Clusters from './Pages/Clusters';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import TWG from './Pages/TWG';
import Schedule from './Pages/Schedule';
import Tv from './Pages/Tv';

function App() {
    return (
        <div className="App">
            <main id='home'>
                <Navbar />
                <section className='home'>
                    <Home />
                </section>
                <section className='clusters' id='clusters'>
                    <Clusters />
                </section>
                <section className='schedule' id='schedule'>
                    {/* <h1>Schedule</h1> */}
                    <Schedule />
                </section>
                <section className='samahanTv' id='samahanTv'>
                    {/* <h1>SAMAHAN TV</h1> */}
                    <Tv />
                </section>
                <section className='fiestaTWG' id='fiestaTWG'>
                    {/* <h1>Fiesta TWG</h1> */}
                    <TWG />
                </section>
                <section className='rest'></section>
            </main>
        </div>
    );
}

export default App;
