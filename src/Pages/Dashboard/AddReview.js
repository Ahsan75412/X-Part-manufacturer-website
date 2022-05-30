import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios
            .post("https://polar-dusk-79749.herokuapp.com/reviews", data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Review Added Successfully...!");
                    toast.success("Review Added Successfully...!");
                    reset();
                }
            });
    };
    return (
        <div className="flex justify-center items-center p-10 lg:p-20">
            <div class="card w-96  bg-base-100 shadow-xl ">
                <h1 className="text-center pt-8 text-2xl">Add a Review </h1>
                <div class="card-body">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
                        <input
                            type="text"
                            {...register("name")}
                            // defaultValue={user.displayName}
                            placeholder="Name"
                            required
                            className="input input-bordered input-warning w-full max-w-xs"
                        />
                        <br />
                        <input
                            type="number"
                            {...register("rating", { min: 0, max: 5 })}
                            placeholder="Rating Out of 5"
                            required
                            className="input input-bordered input-warning w-full max-w-xs"
                        />
                        <br />
                        <textarea
                            {...register("details")}
                            placeholder="Review Details"
                            required
                            className="input input-bordered input-warning w-full max-w-xs"
                        />
                        <br />
                        <input
                            className="btn btn-secondary"
                            type="submit"
                            value="Add Review"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
