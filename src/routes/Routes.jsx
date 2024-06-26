import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddProduct from "../pages/Dashboard/AddProduct";
import ManageAllProduct from "../pages/Dashboard/ManageAllProduct";
import ProductDetails from "../components/Dashboard/ProductDetails";
import EditProduct from "../pages/Dashboard/EditProduct";
import DashboardHome from "../pages/Dashboard/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:3000/products')
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      // {
      //   path: "/dashboard",
      //   element: <PrivateRoute><Dashboard /></PrivateRoute>
      // }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome />
      },
      {
        path: "addProduct",
        element: <PrivateRoute><AddProduct /></PrivateRoute>
      },
      {
        path: "manage",
        element: <PrivateRoute><ManageAllProduct /></PrivateRoute>,
      },
      {
        path: "manage/:id",
        element: <PrivateRoute><ProductDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`)
      },
      {
        path: "edit/:id",
        element: <PrivateRoute><EditProduct /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`)
      }
    ]
  }
]);

export default router;