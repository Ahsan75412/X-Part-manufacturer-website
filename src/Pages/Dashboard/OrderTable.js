import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const OrderTable = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(
                `https://polar-dusk-79749.herokuapp.com/orders?email=${user.email}`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
                .then((res) => {
                    console.log("res", res);
                    return res.json();
                })
                .then((data) => {
                    if (data) {
                        setMyOrders(data);
                        console.log(data);
                    }
                });
        }
    }, [user]);

    return (
        <div>
            <div>
                <h2 className="font-bold text-2xl py-5">
                    My Orders: {myOrders.length}
                </h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrders.map((order, index) => (
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.productName.slice(0, 20)}</td>
                                    <td>{order.quantity}</td>
                                    <td>${order.price}</td>

                                    <td>
                                        {order.price && !order.paid && (
                                            <Link to={`/dashboard/myOrders`}>
                                                <button className="btn btn-xs btn-success">
                                                    Pay Now
                                                </button>
                                            </Link>
                                        )}
                                        {order.status === "paid" && (
                                            <div>
                                                <p>
                                                    <span className="text-success">
                                                        Paid
                                                    </span>
                                                </p>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {order.status === "paid" && (
                                            <p>Shipped</p>
                                        )}
                                        {order.status !== "paid" && (
                                            <p>Pending Approval</p>
                                        )}

                                        {order.price && !order.paid && (
                                            <p>Not Paid yet</p>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderTable;
