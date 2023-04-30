import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash ,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
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
    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product product={product} key={product.id}handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart handleClearCart={handleClearCart} cart={cart}>
                    <div>
                        <Link to={'/orders'}>
                            <button className='btn-review'><span>Review order </span><FontAwesomeIcon icon={faArrowRight} /></button>
                        </Link>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;