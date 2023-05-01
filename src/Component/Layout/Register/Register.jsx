import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/_AuthProviders';
const Register = () => {
  const {user,createUser}=useContext(AuthContext);
  const HandleRegister=event=>{
    event.preventDefault();
    const form=event.target;
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    console.log(name,email,password);
    createUser(email,password)
    .then(result=>{
      form.reset()
      const LoggedUser=result.user;
      console.log(LoggedUser);
     
    }).catch((err)=>{
      console.log(err);
    })
   
  }

   
  return (
  
    <div className="min-h-screen hero bg-base-200">
    <div className="flex flex-col hero-content-col">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bol">Register Form</h1>
      </div>
      <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
        <form className="card-body"  onSubmit={HandleRegister}>
        <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" 
        className="input input-bordered" name='name' 
        id='name' required/>
          </div>
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
              <Link to="/login" className="label-text-alt link link-hover">
              Already have an account?</Link>
            </label>
          </div>
          <div className="mt-6 form-control">
            <button className="btn btn-primary">
            Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register
