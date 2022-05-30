import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";

import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80  text-base-content bg-gray-200">
                    {admin ? (
                        <>
                            <li>
                                <Link to="/dashboard/users">All Users</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addProduct">
                                    Add Product
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/orders">Orders</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manage">
                                    Manage Products
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">Order List</Link>
                            </li>
                            {
                                <li>
                                    <Link to="/dashboard/myOrders">
                                        My Order
                                    </Link>
                                </li>
                            }
                            <li>
                                <Link to="/dashboard/review">Add Review</Link>
                            </li>
                        </>
                    )}
                    <li>
                        {user ? (
                            <button className="btn btn-link" onClick={logout}>
                                Sign Out
                            </button>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
