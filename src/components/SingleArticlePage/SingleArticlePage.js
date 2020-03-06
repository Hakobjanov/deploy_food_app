import React from 'react'
import foodPageArticlesData from '../FoodsPage/FoodPageContent/FoodPageContent/FoodPafeArticles/foodPageArticlesData'

const SingleArticlePage = () => {
    return (
        <div>
            {foodPageArticlesData.map(({
                id,
                image,
                category,
                year,
                title,
                text,
                author
            }) => (
                <div key={id} className='stories-little__item post-item article'>
                    <img className="post-img" src={image} alt={title} />
                    <div>{text}</div>
                    <div>{author}</div>

        <div className="stories-little__item-cat">
            <span>{category}</span>
            <span>{year}</span>
        </div>
        

        </div>
            ))
        }
    </div>
    )
}

export default SingleArticlePage