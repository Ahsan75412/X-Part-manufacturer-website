import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L4mFqKQIqqGSKoDEJ0UxwGD4U0AUW5Q6BCQg7CRusz8eahiNd3fF1XXVNOhscOqWKWrHl8g19VxjACRA3MY0gwG00aHVyrIdK"
);

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;

    const { data: product, isLoading } = useQuery(["orders", id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="text-primary font-bold text-2xl">
                        Hello {product.name}
                    </h2>
                    <h2 className="card-title">
                        Please Pay for: {product.productName}
                    </h2>

                    <p>Your Email: {product.email}</p>
                    <p>Your phone number: {product.phone}</p>
                    <p>Your address: {product.address}</p>

                    <p>Your order quantity: {product.quantity}</p>
                    <p>
                        Please pay:{" "}
                        <span className="text-error">${product.price}</span>
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />{" "}
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
