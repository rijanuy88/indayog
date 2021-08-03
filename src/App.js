import React from 'react';
import Clusters from './Pages/Clusters';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import TWG from './Pages/TWG';
import Schedule from './Pages/Schedule';
import Tv from './Pages/Tv';

function App() {
    const [tabValue, setTabValue] = React.useState(0);

    return (
        <div className="App">
            <main id='home'>
                <Navbar tabValue={tabValue} setTabValue={setTabValue} />
                <section className='home'>
                    <Home onEnterViewport={() => setTabValue(0)} />
                </section>
                <section className='clusters' id='clusters'>
                    <Clusters onEnterViewport={() => setTabValue(1)} />
                </section>
                <section className='schedule' id='schedule'>
                    {/* <h1>Schedule</h1> */}
                    <Schedule onEnterViewport={() => setTabValue(2)} />
                </section>
                <section className='samahanTv' id='samahanTv'>
                    {/* <h1>SAMAHAN TV</h1> */}
                    <Tv onEnterViewport={() => setTabValue(3)} />
                </section>
                <section className='fiestaTWG' id='fiestaTWG'>
                    {/* <h1>Fiesta TWG</h1> */}
                    <TWG onEnterViewport={() => setTabValue(4)} />
                </section>
                <section className='rest'></section>
            </main>
        </div>
    );
}

export default App;
