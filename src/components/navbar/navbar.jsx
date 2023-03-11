import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.scss";

export default function Navbar() {
  return (
    <div className={s.flex}>
      <NavLink to={"/allusers"}>All Users</NavLink>
      <br />
      <NavLink to={"/allproduct"}>Products</NavLink>
      <br />
      <NavLink to={"/category"}>Category</NavLink>
    </div>
  );
}
