import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        fetch("https://polar-dusk-79749.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {location.pathname === "/" ? (
                <div className="flex justify-between py-20 flex-col lg:flex-row px-20">
                    <h2 className="text-4xl font-bold py-5 lg:py-0 text-neutral">
                        Top Hot Product
                    </h2>
                    <Link to="/shop" className="link link-primary ">
                        SEE MORE
                    </Link>
                </div>
            ) : (
                <h2 className="text-2xl lg:text-4xl font-bold text-neutral p-10">
                    All Products
                </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 lg:px-20">
                {location.pathname === "/" || location.pathname === "/home "
                    ? products
                        .slice(0, 4)
                        .map((product) => (
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>
                        ))
                    : location.pathname === "/shop"
                        ? products.map((product) => (
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>
                        ))
                        : products.map((product) => (
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>
                        ))}
            </div>
        </div>
    );
};

export default Products;
