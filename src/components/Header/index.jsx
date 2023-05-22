import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = ({ info }) => {
    console.log(info);
  return (
    <>
      <div className="container">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
