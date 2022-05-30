import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(
            `http://localhost:5000/user/admin/${email}`,
            {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
            .then((res) => {
                if (res.status === 403) {
                    toast("You are not authorized to do this", {
                        type: "error",
                    });
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast("Successfully made an admin", { type: "success" });
                }
            });
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role !== "admin" && (
                    <button
                        onClick={makeAdmin}
                        className="btn btn-outline btn-sm btn-success"
                    >
                        Make Admin
                    </button>
                )}
            </td>
            {/* <td>
                {role !== "admin" && (
                    <label
                        onClick={makeAdmin}
                        for="my-modal-6"
                        className="btn modal-button"
                    >
                        Make Admin
                    </label>
                )}

                <input type="checkbox" id="my-modal-6" className="modal-toggle" />

                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">
                            Congratulations random Interner user!
                        </h3>
                        <p className="py-4">
                            You've been selected for a chance to get one year of
                            subscription to use Wikipedia for free!
                        </p>
                        <div className="modal-action">
                            <label for="my-modal-6" className="btn">
                                Yay!
                            </label>
                        </div>
                    </div>
                </div>
            </td> */}
            <td>
                <button className="btn btn-outline btn-sm btn-error">
                    Remove User
                </button>
            </td>
        </tr>
    );
};

export default UserRow;
