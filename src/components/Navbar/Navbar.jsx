import {React, useState} from 'react';
// import { Link, NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import "./Navbar.css";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <NavLink smooth to="/#projects">Projects</NavLink>
            </li>
            <li onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <NavLink smooth to="/#hackathons">Hackathons</NavLink>
            </li>
            <li onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <NavLink smooth to="/#experience">Experience</NavLink>
            </li>
        </ul>
    </nav>
  )
}
