import about_png from "/about.png";
import play_png from "/play-icon.png";

function About() {
  return (
    <div className="about center">
      <div className="about-left">
        <img src={about_png} className="about-img" />
        <img src={play_png} className="play-icon" />
      </div>
      <div className="about-right">
        <h2 className="about-subtitle">ABOUT UNIVERSITY</h2>
        <h3 className="about-title">Nurturing Tomorrow's <br /> Leaders Today</h3>
        <p className="about-p">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className="about-p">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p className="about-p">
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
}

export default About;
