import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Home/Products";
import Login from "./Pages/Account/Login";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/Account/SignUp";
import RequireAuth from "./Pages/Account/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";

import AddReview from "./Pages/Dashboard/AddReview";
import OrderTable from "./Pages/Dashboard/OrderTable";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Users from "./Pages/Dashboard/Users";
import { ToastContainer } from "react-toastify";
import RequireAdmin from "./Pages/Account/RequireAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import Payment from "./Pages/Dashboard/Payment";
import Footer from "./Pages/Shared/Footer";
import Orders from "./Pages/Dashboard/Orders";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/product/:productId"
                    element={
                        <RequireAuth>
                            <ProductDetails />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route index element={<OrderTable />}></Route>
                    <Route path="review" element={<AddReview />}></Route>
                    <Route path="myOrders" element={<MyOrders />}></Route>
                    <Route path="payment/:id" element={<Payment />}></Route>
                    <Route
                        path="users"
                        element={
                            <RequireAdmin>
                                <Users />
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="addProduct"
                        element={
                            <RequireAdmin>
                                <AddProduct />
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="orders"
                        element={
                            <RequireAdmin>
                                <Orders />
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="manage"
                        element={
                            <RequireAdmin>
                                <ManageProducts />
                            </RequireAdmin>
                        }
                    ></Route>
                </Route>
                <Route path="/shop" element={<Products />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
            <ToastContainer></ToastContainer>
            <Footer />
        </div>
    );
}

export default App;