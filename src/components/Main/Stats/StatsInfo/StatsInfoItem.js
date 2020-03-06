import React from 'react'

import './statsinfoitem.css'

const StatsInfoItem = ({
    number,
    ofWhat
}) => {
    return (
      
            <div className="about-stories__stat">
                <div className='about-stories__stat-item'><span>{number}</span>
                <div>{ofWhat}</div>
            </div>
      </div>
    )
}


export default StatsInfoItem