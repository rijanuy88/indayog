import React from 'react'
import Youtube from './Youtube'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Episode({ embedId, episode, description }) {
    return (
        <Grid container>
            <Grid item xs>
                <Youtube embedId={embedId} />
            </Grid>
            <Grid item xs>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h4">{episode}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{description}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Episode
