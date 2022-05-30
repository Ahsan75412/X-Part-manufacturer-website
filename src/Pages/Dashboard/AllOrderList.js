import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllOrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allOrders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, []);
    return (
        <div className="p-10">
            <div>
                <h2 className="font-bold text-2xl py-5 text-center">
                    My Orders: {orders.length}
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
                            {orders.map((order, index) => (
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.productName.slice(0, 20)}</td>
                                    <td>{order.quantity}</td>
                                    <td>${order.price}</td>

                                    <td>
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

export default AllOrderList;
