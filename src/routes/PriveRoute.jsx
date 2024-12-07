import React, {  useContext } from 'react';
import { AuthContext } from '../pages/Shared/Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PriveRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children 
    }
    return <Navigate state={location.pathname} to='/login' > </Navigate>
}

export default PriveRoute;