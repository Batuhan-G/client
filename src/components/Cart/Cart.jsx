import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

const data = [
    {
        id: 1,
        img: "https://picsum.photos/id/237/200/300",
        img2: "https://picsum.photos/id/236/200/300",
        title: "Title1",
        desc: "It is a diibution of letters diibution of lette",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: "https://picsum.photos/id/235/200/300",
        img2: "https://picsum.photos/id/234/200/300",
        title: "Title2",
        desc: "It ractdistribution of letters",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
]

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data.map(item =>(
            <div className="item" key={item.id}>
        
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,30)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart