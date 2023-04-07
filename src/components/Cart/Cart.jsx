import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash ,faArrowRight} from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const {cart}=props;
    // console.log('cart',cart)
    let total=0;
    let shippingTotal=0;
    let quantity=0;
    for(let product of cart){
        product.quantity=product.quantity||1;
        shippingTotal=shippingTotal+product.shipping;
        quantity=quantity+product.quantity;
        total=total+product.price*quantity;
    }
    const tax=(total*7/100);
    const grandTotal=(total+tax+shippingTotal);
    return (
        <div className='cart'>
            <h5>order summary</h5>
            <p>selected length:{cart.length}</p>
            <p>Total-price:${total}
            </p>
            <p>Total-shipping:{shippingTotal}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>quantity:{quantity}</p>
            <h6>Grand Total:{grandTotal.toFixed(2)}</h6>
            <button className='btn-clear'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
            <button className='btn-review'>Review order <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Cart;