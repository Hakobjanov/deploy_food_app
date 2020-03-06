import React from 'react'

import './topic.css'

const Topic = ({name, quantity}) => {
    return (
        <div className='topic'>
                <div className="topic-name">{name}</div>
                <div className="topic-number">({quantity})</div>
        </div>
    )
}


export default Topic