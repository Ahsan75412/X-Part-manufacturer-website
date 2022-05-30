import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
import AddInfoModal from "./UpdateInfoModal";
import InfoModal from "./InfoModal";
import UpdateInfoModal from "./UpdateInfoModal";

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const [myInfo, setMyInfo] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(
                `https://polar-dusk-79749.herokuapp.com/info?email=${user.email}`,
                {
                    method: "GET",
                }
            )
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setMyInfo(data);
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [user]);

    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content text-center">
                <div class="max-w-md border rounded-xl">
                    <div className=" pt-8">
                        <div class="avatar">
                            <div class="w-24 mask mask-hexagon ">
                                <img src={user?.photoURL} alt="" />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">{user?.displayName}</p>
                            <p className="text-sm">{user?.email}</p>
                        </div>
                        <div className="space-x-4 py-5">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/feed/"
                            >
                                <button className="fab fa-linkedin btn btn-info text-white btn-xs"></button>
                            </a>

                            <a
                                target="_blank"
                                href="https://www.facebook.com/shahriar.turag/"
                            >
                                <button className="fab fa-facebook btn btn-secondary text-white btn-xs"></button>
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/Shahriar-Turag"
                            >
                                <button className="fab fa-github btn bg-black  text-white btn-xs"></button>
                            </a>
                        </div>
                    </div>
                    <div class="card w-[99%] lg:w-96 bg-base-100 shadow-xl">
                        {myInfo.length === 0 ? (
                            <>
                                <InfoModal />
                            </>
                        ) : (
                            myInfo.map((info) => (
                                <div key={info._id} class="card-body">
                                    <h2 class="text-left text-2xl font-bold">
                                        More info
                                    </h2>
                                    <div className="text-left font-bold space-y-3">
                                        <p>
                                            <i class="fas fa-graduation-cap"></i>{" "}
                                            Studied at &nbsp;{info.studyIn}
                                        </p>
                                        <p>
                                            <i class="fas fa-home"></i>
                                            &nbsp;Lives in {info.livesIn}{" "}
                                        </p>
                                        <p>
                                            {" "}
                                            <i class="fas fa-phone"></i>
                                            &nbsp;Phone: {info.phone}{" "}
                                        </p>
                                    </div>
                                    <div class="card-actions justify-end">
                                        <UpdateInfoModal />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
