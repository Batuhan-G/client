import React from 'react'
import Card from '../Card/Card'
import './List.scss'

const List = () => {

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
    <div className='list'>
        {data?.map(item => (
            <Card item={item} key= {item.id} />
        ))}
    </div>
  )
}

export default List