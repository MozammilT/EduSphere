import { useState, useEffect } from "react";
import logo from "/logo-icon.svg";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`navbar ${sticky && 'dark-nav'} center`}>
      <div className="nav-content">
        <div className="logo-and-title">
          <img src={logo} className="logo" />
          <p className="title">EduSphere</p>
        </div>
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <button className="btn">Contact Us</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
