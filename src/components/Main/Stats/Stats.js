import React from 'react'
import StatsBg from './StatsBg/StatsBg'

import './stats.css'
import StatsInfo from './StatsInfo/StatsInfo'

function Stats() {
    return (
        <div className="about-stories">
            <div className="container">
                <div className="about-stories__wrapper">

                    <StatsBg />

                    <StatsInfo />

                </div>
            </div>
        </div>
    )
}

export default Stats