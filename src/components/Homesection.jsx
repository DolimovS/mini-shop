import "./Homesection.css";
import { FaBarsStaggered } from "react-icons/fa6";
import changer from "../assets/logo-base.png";

import { IoHomeSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineRssFeed, MdOutlinePermContactCalendar } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Homesection = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuName) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };

    return (
        <div className="homesection">
            <div className="homesection_top">
                <div className="home_top">
                    <img src={changer} alt="" />
                    <FaBarsStaggered />
                </div>
                <div className="home_bottom">
                    <li className="home_btn"> 
                        <div className="dropdown-header" onClick={() => toggleMenu("Home")}>
                            <IoHomeSharp />
                            <span>Home</span>
                        </div>
                        {openMenu === "Home" && (
                            <ul className="dropdown">
                                <li><NavLink className="nav-link" to="/">No links :(</NavLink></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <div className="dropdown-header" onClick={() => toggleMenu("Discover")}>
                            <IoHomeSharp />
                            <span>Discover</span>
                        </div>
                        {openMenu === "Discover" && (
                            <ul className="dropdown">
                                <li><NavLink to="/electronics" className="nav-link">Electronics</NavLink></li>
                                <li><NavLink to="/clothes" className="nav-link">Clothes</NavLink></li>
                                <li><NavLink to="/bags" className="nav-link">Bags</NavLink></li>
                                <li><NavLink to="/food" className="nav-link">Food</NavLink></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <div className="dropdown-header" onClick={() => toggleMenu("Popular Products")}>
                            <AiFillProduct />
                            <span>Popular Products</span>
                        </div>
                        {openMenu === "Popular Products" && (
                            <ul className="dropdown">
                                <li><NavLink className="nav-link" to="/">No links :(</NavLink></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <div className="dropdown-header" onClick={() => toggleMenu("Top Authors")}>
                            <FaUserGroup />
                            <span>Top Authors</span>
                        </div>
                        {openMenu === "Top Authors" && (
                            <ul className="dropdown">
                                <li><NavLink className="nav-link" to="/">No links :(</NavLink></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <div className="dropdown-header" onClick={() => toggleMenu("Feed")}>
                            <MdOutlineRssFeed />
                            <span>Feed</span>
                        </div>
                        {openMenu === "Feed" && (
                            <ul className="dropdown">
                                <li><NavLink className="nav-link" to="/">No links :(</NavLink></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <div className="dropdown-header" onClick={() => toggleMenu("Contact")}>
                            <MdOutlinePermContactCalendar />
                            <span>Contact</span>
                        </div>
                        {openMenu === "Contact" && (
                            <ul className="dropdown">
                                <li><NavLink className="nav-link" to="/">No links :(</NavLink></li>
                            </ul>
                        )}
                    </li>
                </div>
            </div>
            <div className="footer">
                <p>fbdvfxc</p>
            </div>
        </div>
    );
};

export default Homesection;



// import "./Homesection.css"
// import { FaBarsStaggered } from "react-icons/fa6";
// import changer from "../assets/logo-base.png"

// import { IoHomeSharp } from "react-icons/io5";
// import { AiFillProduct } from "react-icons/ai";
// import { FaUserGroup } from "react-icons/fa6";
// import { MdOutlineRssFeed } from "react-icons/md";
// import { MdOutlinePermContactCalendar } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";



// const Homesection = () => {


//     const [openMenu, setOpenMenu] = useState(null);

//   const toggleMenu = (menuName) => {
//     setOpenMenu(openMenu === menuName ? null : menuName);
//   };

//     return (
//         <div className="homesection">
//             <div className="homesection_top">
//                 <div className="home_top">
//                     <img src={changer} alt="" />
//                     <FaBarsStaggered />
//                 </div>
//                 <div className="home_bottom">
//                     <li>
//                         <div className="dropdown-header" onClick={() => toggleMenu("Home")}>
//                             <IoHomeSharp />
//                             <span>Home</span>
//                         </div>
//                         <ul className="dropdown">
//                             <li><NavLink className="nav-link" to="/">No links :(</NavLink></li>
//                         </ul>
//                     </li>
//                     <li>
//                         <div className="dropdown-header" onClick={() => toggleMenu("Discover")}>
//                             <IoHomeSharp />
//                             <span>Discover</span>
//                         </div>
//                         <ul>
//                             <li><NavLink to="/electronics" className="nav-link">Electronics</NavLink></li>
//                             <li><NavLink to="/clothes" className="nav-link">Clothes</NavLink></li>
//                             <li><NavLink to="/bags" className="nav-link">Bags</NavLink></li>
//                             <li><NavLink to="/food" className="nav-link">Food</NavLink></li>
//                         </ul>
//                     </li>
//                     <li>
//                         <div className="dropdown-header" onClick={() => toggleMenu("Popular Products")}>
//                             <AiFillProduct />
//                             <span>Popular Products</span>
//                         </div>
//                         <ul className="dropdown">
//                             <li><NavLink className="nav-link" to="/">No links :(</NavLink></li>
//                         </ul>
//                     </li>
//                     <li>
//                         <div className="dropdown-header" onClick={() => toggleMenu("Top Authors")}>
//                             <FaUserGroup />
//                             <span>Top Authors</span>
//                         </div>
//                         <ul className="dropdown">
//                             <li><NavLink className="nav-link" to="/">No links :(</NavLink></li>
//                         </ul>
//                     </li>
//                     <li>
//                         <div className="dropdown-header" onClick={() => toggleMenu("popular")}>
//                             <MdOutlineRssFeed />
//                             <span>Feed</span></div>
//                         <ul className="dropdown">
//                             <li><NavLink className="nav-link" to="/">No links :(</NavLink></li>
//                         </ul>
//                     </li>
//                     <li>
//                         <div className="dropdown-header" onClick={() => toggleMenu("Feed")}>
//                             <MdOutlinePermContactCalendar />
//                             <span>Contact</span>
//                         </div>
//                         <ul className="dropdown-header" onClick={() => toggleMenu("Contact")}>
//                             <li><NavLink className="nav-link" to="/">No links :(</NavLink></li>
//                         </ul>
//                     </li>
//                 </div>
//             </div>
//             <div className="footer">
//                 <p>fbdvfxc</p>
//             </div>
//         </div>
//     )
// }

// export default Homesection