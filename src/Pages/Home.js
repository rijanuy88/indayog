// https://www.npmjs.com/package/react-apexcharts
import React from 'react'
import './Home.css'
import Sidebar from '../Components/Home/Sidebar'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Charts from '../Components/Home/Charts';
import sample from '../Assets/Photos/0o32014/one.jpeg'

function Home() {
    // image gallery
    const images = [
        {
            // original: 'https://picsum.photos/id/1018/1000/600/',
            // original: `src: ${sample}`,
            original: `${sample}`,
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    return (
        <div className='home'>
            <Sidebar />
            <div className="home_body">
                <div className="home_gallery">
                    <h2>Fiesta Through the Years</h2>
                    <ImageGallery items={images} />
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
