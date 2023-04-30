import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const LogIn = () => {
    const {signIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    console.log(location);
    const from=location.state?.from?.pathname
    ||"/";
    const handleSignIn=(event)=>{
            event.preventDefault();
            const form=event.target;
            const email=form.email.value;
            const password=form.password.value;
            signIn(email,password)
            .then(result=>{
                const loggedUser=result.user;
                console.log(loggedUser)
                form.reset()
                navigate(from,{replace:true})
            })
            .catch(error=>{
                console.log(error.message)
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <button className='btn-login' type="submit">Login</button>
            </form>
            <p><small>New to ema-john? <Link to={"/signup"}>Create new account</Link></small></p>
        </div>
    );
};

export default LogIn;