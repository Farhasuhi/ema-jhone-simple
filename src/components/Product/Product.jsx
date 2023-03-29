import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const {handleAddToCart}=props

    
    return (
        <div className='card'>
            <img src={img ? img : "no-image"} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>Manufacturer:{seller}</p>
                <p>Rating:{ratings}stars</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn'>Add to Cart  <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;