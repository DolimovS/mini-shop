import "./Navbar.css"
import { FaSearch } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";


const Navbar = () => {
    const [darklight, setDarkLight] = useState(false)

    const darkmode = () => {
        const darktoggle = !darklight
        setDarkLight(darktoggle)
         if (darktoggle) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
    }
    return (
        <nav>
            <div className="nav_search">
                <FaSearch className="nav_search_icons nav_icons" />
                <input type="text" placeholder="Search" />
                <FaMicrophoneAlt className="nav_mikrafon_icons nav_icons" />
            </div>
            <div className="nav_right">

                <div onClick={() => darkmode()} className="nav_dark nav_icon">
                    {!darklight && <MdDarkMode className="nav_icons" />}
                    {darklight && <MdLightMode className="lightMode" />}
                </div>
                <div className="nav_bildirish nav_icon">

                    <IoMdNotifications className="nav_icons" />
                </div>
                <div className="nav_savat nav_icon">
                    <FaShoppingBasket className="nav_icons" />
                </div>
                <div className="nav_seller">
                    <NavLink><p>Become a seller</p></NavLink>
                </div>
                <div className="nav_avatar">
                    <img src="../../public/avatar.jpg" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar