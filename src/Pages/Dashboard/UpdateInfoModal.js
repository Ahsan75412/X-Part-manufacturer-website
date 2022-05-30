import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const UpdateInfoModal = () => {
    const { register, handleSubmit, reset } = useForm();
    const [lives, setLives] = useState([]);
    const [study, setStudy] = useState([]);
    const [phn, setPhn] = useState([]);
    const [linked, setLinked] = useState([]);
    const [fb, setFb] = useState([]);
    const [git, setGit] = useState([]);
    const [user] = useAuthState(auth);

    const onSubmit = (data) => {
        const updatedLivesIn = data.livesIn;
        const updatedStudyIn = data.studyIn;
        const updatedPhone = data.phone;
        const updatedFacebook = data.facebook;
        const updatedLinkedIn = data.linkedIn;
        const updatedGithub = data.github;

        const bodyData = {
            updatedLivesIn,
            updatedStudyIn,
            updatedPhone,
            updatedFacebook,
            updatedLinkedIn,
            updatedGithub,
        };
        fetch(
            `https://polar-dusk-79749.herokuapp.com/info?email=${user.email}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyData),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const {
                        updatedNLivesIn,
                        updatedNStudyIn,
                        updatedNPhone,
                        updatedNFacebook,
                        updatedNLinkedIn,
                        updatedNGithub,
                    } = {
                        ...lives,
                        ...study,
                        ...phn,
                        ...linked,
                        ...fb,
                        ...git,
                    };
                    setLives(updatedNLivesIn);
                    setStudy(updatedNStudyIn);
                    setPhn(updatedNPhone);
                    setLinked(updatedNLinkedIn);
                    setFb(updatedNFacebook);
                    setGit(updatedNGithub);
                    reset();
                    toast("Updated Successfully", { type: "success" });
                }
            });
    };
    return (
        <div>
            <label htmlFor="my-modal-6" className="btn btn-primary">
                Update
            </label>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-actions justify-end">
                    <input
                        type="checkbox"
                        id="my-modal-6"
                        className="modal-toggle"
                    />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box px-10 pt-14">
                            <div>
                                <h1 className="text-center font-bold text-3xl uppercase pb-5">
                                    Update Info
                                </h1>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        Studied at
                                    </span>
                                </label>
                                <input
                                    {...register("studyIn")}
                                    type="text"
                                    placeholder="Studied at"
                                    className="input input-bordered input-warning w-full "
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        Your Email
                                    </span>
                                </label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="Your email"
                                    value={user?.email || ""}
                                    className="input input-bordered input-warning w-full"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Lives in</span>
                                </label>
                                <input
                                    {...register("livesIn")}
                                    type="text"
                                    placeholder="Lives in"
                                    className="input input-bordered input-warning w-full "
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    {...register("phone")}
                                    type="text"
                                    placeholder="Phone"
                                    className="input input-bordered input-warning w-full "
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">LinkedIn</span>
                                </label>
                                <input
                                    {...register("linkedin")}
                                    type="text"
                                    placeholder="LinkedIn URL"
                                    className="input input-bordered input-warning w-full "
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Facebook</span>
                                </label>
                                <input
                                    {...register("facebook")}
                                    type="text"
                                    placeholder="facebook URL"
                                    className="input input-bordered input-warning w-full "
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Git hub</span>
                                </label>
                                <input
                                    {...register("github")}
                                    type="text"
                                    placeholder="Git hub URL"
                                    className="input input-bordered input-warning w-full "
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
        </div>
    );
};

export default UpdateInfoModal;
