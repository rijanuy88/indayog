import React from 'react'
import Cards from '../Components/Clusters/Cards'
import './Clusters.css'

function Clusters() {
    
    return (
        <div className='clusters'>
            <div className="clusters_images">
                <Cards img="https://venngage-wordpress-gallery.s3.amazonaws.com/uploads/2018/10/25.jpg" alt="ACC" title='Accountancy'/>
                <Cards img="https://picsum.photos/id/1018/1000/600/" alt="BM" title ='Business & Management'/>
                <Cards img="https://picsum.photos/id/1018/1000/600/" alt="CS" title ='Computer Studies'/>
                <Cards img="https://picsum.photos/id/1018/1000/600/" alt="HumLet" title ='Humanities & Letters'/>
                <Cards img="https://picsum.photos/id/1018/1000/600/" alt="NSM" title ='Natural Sciences & Mathematics'/>
                <Cards img="https://picsum.photos/id/1018/1000/600/" alt="SEA" title ='School of Engineering & Architecture'/>
                <Cards img="https://picsum.photos/id/1018/1000/600/" alt="SOE" title ='School of Education'/>
                <Cards img="https://picsum.photos/id/1018/1000/600/" alt="SON" title ='School of Nursing'/>
                <Cards img="https://picsum.photos/id/1018/1000/600/" alt="SS" title ='Social Sciences'/>
            </div>
            
        </div>
    )
}

export default Clusters
