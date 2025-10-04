import React from "react";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
// import Home from "./Home";
// import AboutUs from "./AboutUs";
// import Services from "./Services";
// import Contact from "./Contact";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav className="header d-flex justify-content-between align-items-center p-3 ">
        <h4>Logo</h4>

        <div className="nav-link">
          <Link to="/" className="m-4 font-semibold text-white">
          <FontAwesomeIcon icon={faHouse} />  Home
          </Link>
          <Link to="/about" className="m-4 font-semibold text-white">
            About Us
          </Link>
          <Link to="/payment" className="m-4 font-semibold text-white">
            Payment
          </Link>
          <Link to="/services" className="m-4 font-semibold text-white">
            Services
          </Link>
          <Link to="/contact" className="m-4 font-semibold text-white">
            Contact Us
          </Link>
        </div>
      </nav>
      
    </>
  );
};

export default Header;
