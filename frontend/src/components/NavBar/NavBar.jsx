import { useState } from "react";
import { assets } from "../../assets/assets";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
    const [menu, setMenu] = useState("home");
    return (
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar-items">
                <Link
                    to="/"
                    onClick={() => setMenu("home")}
                    className={menu === "home" ? "active" : ""}
                >
                    Home
                </Link>
                <a
                    href="#explore-menu"
                    onClick={() => setMenu("menu")}
                    className={menu === "menu" ? "active" : ""}
                >
                    menu
                </a>
                <a
                    href="#app-download"
                    onClick={() => setMenu("mobile-app")}
                    className={menu === "mobile-app" ? "active" : ""}
                >
                    mobile-app
                </a>
                <a
                    href="#footer"
                    onClick={() => setMenu("contactus")}
                    className={menu === "contactus" ? "active" : ""}
                >
                    Contact Us
                </a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-seach-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    );
};

export default NavBar;
