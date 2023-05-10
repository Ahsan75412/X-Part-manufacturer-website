import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            // https://limitless-thicket-02169.herokuapp.com
            const url = `https://x-part-manufacturer.onrender.com/admin/${email}`;
            fetch(url, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        setAdmin(data.admin);
                        setAdminLoading(false);
                    }
                });
        }
    }, [user]);

    return [admin, adminLoading];
};
export default useAdmin;
