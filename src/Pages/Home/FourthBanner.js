import React from "react";
import wheel2 from "../../assets/images/wheel2.jpg";

const FourthBanner = () => {
    return (
        <div>
            <div className="card lg:card-side  shadow-xl m-20 px-12 border py-5 bg-gray-50">
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">
                        Most Loved Brand & Secure Life
                    </h2>
                    <p>Engineered for your best workout yet</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">SHOP NOW</button>
                    </div>
                </div>
                <figure>
                    <img
                        className="w-[300px] hover:-translate-x-20 transition ease-in-out duration-300"
                        src={wheel2}
                        alt="Album"
                    />
                </figure>
            </div>
        </div>
    );
};

export default FourthBanner;
