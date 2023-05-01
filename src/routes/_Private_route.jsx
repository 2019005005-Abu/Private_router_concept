import React, { useContext } from 'react'
import { AuthContext } from '../Component/Layout/Provider/_AuthProviders'
import { Navigate } from 'react-router-dom';

const _Private_route = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
     return  <progress className='w-56 progress'></progress>
    }
     if(user){
        return children;
     }
     else{
        return <Navigate to='/login' replace={true}>
        </Navigate>
     }
    }

  



export default _Private_route
