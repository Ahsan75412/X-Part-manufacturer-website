import { useEffect, useState } from "react";

const useProductDetails = (productId) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);
    return [product];
};

export default useProductDetails;
