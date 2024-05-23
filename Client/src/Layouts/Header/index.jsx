import React from "react";
import { Link } from "react-router-dom";
import "../Header/style.scss";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h2>COLOSHOP</h2>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/shop"}>SHOP</Link>
            </li>
            <li>
              <Link to={"/promotion"}>PROMOTION</Link>
            </li>
            <li>
              <Link to={"/pages"}>PAGES</Link>
            </li>
            <li>
              <Link to={"/blog"}>BLOG</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <FaSearch />
          <FaUserAlt />
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
