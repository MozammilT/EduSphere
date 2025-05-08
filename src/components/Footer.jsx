function Footer() {
  const currYear = new Date().getFullYear();
  console.log(currYear);

  return (
    <div className="center">
      <div className="footer">
        <p className="footer-text">
          © {currYear} EduSphere. All rights reserved.
        </p>
        <div className="tnc">
          <p className="footer-text">Terms of Services</p>
          <p className="footer-text">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
