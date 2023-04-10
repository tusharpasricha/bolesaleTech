import React, { useContext } from 'react';
import AuthContext from '../stores/AuthContext';

const Dashboard = () => {

    const { logout } = useContext(AuthContext);

    const logoutHandler = () => {
        logout().then(() => {
            console.log('Logout Successful');
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='dashboard'>
            hello world
            <button onClick={logoutHandler}>Logout</button>
        </div>
    );

}

export default Dashboard;