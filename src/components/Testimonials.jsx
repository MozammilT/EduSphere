import next_icon from "/next-icon.png";
import back_icon from "/back-icon.png";
import user_1 from "/user-1.png";
import user_2 from "/user-2.png";
import user_3 from "/user-3.png";
import user_4 from "/user-4.png";

function Testimonials() {
  return (
    <div className="testimonials">
      <img src={next_icon} className="testimonials-btn next" />
      <img src={back_icon} className="testimonials-btn back" />
      <div className="slider">
        <ul className="slider-cards">
          {/* <li className="slider-card">
            <div className="slide">
              <div className="user-info">
                <img src={user_1} className="user-img" />
                <div>
                  <h3 className="user-name">Emily William</h3>
                  <span className="user-add">Masachussets, USA</span>
                </div>
              </div>
              <p className="user-para">
                Every corner of EduShere inspires you to learn and grow. The
                support from faculty and peers has been incredible throughout my
                time here.
              </p>
            </div>
          </li> */}
          <li className="slider-card">
            <div className="slide">
              <div className="user-info">
                <img src={user_2} className="user-img" />
                <div>
                  <h3 className="user-name">William Jackson</h3>
                  <span className="user-add">Texas, USA</span>
                </div>
              </div>
              <p className="user-para">
                EduShere has completely transformed my academic journey. The
                faculty is supportive, the environment is vibrant, and the
                resources available truly prepare you for real-world success.
              </p>
            </div>
          </li>
          <li className="slider-card">
            <div className="slide">
              <div className="user-info">
                <img src={user_3} className="user-img" />
                <div>
                  <h3 className="user-name">Amelia Dawson</h3>
                  <span className="user-add">Nevada, USA</span>
                </div>
              </div>
              <p className="user-para">
                From world-class infrastructure to innovative teaching methods,
                EduShere sets a new benchmark in education. I’m proud to be part
                of this journey.
              </p>
            </div>
          </li>
          <li className="slider-card">
            <div className="slide">
              <div className="user-info">
                <img src={user_4} className="user-img" />
                <div>
                  <h3 className="user-name">Ethan Walker</h3>
                  <span className="user-add">California, USA</span>
                </div>
              </div>
              <p className="user-para">
                The collaborative atmosphere at EduShere helped me develop not
                just academically, but personally too. I've built lasting
                friendships and gained confidence in my abilities.
              </p>
            </div>
          </li>
          <li className="slider-card">
            <div className="slide">
              <div className="user-info">
                <img src={user_1} className="user-img" />
                <div>
                  <h3 className="user-name">Ethan Walker</h3>
                  <span className="user-add">California, USA</span>
                </div>
              </div>
              <p className="user-para">
                The collaborative atmosphere at EduShere helped me develop not
                just academically, but personally too. I've built lasting
                friendships and gained confidence in my abilities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
