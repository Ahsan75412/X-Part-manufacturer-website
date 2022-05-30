import React from "react";

const Review = ({ review, children }) => {
    const { name, details } = review;
    return (
        <div class="card lg:w-96 w-full  bg-primary text-neutral-content">
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{details}</p>
                <div class="card-actions justify-end">
                    <i className="far fa star "></i>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Review;
