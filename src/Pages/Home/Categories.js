import React from "react";
import { Link } from "react-router-dom";
import ct1 from "../../assets/images/ct1.jpg";
import ct2 from "../../assets/images/ct2.jpg";
import ct3 from "../../assets/images/ct3.jpg";
import ct4 from "../../assets/images/ct4.jpg";
import ct5 from "../../assets/images/ct5.jpg";
import ct6 from "../../assets/images/ct6.jpg";

const Categories = () => {
    return (
        <div className="lg:m-20 m-10">
            <div className="flex justify-between pb-20 flex-col lg:flex-row">
                <h2 className="text-4xl text-neutral font-bold py-5 lg:py-0">
                    Top Categories
                </h2>
                <Link to="/shop" className="link link-primary ">
                    SEE MORE
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <div className="card lg:card-side bg-accent shadow-xl">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white">
                            WOOD CUTTING DISK
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-primary">MORE</button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12  w-[200px] transition ease-in-out duration-300"
                            src={ct1}
                            alt="Album"
                        />
                    </figure>
                </div>
                <div className="card lg:card-side bg-accent shadow-xl">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white">
                             CIRCULAR SAW MACHINE
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-primary">MORE</button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12 w-[150px] transition ease-in-out duration-300"
                            src={ct2}
                            alt="Album"
                        />
                    </figure>
                </div>
                <div className="card lg:card-side bg-accent shadow-xl">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white">
                           ELECTRIC PLANNER
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-primary">MORE</button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12 w-[150px] transition ease-in-out duration-300"
                            src={ct3}
                            alt="Album"
                        />
                    </figure>
                </div>
                <div className="card lg:card-side bg-accent shadow-xl">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white">
                            WELDING MACHINE- ARC
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-primary">MORE</button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12 w-[200px] transition ease-in-out duration-300"
                            src={ct4}
                            alt="Album"
                        />
                    </figure>
                </div>
                <div className="card lg:card-side bg-accent shadow-xl">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white">
                            HAND BLOWER
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-primary">MORE</button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12 w-[200px] transition ease-in-out duration-300"
                            src={ct5}
                            alt="Album"
                        />
                    </figure>
                </div>
                <div className="card lg:card-side bg-accent shadow-xl">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white">
                            WELDING MACHINE
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-primary">MORE</button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12 w-[150px] transition ease-in-out duration-300"
                            src={ct6}
                            alt="Album"
                        />
                    </figure>
                </div>
            </div>








        </div>
    );
};

export default Categories;
