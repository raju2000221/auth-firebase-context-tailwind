import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="ml-5" to="/">Home</Link>
                <Link className="ml-5" to="/login">Login</Link>
                <Link className="ml-5" to="/register">Register</Link>
                <Link className="ml-5" to="/orders">orders</Link>
                {user ? <>
                    <h1 className='mr-5 ml-auto'>{user.email}</h1>
                    <button onClick={handleLogout}>sign out</button>
                </>
                    : <Link className='mr-5 ml-auto' to="/login">login</Link>
                }
            </div>
        </div>
    );
};

export default Header;