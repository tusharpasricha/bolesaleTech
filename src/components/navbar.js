import React , { useContext }  from 'react'
import AuthContext from '../stores/AuthContext';
import './navbar.css'
const Navbar= () => {

    const { logout } = useContext(AuthContext);

  const logoutHandler = () => {
        logout().then(() => {
            console.log('Logout Successful');
        }).catch(err => {
            console.log(err);
        })
    }
  return (
    <div className='navbar'>
      <div> BOLESALE

      </div>
      <button onClick={logoutHandler}>Logout</button>
        
    </div>
  )
}

export default Navbar
