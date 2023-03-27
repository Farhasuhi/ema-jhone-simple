import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css'
const Shop = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h2>Products coming here:{products.length}</h2>
                {
                    products.map(product=>console.log(product))
                }
            </div>
            <div className='cart-container'>
                <h4>Order summary</h4>
            </div>
        </div>
    );
};

export default Shop;