import program_1 from "/program-1.png";
import program_2 from "/program-2.png";
import program_3 from "/program-3.png";
import program_icon_1 from "/program-icon-1.png";
import program_icon_2 from "/program-icon-2.png";
import program_icon_3 from "/program-icon-3.png";

function Programs() {
  return (
    <div className="programs center">
      <div className="program">
        <img src={program_1} className="pro-img" />
        <div className="caption">
          <img src={program_icon_1} className="cap-img" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} className="pro-img" />
        <div className="caption">
          <img src={program_icon_2} className="cap-img" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} className="pro-img" />
        <div className="caption">
          <img src={program_icon_3} className="cap-img" />
          <p>Post Graduation </p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
