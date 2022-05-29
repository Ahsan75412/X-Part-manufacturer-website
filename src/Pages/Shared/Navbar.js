import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

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
    return (
        <div>
            <div className="navbar  bg-secondary text-white px-10">
                {location.pathname.includes("/dashboard") ? (
                    <div className=" navbar-start  block lg:hidden">
                        <label
                            for="my-drawer-2"
                            tabIndex="0"
                            className="btn-ghost  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                    </div>
                ) : (
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost btn-circle"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex="0"
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
                            >
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                {user && (
                                    <li>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                )}
                                <li className="block lg:hidden">
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
                        </div>
                    </div>
                )}

                <div className="navbar-center">
                    {location.pathname === "/dashboard" ? (
                        <h1 className="font-bold text-2xl">Dashboard</h1>
                    ) : (
                        <Link
                            to="/"
                            className=" normal-case text-3xl"
                            style={{ fontFamily: "acme" }}
                        >
                            {" "}
                            X- <span className="text-primary">Part</span>
                        </Link>
                    )}
                </div>
                <div className="navbar-end">
                    <ul className="hidden lg:block ">
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;