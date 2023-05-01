import React, { createContext } from 'react'
 export const AuthContext_2=createContext(null);
const _AuthProvider_2 = ({children}) => {
    const MyInformation={
        name:"Abu Al Shahriar Rifat",
        profession:"Software Enginner"
    }
  return (
    <div>
      <AuthContext_2.Provider 
        value={MyInformation}>
         {children}
      </AuthContext_2.Provider>
    </div>
  )
}

export default _AuthProvider_2
