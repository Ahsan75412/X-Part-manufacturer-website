import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import PurchaseModal from "./PurchaseModal";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch(
            `http://localhost:5000/products/${productId}`
        )
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setQuantity(data.availableQty);
                setLoading(false);
            });
    }, []);

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-20">
            <figure>
                <img className="" src={product.img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{product.name}</h2>
                <p>
                    {" "}
                    <span className="font-bold">Category:</span>{" "}
                    {product.category}
                </p>
                <p>
                    <span className="font-bold">Details:</span>
                    {product.description}
                </p>
                <p>
                    <span className="font-bold">Minimum order quantity:</span>
                    {product.minOrder}
                </p>
                <p>
                    <span className="font-bold">Available quantity:</span>
                    {quantity}
                </p>
                <p>
                    <span className="font-bold">Price:</span> ${product.price}
                </p>

                <PurchaseModal update={setQuantity} product={product} />
            </div>
        </div>
    );
};

export default ProductDetails;
