import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedData=getShoppingCart();
        const savedCart=[]
        for(const id in storedData){
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                const quantity=storedData[id];
                 addedProduct.quantity=quantity;
                savedCart.push(addedProduct)
            }
            // console.log(addedProduct)

        }
        setCart(savedCart)
    },[products])
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id)

    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product product={product} key={product.id}handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;