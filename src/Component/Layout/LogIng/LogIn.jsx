import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/_AuthProviders';
const LogIn = () => {
  const {SignIn ,signInWithGoogleProvider }=useContext(AuthContext);
    const handleLogIn=event=>{
        event.preventDefault();
        let form=event.target;
        let email=event.target.email.value;
        let password=event.target.password.value;
        SignIn(email,password)
        .then(result=>{
          let LoggedUser=result.user;
          console.log(LoggedUser);
          form.reset();
        }).catch((err)=>{
          console.log(err)
        })
        
      
    }
   
    const HandleLogInWithGoogle=()=>{
           signInWithGoogleProvider()
           .then(result=>{
            const  logUser=result.user;
            console.log(logUser);
           }).catch((err)=>{
            console.log(err);
           })
    }
  return (
    <div className="min-h-screen hero bg-base-200">
    <div className="flex-col hero-content ">
      <div className="text-center ">
        <h1 className="mb-4 text-5xl font-bold">Please LogIn</h1>
      </div>
      <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
        <form className="card-body" onSubmit={handleLogIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" 
            className="input input-bordered" name='email' 
            id='email' required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" 
            className="input input-bordered"  name='password' 
            id='password' required/>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="mt-6 form-control">
            <button className="p-3 text-white border btn-warning hover:bg-pink-500" value="submit">Login</button>
          </div>
        </form>
         <Link to='/register'>
         <button className="btn btn-active btn-link">
          <h6 className='text-1xl'>New to Auth Master ?Please React</h6>
         </button>
         </Link>
         <div>
         <button className=" btn btn-warning flex-center" 
         onClick={HandleLogInWithGoogle}>Google</button>
         </div>
      </div>
    </div>
  </div>
  
  )
}

export default LogIn
