import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-4">
            <div className="flex items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
                <a href="https://www.linkedin.com/in/prabhat-kumar-16b87421b/"><FaLinkedin /></a>
                <a href="https://github.com/freaknu"><FaGithub /></a>
                <a href=""><FaTwitter /></a>
                <a href="https://www.instagram.com/stories/freak._yv/"><FaInstagram /></a>
            </div>
        </nav>
    );
};

export default Navbar;
