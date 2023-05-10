import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

const ProductRow = ({ product, index, refetch }) => {
    const { register, handleSubmit, reset } = useForm();
    const { img, name, category, availableQty, price, _id } = product;
    const [quantity, setQuantity] = useState({});
    const [newPrc, setNewPrc] = useState({});

    const { quantityRef, priceRef } = useRef(null);

    const handleDelete = (id) => {
        fetch(`https://x-part-manufacturer.onrender.com/products/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    refetch();
                }
            });
    };

    const onSubmit = (data) => {
        const updatedQuantity = parseInt(data.qty) + parseInt(availableQty);

        const updatedPrice = parseInt(data.prc);
        const bodyData = {
            updatedQuantity,
            updatedPrice,
        };

        fetch(`https://x-part-manufacturer.onrender.com/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const { updatedAvailableQuantity, updatedPrc } = {
                        ...quantity,
                        ...newPrc,
                        quantity: updatedQuantity,
                        newPrc: updatedPrice,
                    };
                    setQuantity(updatedAvailableQuantity);
                    setNewPrc(updatedPrc);
                    reset();
                    toast("Restocked Successfully", { type: "success" });
                }
            });
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name.slice(0, 20)}
                <br />
                <span className="badge badge-ghost badge-sm">{category}</span>
            </td>

            <td>{availableQty}</td>
            <td>{price}</td>
            <td>
                <div className="flex space-x-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-actions justify-end">
                            <label
                                htmlFor="my-modal-6"
                                className="btn btn-xs btn-accent"
                            >
                                Update
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
                                            Update
                                        </h1>
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Quantity
                                            </span>
                                        </label>
                                        <input
                                            ref={quantityRef}
                                            {...register("qty")}
                                            type="number"
                                            placeholder="Quantity"
                                            min={0}
                                            className="input input-bordered input-warning w-full "
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Price
                                            </span>
                                        </label>
                                        <input
                                            ref={priceRef}
                                            {...register("prc")}
                                            type="number"
                                            placeholder="Price"
                                            className="input input-bordered input-warning w-full"
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
                                            value="Update"
                                            className="btn btn-secondary w-full max-w-xs"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>


                    <label
                        for={`id${product._id}`}
                        className="btn btn-xs modal-button bg-error text-white "
                    >
                        Delete
                    </label>

                    <input
                        type="checkbox"
                        id={`id${product._id}`}
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">
                                Are you sure you want to delete this{" "}
                                {product.name}
                            </h3>

                            <div className="modal-action">
                                <label
                                    onClick={() => handleDelete(product._id)}
                                    for={`id${product._id}`}
                                    className="btn"
                                >
                                    Yes
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ProductRow;