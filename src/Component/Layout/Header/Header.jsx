import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/_AuthProviders'



const Header = () => {
  const {user,LogOut}=useContext(AuthContext);
  const HandleLogout=()=>{
    LogOut()
    .then(ressult=>{
       let LoggedOut=ressult.user;
       console.log(LoggedOut)
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
    <div className="navbar bg-primary text-primary-content">
    <a className="text-xl normal-case btn btn-ghost">daisyUI</a>
      <Link to='/' className='text-xl normal-case btn btn-ghost'>Home</Link>
      <Link to='/login' className='text-xl normal-case btn btn-ghost'>LogIn</Link>
      <Link to='/register'className='text-xl normal-case btn btn-ghost'>Register</Link>
      <Link to='/orders'className='text-xl normal-case btn btn-ghost'>Order</Link>
       {
        user && <Link to='/user_profile'className='text-xl normal-case btn btn-ghost'>Profile</Link>
       }

      {
        user ?
        <>
        <span>{user.email}</span>
        <button className='mx-6 btn btn-xs' onClick={HandleLogout}>
        Sign Out
        </button>
        </>:
        <Link to='/login'>LogIn</Link>
       }
     </div>
    
    </div>
  )
}

export default Header
