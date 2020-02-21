import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMain() {
    return (
        <nav id="nav-main">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/beers">Beers</NavLink>
            <NavLink to="/random-beer">Random-beer</NavLink>
            <NavLink to="/new-beer">New-beer</NavLink>
            <NavLink to="/filter-beer">Filter-beer</NavLink>
        </nav>
    );
}