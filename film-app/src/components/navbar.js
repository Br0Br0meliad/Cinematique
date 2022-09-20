import React from "react";
import SearchBar from "./SearchBar";

function NavBar(props) {
    return(
    <div className="navbar">
    <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
    </div>

<SearchBar />
</div>)
};

export default NavBar;