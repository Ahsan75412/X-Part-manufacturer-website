import React from "react";
import bg3 from "../../assets/images/bg2.jpeg";
import banner2 from "../../assets/images/banner2.jpg";
import { Link } from "react-router-dom";

const ThirdBanner = () => {
    return (
        <div
            className="my-20 px-20"
            style={{
                backgroundImage: `url(${bg3})`,
                backgroundSize: "cover",
            }}
        >
            <div className="flex justify-between items-center flex-col lg:flex-row py-10">
                <div className="text-white space-y-5">
                    <h1 className="lg:text-5xl text-2xl">
                       Your construction worker in Great Condition with Top Auto Parts
                    </h1>
                    <p>Engineered for your best workout yet</p>
                    <Link to="/shop">
                        <button className="btn btn-neutral my-5">
                            SHOP NOW
                        </button>
                    </Link>
                </div>
                <div className="p-10">
                    <img src={banner2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ThirdBanner;
