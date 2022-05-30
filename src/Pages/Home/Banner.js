import React from "react";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import bgBanner from "../../assets/images/banner-bg.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div className="big-daddy">
                <div
                    className="carousel w-full "
                    style={{
                        background: `url(${bgBanner})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        
                    }}
                >
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex justify-evenly items-center w-full py-10">
                            <div>
                                <h1 className="text-5xl font-bold pb-9">
                                Xpart is in its <br />
                                initial phase of a <br />
                                brand life cycle.  <br />
                              
                                </h1>
                                <Link to="/shop">
                                    <button className="btn btn-primary">
                                        Discover more
                                    </button>
                                </Link>
                            </div>
                            <img style={{width: "700px"}} src={banner1} alt="" />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex justify-evenly items-center w-full py-10">
                            <div>
                                <h1 className="text-6xl font-bold pb-9">
                                Xpart is in its <br />
                                initial phase of a <br />
                                brand life cycle.  
                                </h1>
                                <button className="btn btn-primary">
                                    Discover more
                                </button>
                            </div>
                            <img style={{width: "700px"}} src={banner2} alt="" />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex justify-evenly items-center w-full">
                            <div>
                                <h1 className="text-6xl font-bold pb-9">
                                Xpart is in its <br />
                                initial phase of a <br />
                                brand life cycle.  
                                </h1>
                                <button className="btn btn-primary">
                                    Discover more
                                </button>
                            </div>
                            <img style={{width: "700px"}} src={banner3} alt="" />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="hero min-h-screen small-daddy"
                style={{
                    background: `url(${bgBanner})`,
                }}
            >
                <div class="hero"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img style={{width: "700px"}} src={banner1} class="w-[90%]" alt="" />
                        <div>
                            <h1 className="text-3xl font-bold pb-9">
                            Xpart is in its <br />
                                initial phase of a <br />
                                brand life cycle.  
                            </h1>

                            <Link to="/shop">
                                <button className="btn btn-base">
                                    Discover more
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
