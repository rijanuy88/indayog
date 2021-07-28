// https://www.npmjs.com/package/react-apexcharts
import React from 'react'
import './Home.css'
import Sidebar from '../Components/Home/Sidebar'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Charts from '../Components/Home/Charts';
import { ImgGal } from '../Components/Home/ImgGal';


function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className="home_body">
                <div className="home_gallery">
                    <h2>Fiesta Through the Years</h2>
                    <ImageGallery items={ImgGal} />
                </div>
                <div className="home_charts">
                    <h2>Indayog 2021 Cluster Standing</h2>
                    <div className="home_chart">
                        <Charts />
                        {/* judging updates */}
                        <h3>Judging Updates</h3>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    )
}

export default Home
