import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {
    const{product,deleteCart}=props;
    const {id,img,name,price,quantity}=product;
    return (
        <div className='review-item'>
            <img src={img?img:'https://www.pinkvilla.com/imageresize/v_proof_main.jpg?width=752&t=pvorg'} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price:<span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button className='btn-delete' onClick={()=>deleteCart(id)}><FontAwesomeIcon className='delete-icon' icon={faTrash} /></button>
        </div>
    );
};

export default ReviewItem;