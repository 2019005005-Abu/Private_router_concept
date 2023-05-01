import React, { useContext } from 'react'
import { AuthContext } from '../Provider/_AuthProviders'
import { AuthContext_2 } from '../Provider/_AuthProvider_2';
const Home = () => {
  const {user}=useContext(AuthContext);
  const user_2=useContext(AuthContext_2);
  return (
    <div>
      <h1>This is Home{user && <span>{user.displayName}</span>}
       <p> I am  {user_2 && <span> {user_2.name}</span>}</p> 
      </h1>
    </div>
  )
}

export default Home
