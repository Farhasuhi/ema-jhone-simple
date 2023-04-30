import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const signOut=()=>{
        logOut()
        .then(()=>{
            alert("successful")
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu'>
                {/* <a href="/">Home</a> */}
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/signup'>Sign Up</Link>
                {
                   user? <span className='text-white'>welcome {user.email} <button onClick={signOut}>Log out</button></span>:<Link to='/login'>Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;