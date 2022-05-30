import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

import auth from "../../firebase.init";

const PurchaseModal = ({ product, update }) => {
    const quantityRef = useRef();
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const [price, setPrice] = useState(`${parseInt(product.price) * 50}`);

    const onSubmit = (data, event) => {
        event.preventDefault();
        data.img = product.img;
        data.productName = product.name;
        data.email = user?.email;
        data.quantity = quantityRef.current.value;
        data.price = parseInt(product.price * quantityRef.current.value);
        data.category = product.category;
        data.details = product.description;
        data.status = "Pending";

        axios
            .post("https://polar-dusk-79749.herokuapp.com/orders", data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Product added to my order");
                    reset();
                    update(
                        `${parseInt(product.availableQty) -
                        quantityRef.current.value
                        }`
                    );
                }
            });
    };

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    const handleQty = () => {
        if (quantityRef.current.value !== "") {
            const validateQty = debounce(() => {
                if (
                    parseInt(quantityRef.current.value) <
                    quantityRef.current.min
                ) {
                    quantityRef.current.value = quantityRef.current.min;
                }
                if (
                    parseInt(quantityRef.current.value) >
                    quantityRef.current.max
                ) {
                    quantityRef.current.value = quantityRef.current.max;
                }
                setPrice(
                    `${parseInt(product.price) * quantityRef.current.value}`
                );
            }, 1500);
            validateQty();
        } else {
            setPrice(`${parseInt(product.price) * quantityRef.current.value}`);
        }
    };

    useEffect(() => {
        const quantity = quantityRef.current?.value;
        setPrice(`${parseInt(product.price) * quantity}`);
    }, [quantityRef.current?.value, product.price]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-actions justify-end">
                <label htmlFor="my-modal-6" className="btn btn-primary">
                    purchase
                </label>

                <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box px-10 pt-14">
                        <div>
                            <h1 className="text-center font-bold text-3xl uppercase pb-5">
                                Billing Details
                            </h1>
                        </div>
                        <h4>
                            <span className="font-bold">Billing of:</span>{" "}
                            <span className="text-primary">{product.name}</span>
                        </h4>
                        <div>
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Your name"
                                value={user?.displayName || ""}
                                className="input input-bordered input-warning w-full "
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Your email"
                                value={user?.email || ""}
                                className="input input-bordered input-warning w-full"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                {...register("quantity")}
                                ref={quantityRef}
                                type="number"
                                placeholder="Quantity"
                                className="input input-bordered input-warning w-full "
                                max={product.availableQty}
                                min={50}
                                defaultValue={50}
                                onChange={handleQty}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                {...register("price")}
                                type="number"
                                placeholder="Price"
                                value={price}
                                className="input input-bordered input-warning w-full "
                                disabled
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input
                                {...register("address")}
                                type="text"
                                placeholder="Address"
                                className="input input-bordered input-warning w-full "
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input
                                {...register(" phone")}
                                type="text"
                                placeholder="Phone"
                                className="input input-bordered input-warning w-full "
                            />
                        </div>
                        <div className="modal-action justify-evenly">
                            <label
                                htmlFor="my-modal-6"
                                className="btn btn-sm btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </label>
                            <input
                                type="submit"
                                value="Add to my Order"
                                className="btn btn-secondary w-full max-w-xs"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PurchaseModal;
