import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./index.module.scss"
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
<header>
  <div className={style["container"]}>
    <div className="Logo">
    <img src="https://preview.colorlib.com/theme/winter/img/logo.png" alt="" />
    </div>

    <ul>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/add"}>Add</NavLink></li>
      <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
      <li><NavLink to={"/dress"}>Dress</NavLink></li>
     
    </ul>

    <div className="ikons">
    <FaUser />

    </div>
  </div>
</header>
  )
}

export default Header