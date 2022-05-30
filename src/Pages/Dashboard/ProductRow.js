import React from "react";

const ProductRow = ({ product, index, refetch }) => {
    const { img, name, category, availableQty, price } = product;

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    refetch();
                }
            });
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name.slice(0, 20)}
                <br />
                <span className="badge badge-ghost badge-sm">{category}</span>
            </td>

            <td>{availableQty}</td>
            <td>{price}</td>
            <th>
                <label for="my-modal-6" className="btn modal-button">
                    open modal
                </label>

                <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                />
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
                {/* <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-ghost btn-xs"
                >
                    Delete
                </button> */}

                <label
                    for={`id${product._id}`}
                    className="btn btn-xs modal-button bg-error text-white "
                >
                    Delete
                </label>

                <input
                    type="checkbox"
                    id={`id${product._id}`}
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">
                            Are you sure you want to delete this {product.name}
                        </h3>

                        <div className="modal-action">
                            <label
                                onClick={() => handleDelete(product._id)}
                                for={`id${product._id}`}
                                className="btn"
                            >
                                Yes
                            </label>
                        </div>
                    </div>
                </div>
            </th>
        </tr>
    );
};

export default ProductRow;
