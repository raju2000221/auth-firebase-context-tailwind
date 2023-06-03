import React, { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContex);
    return (
        <div>
            <h2>this is home  {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;