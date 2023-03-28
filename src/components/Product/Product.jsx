import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    console.log(props)
    return (
        <div className='card'>
            <img src={img ? img : "no-image"} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>Manufacturer:{seller}</p>
                <p>Rating:{ratings}stars</p>
            </div>
            <button className='btn'>Add to Cart</button>
        </div>
    );
};

export default Product;