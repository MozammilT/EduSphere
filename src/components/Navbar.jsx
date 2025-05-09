import { useState, useEffect } from "react";
import logo from "/logo-icon.svg";
import menu_icon from "/menu-icon.png";
import { Link } from "react-scroll";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`navbar ${sticky && "dark-nav"} center`}>
      <div className="nav-content">
        <div className="logo-and-title">
          <img src={logo} className="logo" />
          <p className="title">EduSphere</p>
        </div>
        <ul className="nav-ul">
          <li>
            <Link to="hero-section" smooth={true} offest={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="program" smooth={true} offset={-220} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-120} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-220} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-250} duration={500}>
              Testimonials
            </Link>
          </li>
            <Link
              to="contact"
              smooth={true}
              offset={-180}
              duration={500}
              className="btn nav-btn"
            >
              Contact Us
            </Link>
        </ul>
        <img src={menu_icon} className="nav-menu-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
