import React from 'react'
import SliderContent from './SliderContent/SliderContent'
import SliderPhoto from './SliderPhoto/SliderPhoto'

import './slideritem.css'

const SliderItem = ( {
    image,
    title,
    text
} ) => {
    return(
        <div className='slider-item'>
    
        <SliderPhoto image={image}/>

        <SliderContent title={title} text={text}/>
        
    </div>
    )
}

export default SliderItem