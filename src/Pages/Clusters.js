import { Grid } from '@material-ui/core'
import React from 'react'
import Cards from '../Components/Clusters/Cards'
import { clustersData } from '../Components/Clusters/ClustersData'
import Typography from '@material-ui/core/Typography';

import './Clusters.css'

function Clusters() {
    
    return (
        <div className='clusters'>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                {/* <Grid item> */}
                    {clustersData.map((cluster) => {
                        return (
                            <Grid item>
                                <Cards key={cluster.id} img={cluster.img} alt={cluster.alt} title={cluster.title} id={cluster.id} />
                            </Grid>
                        )
                    })}
                {/* </Grid> */}

                <Grid item xs={12} container direction="column" justifyContent="center" alignItems="center">
                    <Typography variant="h2" style={{color: '#C9C9C9',marginTop:"30px"}}>INDAYOG 2021 CLUSTERS</Typography>
                    <Typography variant="h3" style={{color: '#FCBD6E', fontFamily:'america'}}>73rd Ateneo Fiesta</Typography>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Clusters
