import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../stores/AuthContext';

const Signup = () => {

    const { signup } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigation = useNavigate();

    const submitHandler = (e) => {

        e.preventDefault();
        setError('');

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        console.log(name, email, password, confirmPassword);

        if (password === confirmPassword) {
            signup(email, password).then(user => {
                console.log(user);
                console.log('Signup Successful');
                navigation('/dashboard');
            }).catch(err => {
                setError('Signup Failed');
                console.log(err);
            });
        }

    }

    return (
        <div className='signup'>
            {error && <div>{error}</div>}
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" />
                </div>
                <button type="submit">Signup</button>
            </form>
            <p>have a account <Link to="/">Login</Link></p>
        </div>
    );

}

export default Signup;