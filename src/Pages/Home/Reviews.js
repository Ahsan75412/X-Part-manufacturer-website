import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    //https://limitless-thicket-02169.herokuapp.com
    useEffect(() => {
        setLoading(true);
        fetch("https://polar-dusk-79749.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="page text-center">
                <div
                    className="spinner-grow text-primary m-5 text-center"
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className=" my-20">
            <h1 className="font-bold text-3xl ml-20 my-5 text-neutral">
                Customers Reviews
            </h1>
            <div className="flex justify-center items-center">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-3 ">
                    {reviews.length > 3
                        ? reviews
                            .slice(reviews.length - 3, reviews.length)
                            .map((review) => (
                                <Review
                                    key={review._id}
                                    review={review}
                                    className="flex justify-center items-center"
                                >
                                    {[...Array(parseInt(review.rating))].map(
                                        (x, index) => (
                                            <i
                                                key={index}
                                                className="fas fa-star"
                                            ></i>
                                        )
                                    )}
                                </Review>
                            ))
                        : reviews.map((review) => (
                            <Review key={review._id} review={review}>
                                {[...Array(parseInt(review.rating))].map(
                                    (x, index) => (
                                        <i
                                            key={index}
                                            className="fas fa-star"
                                        ></i>
                                    )
                                )}
                            </Review>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
