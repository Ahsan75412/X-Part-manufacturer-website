import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery("products", () =>
        fetch("https://polar-dusk-79749.herokuapp.com/products", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="p-10 mb-10">
            <h1 className="text-center font-bold text-2xl p-10">
                Manage your products
            </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price per unit</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                            ></ProductRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;