import React , { useContext }  from 'react'
import AuthContext from '../stores/AuthContext';

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
    <div>
      <div>Bolesale Technology</div>
      <button onClick={logoutHandler}>Logout</button>
        
    </div>
  )
}

export default Navbar
