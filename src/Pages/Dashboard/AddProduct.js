import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const imageStorageKey = "edd769404c92b5d4062189d64e0a4c70";

    const onSubmit = async (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        category: data.category,
                        availableQty: data.availableQty,
                        minOrder: data.minOrder,
                        img: img,
                    };
                    axios
                        .post(
                            "http://localhost:5000/products",
                            product,
                            {
                                headers: {
                                    authorization: `Bearer ${localStorage.getItem(
                                        "accessToken"
                                    )}`,
                                },
                            }
                        )
                        .then((res) => {
                            if (res.data.insertedId) {
                                alert("Product added successfully");
                                reset();
                                console.log(data);
                            }
                        });
                }
                console.log(result);
            });

        
    };

    return (
        <div className="flex justify-center items-center p-10">
            <div className="card w-96 bg-gray-100 shadow-xl text-primary-content">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">
                        Add a Product
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select
                                {...register("category")}
                                className="select select-warning w-full max-w-xs"
                            >
                                <option>Measuring Tape</option>
                                <option>Pipe Wrench</option>
                                <option>Any Hardware</option>
                                <option>Wood Cutting Disk</option>
                                <option>Welding Machine</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Available Quantity
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("availableQty")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Minimum Order
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum Order"
                                className="input input-bordered w-full max-w-xs"
                                {...register("minOrder")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Price per Product
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price per product"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Image"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        <input
                            className="btn  btn-secondary w-full mt-5"
                            type="submit"
                            value="Add Product"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;