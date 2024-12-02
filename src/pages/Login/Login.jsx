import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Shared/Providers/AuthProvider';
import { Result } from 'postcss';

const Login = () => {
  const {signIn}= useContext(AuthContext);


    const handleLogin = e=>{
        e.preventDefault();
        // const email = e.target.email.value;
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email =form.get('email')
        const password=form.get('password')
       console.log(email,password)
       signIn(email,password)
       .then(Result=>{
        console.log(Result)
       })
       .catch(error=>{
        console.log(error)
       })
         

    }
    return (
     <div>
        <Navbar> </Navbar>

       <div>
       <h2 className='text-3xl text-center my-10' >Please Login </h2>
          <form onSubmit={handleLogin} className=' lg:w-1/2 md:w-3/4 mx-auto ' >  
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
         </form>
         <p className='text-center mt-4 ' >Alredy have an account please.. <Link className='text-blue-600 font-bold' to='/register' > Register </Link> </p>
       </div>
     </div>
    );
};

export default Login;