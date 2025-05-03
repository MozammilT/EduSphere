import darkArrowIcon from "/dark-arrow.png";

function Hero() {
  return (
    <div className="hero-section center">
      <div className="hero-text">
        <h1 className="hero-heading">
          We Ensure better Education for a better World
        </h1>
        <p className="hero-detail">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore More <img src={darkArrowIcon} className="arrow-icon" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
