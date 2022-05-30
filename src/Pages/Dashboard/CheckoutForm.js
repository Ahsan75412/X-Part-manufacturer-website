import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ product }) => {
    const stripe = useStripe();
    const element = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [status, setStatus] = useState("");

    const { _id, price, email, name } = product;

    useEffect(() => {
        fetch(
            "http://localhost:5000/create-payment-intent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify({ price }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !element) {
            return;
        }
        const card = element.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardError(error?.message || "");
        setSuccess("");
        setProcessing(true);

        //confirm card payment
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            });
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError("");
            setTransactionId(paymentIntent.id);
            setStatus(paymentIntent.status);
            console.log(paymentIntent);
            setSuccess("Payment Successful");

            //store payment details in database
            const payment = {
                product: _id,
                transactionId: paymentIntent.id,
                status: paymentIntent.status,
            };

            fetch(
                `hhttp://localhost:5000/orders/${_id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                    body: JSON.stringify({ payment }),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setProcessing(false);
                    console.log(data);
                });
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-primary btn-sm mt-4"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-error">{cardError}</p>}
            {success && (
                <div className="text-accent">
                    <p>{success}</p>
                    <p>
                        Your transaction Id:{" "}
                        <span className="text-accent font-bold">
                            {transactionId}
                        </span>{" "}
                    </p>
                </div>
            )}
        </>
    );
};

export default CheckoutForm;
