import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash ,faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const savedCart=useLoaderData()
    const [cart,setCart]=useState(savedCart);
    const deleteCart=(id)=>{
        const filterData=cart.filter(product=>product.id!=id);
        setCart(filterData);
        removeFromDb(id)
    }
    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                
                {
                    cart.map(product=><ReviewItem product={product} deleteCart={deleteCart} key={product.id}></ReviewItem>)
                }
                
            </div>
            <div className='cart-container'>
                <Cart handleClearCart={handleClearCart} cart={cart}>
                    <div>
                        <Link className='processed-link'  to={'/checkout'}>
                            <button className='btn-review'><span>Proceed Checkout</span><FontAwesomeIcon icon={faArrowRight} /></button>
                        </Link>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;