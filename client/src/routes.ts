import React from "react";
import Route from "./models/route";

const Home = React.lazy(() => import("./pages/Home"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Product = React.lazy(() => import("./pages/Product"));
const ProductList = React.lazy(() => import("./pages/ProductList"));
const routes: Route[] = [
  { path: "/", exact: true, component: Home, name: "Home" },
  {
    path: "/products/:category",
    exact: true,
    component: ProductList,
    name: "ProductList"
  },
  { path: "/product/:id", exact: true, component: Product, name: "Product" },
  { path: "/cart", exact: true, component: Cart, name: "Cart" },
  { path: "/login", exact: true, component: Login, name: "Login" },
  { path: "/register", exact: true, component: Register, name: "Register" }
];

export default routes;
