import React from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"
const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://picsum.photos/id/237/200/300",
            img2: "https://picsum.photos/id/236/200/300",
            title: "Title1",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://picsum.photos/id/235/200/300",
            img2: "https://picsum.photos/id/234/200/300",
            title: "Title2",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://picsum.photos/id/233/200/300",
            img2: "https://picsum.photos/id/232/200/300",
            title: "Title2",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://picsum.photos/id/231/200/300",
            img2: "https://picsum.photos/id/230/200/300",
            title: "Title2",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
    ]

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis dolore aut temporibus architecto, adipisci expedita
                    alias amet animi vero obcaecati placeat iusto, delectus
                    dolorem omnis?
                </p>
            </div>
            <div className="bottom">
                {data.map(item =>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts