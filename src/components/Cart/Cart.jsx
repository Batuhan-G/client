import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from "react-redux"
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest";

const Cart = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.products)

    const totalPrice = () => {
        let total = 0
        products.forEach((item) => (total += item.quantity * item.price))
        return total.toFixed(2)
    }

    const stripePromise = loadStripe(
        "pk_test_51Mb3d5CU2yX8dDauVHLHCM0MEjKQiImnBIniRB6bV4qWvbVpxu1AoicgTQRgL96a9a2erIEWVmaF5Pxw1XhIOaMK00HI5j6gxW"
    );


    const handlePayment = async () => {
        try {
            const stripe =await stripePromise

            const res = await makeRequest.post("/orders", {
                products,
            })

            await stripe.redirectToCheckout({
                sessionId:res.data.stripeSession.id,
            })

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {products?.map(item => (
                <div className="item" key={item.id}>

                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 30)}</p>
                        <div className="price">{item.quantity} x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className='reset' onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </div>
    )
}

export default Cart