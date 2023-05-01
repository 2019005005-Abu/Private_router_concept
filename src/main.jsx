import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import _AuthProvider_2 from './Component/Layout/Provider/_AuthProvider_2.jsx'
import _AuthProviders from './Component/Layout/Provider/_AuthProviders.jsx'
import Home from './Component/Layout/Home/Home.jsx'
import Main from './Component/Layout/Main.jsx'
import LogIn from './Component/Layout/LogIng/LogIn.jsx'
import Register from './Component/Layout/Register/Register.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Order from './Component/Layout/Order/Order.jsx'
import _Private_route from './routes/_Private_route.jsx'
import User_Profile from './User_Profile/User_Profile.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },{
        path:'/login',
        element:<LogIn></LogIn>
      },{
        path:'/register',
        element:<Register></Register>
      },{
        path:'/orders',
        element:<_Private_route><Order></Order></_Private_route>
      },{
        path:'/user_profile',
        element:<_Private_route><User_Profile></User_Profile></_Private_route>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <_AuthProvider_2>
    <_AuthProviders>
    <RouterProvider router={router}>
    </RouterProvider>
    </_AuthProviders>
    </_AuthProvider_2>
  </React.StrictMode>,
)
