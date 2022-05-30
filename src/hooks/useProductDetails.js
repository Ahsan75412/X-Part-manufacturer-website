import { useEffect, useState } from "react";

const useProductDetails = (productId) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const url = `https://polar-dusk-79749.herokuapp.com/products/${productId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);
    return [product];
};

export default useProductDetails;
