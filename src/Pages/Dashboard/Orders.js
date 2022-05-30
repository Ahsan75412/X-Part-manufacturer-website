import React, { useEffect, useState } from "react";
import OrderCard from "../OrderCard/OrderCard";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(true);

    useEffect(() => {
        fetch("https://polar-dusk-79749.herokuapp.com/allOrders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                setStatus(false);
            });
    }, [status]);

    const handleDelete = (id) => {
        const warning = window.confirm(
            "Are you sure\nYou want to delete this order..!?"
        );

        if (warning) {
            const url = `https://polar-dusk-79749.herokuapp.com/orders/${id}`;
            fetch(url, { method: "DELETE" })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(
                            (order) => order._id !== id
                        );
                        setOrders(remaining);
                    }
                });
        }
    };
    const handleApprove = (id, index) => {
        const warning = window.confirm("Ship This Boat..!?");

        if (warning) {
            fetch(
                `https://polar-dusk-79749.herokuapp.com/orders/status/${id}`,
                {
                    method: "PUT",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        alert("Product Shipped...!!!");
                        setStatus(false);
                    }
                });
        }
    };

    return (
        <div>
            {orders[0] ? (
                <h2 className="font-bold text-2xl text-center p-10">
                    Total Orders: {orders.length}
                </h2>
            ) : (
                <h2 className="font-bold text-2xl text-center p-10">
                    No Orders Yet
                </h2>
            )}
            {orders.map((order, index) => (
                <OrderCard key={order._id} product={order}>
                    <div>
                        <div className="flex">
                            <p>
                                Status: &nbsp;
                                {order.paid !== true ? (
                                    <span className="text-primary">
                                        {order.status}
                                    </span>
                                ) : (
                                    <span className="text-success">
                                        {order.status}
                                    </span>
                                )}
                            </p>
                        </div>

                        <button
                            onClick={() => handleApprove(order._id, index)}
                            className="btn btn-success"
                            disabled={order.status === "paid"}
                        >
                            <i className="fas fa-check"></i> &nbsp;
                            {order.paid === false
                                ? "Approve Booking"
                                : "Shipped"}
                        </button>
                        <button
                            onClick={() => handleDelete(order._id)}
                            className="btn btn-error"
                            disabled={order.status === "paid"}
                        >
                            <i className="far fa-trash-alt"></i> &nbsp;Delete
                            Order
                        </button>
                    </div>
                </OrderCard>
            ))}
        </div>
    );
};

export default Orders;
