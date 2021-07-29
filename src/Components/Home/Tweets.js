import React from 'react'
import { Timeline } from 'react-twitter-widgets'

function Tweets() {
    return (
        <div>
            {/* // Timeline (with options) */}
            <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'addusamahan'
            }}
            options={{
                height: '800',
                // theme: "dark",
            }}
            />
        </div>
    )
}

export default Tweets
