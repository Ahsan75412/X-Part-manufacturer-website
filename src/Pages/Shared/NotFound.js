import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center pt-20 min-h-screen">
            <h1 className=" font-bold text-6xl">404</h1>
            <h1 className="font-bold">OPSS! PAGE NOT FOUND</h1>
            <h5>Sorry, the page you're looking for doesn't exist.</h5>
            <br />
            <Link to="/" className="mx-4">
                <button className="btn btn-secondary px-3">RETURN HOME</button>
            </Link>
        </div>
    );
};

export default NotFound;
