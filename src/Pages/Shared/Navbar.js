import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading />;
    }
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    console.log(user);

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
       
        {user && (
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        )}
        <li className="block lg:hidden ">
            {user ? (
                <button
                    className="btn btn-link"
                    onClick={logout}
                >
                    Sign Out
                </button>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </li>
        <ul className="hidden lg:block text-primary">
                        <li>
                            {user ? (
                                <button
                                    className="btn btn-link"
                                    onClick={logout}
                                >
                                    Sign Out
                                </button>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </li>
                    </ul>

                    <div
                        className={
                            user
                                ? "avatar online ml-4 hidden lg:block"
                                : "avatar online ml-4 hidden"
                        }
                    >
                        {user ? (
                            <div className="w-10 rounded-full ">
                                <img src={user?.photoURL} alt="" />
                            </div>
                        ) : (
                            <p className="hidden lg:hidden"></p>
                        )}
                    </div>

        {/* <li>{user ? <button className="btn btn-ghost"  onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li> */}
    </>
    return (
        <div className="navbar bg-base-100 px-12 text-white font-bold bg-accent sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
                <a className="normal-case font-bold text-xl">X-<span className='text-neutral'>Part</span></a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;