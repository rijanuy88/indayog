import React from 'react'
import Cards from '../Components/Clusters/Cards'
import { clustersData } from '../Components/Clusters/ClustersData'

import './Clusters.css'

function Clusters() {
    
    return (
        <div className='clusters'>
            <div className="clusters_images">
                {/* <Cards img="https://venngage-wordpress-gallery.s3.amazonaws.com/uploads/2018/10/25.jpg" alt="ACC" title='Accountancy'/> */}
                {clustersData.map((cluster) => {
                    return (
                        <Cards key={cluster.id} img={cluster.img} alt={cluster.alt} title={cluster.title} id={cluster.id} />
                    )
                })}
                
            </div>
            <div className="clusters_lower">
                <h2>INDAYOG 2021 CLUSTERS</h2>
                <h3>73rd Ateneo Fiesta</h3>
            </div>
            
        </div>
    )
}

export default Clusters
