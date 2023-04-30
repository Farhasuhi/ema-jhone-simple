import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const SignUp = () => {
    const [error,setError]=useState("")
    const{createUser}=useContext(AuthContext);

    const handleSignUp=(event)=>{
            event.preventDefault();
            setError("")
            const form=event.target;
            const email=form.email.value;
            const password=form.password.value;
            const confirm=form.confirm.value;
            console.log(email,password,confirm)
            if(password!=confirm){
                    setError("Password and confirm password are not matched")
                    return;
            }
            else if(password.length<6){
                setError("Passwords must be 6 characters or longer")
                return
            }
            createUser(email,password)
            .then(result=>{
                const loggedUser=result.user;
                console.log(loggedUser)
                form.reset()

            })
            .catch(error=>{
                setError(error.message)
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <div>
                    <p className='error'><small>{error}</small></p>
                </div>
                <button className='btn-login' type="submit" value="sign up">Sign Up</button>
            </form>
            <p><small>Already have an account? <Link to={"/login"}>Login</Link></small></p>

        </div>
    );
};

export default SignUp;