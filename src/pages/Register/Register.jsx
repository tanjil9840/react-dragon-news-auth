import React, { useContext, useEffect } from 'react';
import Navbar from '../Shared/Navbar';
import {Link} from 'react-router-dom'
import { AuthContext } from '../Shared/Providers/AuthProvider';


const Register = () => {

  const {createUser}= useContext(AuthContext);


    const handleRegister = e=>{
        e.preventDefault();
        // const email = e.target.email.value;
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        // console.log(form.get('password'))
        const name= form.get('text');
        const email=form.get('email')
        const password=form.get('password')
        const photo=form.get('photo')
      // console.log(name, email,photo,password)
    


      createUser(email, password)
      .then(Result=>{
        console.log(Result.user)
      })
      .catch(error=>{
        console.log(error)
      })
       
    }    

    return (
        <div>
        <Navbar> </Navbar>

       <div>
       <h2 className='text-3xl text-center my-10' >Please Register </h2>
          <form onSubmit={handleRegister} className=' lg:w-1/2 md:w-3/4 mx-auto ' >  
          <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" name='text' placeholder="Your Name" className="input input-bordered" required />
              </div>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
         </form>
         <p className='text-center mt-4 ' >Don't have an account <Link className='text-blue-600 font-bold' to='/login' > Login </Link> </p>
       </div>
     </div>
    );
};

export default Register;