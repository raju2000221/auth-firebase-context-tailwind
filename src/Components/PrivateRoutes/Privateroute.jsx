import React, { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loading} =useContext(AuthContex)

if(loading){
    return <progress className="progress w-56"></progress>
}

    if(user){
       
        return children;
        
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default Privateroute;