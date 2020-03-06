const foodPageArticlesData = [
    {
        id: 1,
        image: './images/image_4.jpg',
        image2: './images/blog-2.jpg',
        category: 'desert',
        year: 2019,
        title: 'The single article page!',
        subTitle1: 'It is a long established fact a reader be distracted',
        subTitle2: '#2. Creative foods and deserts',
        p1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque molestias perspiciatis iusto error, reiciendis nemo incidunt, delectus voluptate eum quo enim soluta amet labore consequatur esse ut explicabo impedit fugiat. Molestiae provident blanditiis ipsam a, tenetur veritatis deleniti soluta quas voluptas asperiores laudantium excepturi, aut esse saepe fuga architecto vel! Incidunt praesentium atque laboriosam facilis blanditiis minus, eligendi hic facere? In, repudiandae commodi? In illum corporis iusto, numquam iure dolor rerum, dignissimos suscipit id facilis impedit pariatur? Molestiae quos est vel inventore officiis dolores, dolore rerum maiores possimus, assumenda aliquam. Eum assumenda adipisci ea officia et? Id aut eius sequi soluta nemo in, velit veritatis explicabo alias, dolorem tempora omnis dolore. Ducimus eligendi iure aspernatur consectetur officia esse obcaecati officiis.",
        p2: "Incidunt dignissimos officia labore recusandae inventore qui voluptatibus, natus debitis repellat iusto, laudantium error esse quibusdam tenetur totam ipsum nihil accusantium dolore saepe tempora. Vel quis at alias! Consequatur, laboriosam. Labore quam amet officia magni? Minima expedita, pariatur fugiat, nostrum quas voluptatem nobis ducimus deserunt, aspernatur quidem modi velit harum odio veritatis ab in esse doloribus necessitatibus. Minus, id repudiandae! Facilis est corporis deleniti sit distinctio aut deserunt illum itaque exercitationem. Pariatur incidunt rerum aliquid reiciendis voluptatibus eaque eligendi, mollitia odit, reprehenderit maxime ad autem molestias inventore omnis. Cum, et. Esse porro reiciendis recusandae, ipsa saepe corrupti, animi possimus voluptas id nobis suscipit adipisci, velit earum? Itaque et sunt reprehenderit officia, quod quasi fugiat debitis sint corrupti asperiores id! Eveniet.Facilis est corporis deleniti sit distinctio aut deserunt illum itaque exercitationem. Pariatur incidunt rerum aliquid reiciendis voluptatibus eaque eligendi, mollitia odit, reprehenderit maxime ad autem molestias inventore omnis. Cum, et. Esse porro reiciendis recusandae, ipsa saepe corrupti, animi possimus voluptas id nobis suscipit adipisci, velit earum? Itaque et sunt reprehenderit officia, quod quasi fugiat debitis sint corrupti asperiores id! Eveniet.",
        author: 'VahnJan'
    },
    {
        id: 2,
        image: './images/blog-2.jpg',
        category: 'desert',
        year: 2019,
        title: 'Tatsy & Delicious'
        
    },
    {
        id: 3,
        image: './images/blog-3.jpg',
        category: 'desert',
        year: 2019,
        title: 'Delicious Foods'
    },
    {
        id: 4,
        image: './images/blog-4.jpg',
        category: 'desert',
        year: 2019,
        title: 'Not So Delicious Foods'
    },
    {
        id: 5,
        image: './images/blog-5.jpg',
        category: 'soup',
        year: 2019,
        title: 'So Delicious Foods'
    },
    {
        id: 6,
        image: './images/blog-6.jpg',
        category: 'food',
        year: 2019,
        title: 'Delicious and tasty Foods'
    },
    {
        id: 7,
        image: './images/blog-7.jpg',
        category: 'food',
        year: 2019,
        title: 'So Delicious Foods'
    },
    {
        id: 8,
        image: './images/blog-8.jpg',
        category: 'food',
        year: 2019,
        title: 'So Delicious Foods'
    },
    {
        id: 9,
        image: './images/blog-9.jpg',
        category: 'soup',
        year: 2019,
        title: 'Tatsy & Not'
    },
    {
        id: 10,
        image: './images/blog-10.jpg',
        category: 'soup',
        year: 2019,
        title: 'Tatsy & Not'
    },
    {
        id: 11,
        image: './images/blog-11.jpg',
        category: 'soup',
        year: 2019,
        title: 'Tatsy & Not'
    },
    {
        id: 12,
        image: './images/about.jpg',
        category: 'soup',
        year: 2019,
        title: 'Tatsy & Not'
    },
    
]

export const getArticlesMap = (arr) => {
    return arr.reduce((accObj, article) => ({
        ...accObj,
        [article.id]: article,
    }), {})
}

const liked = JSON.parse(localStorage.liked || '[]');
foodPageArticlesData.forEach(article => article.isLiked = liked.includes(article.id)) 

export default foodPageArticlesData