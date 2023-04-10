import React, { useContext, useState } from 'react';
import AuthContext from '../stores/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigation = useNavigate();

    const submitHandler = (e) => {

        e.preventDefault();
        setError('');

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        login(email, password).then(user => {
            console.log("Logged In Successfully");
            navigation('/dashboard');
        }).catch(err => {
            setError('Cannot Logged in :(');
            console.log(err);
        })

    }

    return (
        <div className='login'>
            {error && <div>{error}</div>}
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>

                <button type="submit">Login</button>
            </form>
            <p>Want to signup <Link to="/signup">Signup</Link></p>
        </div>
    );

}

export default Login;