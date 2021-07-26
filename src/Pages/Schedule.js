import React from 'react'
import './Schedule.css'

function Schedule() {
    return (
        <div className='schedule'>
            <div className="schedule_left">
                {/* character/element  */}
                <img src="https://venngage-wordpress-gallery.s3.amazonaws.com/uploads/2018/10/25.jpg" alt="element/character" />
            </div>
            <div className="schedule_right">
                <div className="schedule_right_top">
                    {/* fb link */}
                    <h3>live</h3>
                </div>
                <div className="schedule_right_bottom">
                    {/* sched day 123 */}
                </div>
            </div>
        </div>
    )
}

export default Schedule
