import React from 'react'

import './comment.css'

const Comment = ({name, comment}) => {
    return (
        <div className='post'>
            <div className='postName'><span className='postNameSpan'>from</span> {name}:</div>
            <div className='postText'>"{comment}"</div>
        </div>
    )
}

export default Comment