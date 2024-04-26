import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function NavBar(){
    return(<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
  <div className="container-fluid">
<img style={{width:"70px"} }src="https://png.pngtree.com/png-clipart/20221228/original/pngtree-a-logo-png-image_8817223.png"></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active btn btn-outline-black text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-black" to="/cart">Cart</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link btn btn-outline-dark" to="/wish">WishList</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-dark" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-dark" to="/signup">SignUP</Link>
        </li>
{/* 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li> className="dropdown-divider"</li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}

        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>)
}
export default NavBar;